import { useNavigate } from "react-router-dom";
import { support_links } from "../../constants";
import Btn from "../shared/Btn";
import Togglers from "../shared/Togglers";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAuthPage,
  changeModalContent,
  chooseSupport,
} from "../../store/slices/global-slice";
import { updateBookingData } from "../../store/slices/bookride-slice";
import dispatchables from "../../utils/dispatchables";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const HeroCta = ({ type }) => {
  const user = useCurrentUser();
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModalWithContent } = dispatchables();
  // redux dispatch and globals
  const { support, supportOption } = useSelector((state) => state.global);

  const chooseHowToRide = (key, value) => {
    dispatch(updateBookingData({ key, value }));
  };

  // what kind of support
  const whatSupport = (key) => {
    dispatch(chooseSupport(key));
  };


  return (
    <div className="flex-center gap-2 mt-6">
      {type === "main" || type === "earn" ? (
        <>
          {type === "main" && (
            <Btn
              text="Book a Ride"
              handleClick={() => {
                openModalWithContent("ride");
                chooseHowToRide("booking_type", "ride");
              }}
            />
          )}

          {(type === "earn" && !user) && (
            <Btn
              text="Register"
              handleClick={() => {
                dispatch(changeAuthPage("driver-auth"));
                navigate("/authentication/driver-auth");
              }}
            />
          )}

          {type === "main" && (
            <Btn
              text="Request For Delivery"
              type="secondary"
              handleClick={() => {
                openModalWithContent("delivery");
                chooseHowToRide("booking_type", "delivery");
              }}
            />
          )}
        </>
      ) : (
        <div>
          <Togglers
            text1="Faq"
            text2="Contact Us"
            isConditionTrue={support === "faq"}
            handleClick1={() => whatSupport("faq")}
            handleClick2={() => whatSupport("contact")}
            color="color1"
          />
        </div>
      )}
    </div>
  );
};

export default HeroCta;