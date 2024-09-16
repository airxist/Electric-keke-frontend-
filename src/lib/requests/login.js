import { addItemToLs } from "../ls";
import { showMe } from "./loggedInUser";
import { axiosCustomizedRequest } from "./axiosCustomized";

const loginUser = async (formData, showAlert) => {
  const { username, password, checkPass } = formData;
  const isPasswordMatched = password === checkPass;

  if (!isPasswordMatched) {
    showAlert("confirm password matches");
    throw new Error("password doesnt match");
  }

  try {
    const { data } = await axiosCustomizedRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });

    const { access: accessToken, refresh: refreshToken } = data;
    // tokens
    addItemToLs("accessToken", accessToken);
    addItemToLs("refreshToken", refreshToken);
    // user
    const user = await showMe();
    addItemToLs("user", user);
    // alert success
    showAlert("login successfull");
  } catch (error) {
    console.log(error);
    const {
      data: { detail },
    } = error.response;
    showAlert(detail || "something");
    throw new Error("Credentials have issue");
  }
};

export default loginUser;