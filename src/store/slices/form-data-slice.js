import { addItemToLs } from "../../lib/ls";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  fullname: "",
  email: "",
  password: "",
  checkPass: "",
  phone: "",
  state: "",
  address: "",
  message_type: "email",
  otpValue: "",
};

const formDataSlice = createSlice({
  name: "form-data",
  initialState,
  reducers: {
    changeInputValue(state, action) {
      const { key, value } = action.payload;
      const newFormData = { ...state, [key]: value };
      console.log(key, value);
      addItemToLs("formData", newFormData);
      return newFormData;
    },
    setFormData(state, action) {
      const { formData } = action.payload;
      return { ...formData };
    },
  },
});

export const { changeInputValue, setFormData } = formDataSlice.actions;

export default formDataSlice.reducer;