import React from "react";
import SharedStepLayout from "../SharedStepLayout";
import CustomizedBtn from "../../shared/CustomizedBtn";
import { Link, useNavigate } from "react-router-dom";
import ForgetTab from "../../auth/ForgetTab";
import ReusableFormRows from "../../auth/ReusableFormRows";
import Logo from "../../shared/Logo";
import Heading from "../../shared/Heading";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import Google from "../../../assets/svg/Google";
import dispatchables from "../../../utils/dispatchables";
import { useGlobalAuthContext } from "../../../contexts/AuthContext";
import { LoginUser } from "../../../services/auth";

const Login = ({ nextProcess }) => {
  const navigate = useNavigate();
  const { username, password } = useSelector((state) => state.formData);
  const isDisbaled = useAreInputsFilled(username && password);
  const { AuthenticateLogin } = useGlobalAuthContext();
  const { loading, unloading, showAlert } = dispatchables();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading();
    try {
      const link = await LoginUser({
        username,
        password,
      });
      console.log(link);
      unloading();
      AuthenticateLogin();
      showAlert("Login Sucess");
      navigate(link);
    } catch (error) {
      showAlert(error.message);
      unloading();
    }
  };
  return (
    <SharedStepLayout text="Welcome to Eco-Ride join us in making a difference by choosing sustainable transportation. Login to start your eco-friendly journey today!">
      <div className="auth-page-right">
        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading title="Log in to Your Account" tclass="auth-title" />
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="space-y-7">
              <ReusableFormRows type="login" />
            </div>

            <div className=" mt-14">
              <ForgetTab nextProcess={nextProcess} />
              <div className="w-[343px] mx-auto border">
                <CustomizedBtn
                  text="Login"
                  className="primary-btn h-14 w-full rounded-full"
                  disabled={isDisbaled}
                />

                <div className="mt-5">
                  <p className="switch-login my-[50px]">
                    Dont have an account?{" "}
                    <Link
                      // to="/authentication/register"
                      // onClick={() => changeAuthenticationPage("register")}
                      className="text-eco-green"
                    >
                      Sign Up
                    </Link>
                  </p>

                  <CustomizedBtn
                    text="Continue with Google"
                    className="w-full h-14 rounded-full bg-white shadow-md text-black"
                    icon={<Google />}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default Login;