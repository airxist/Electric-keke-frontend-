import IconWrapper from "@/components/IconWrapper";
import dispatchables from "@/utils/dispatchables";
import { useSelector } from "react-redux";

const OtpChoice = ({ title, icon }) => {
  const { chooseOtpMethod } = dispatchables();
  const formData = useSelector((state) => state.formData);

  return (
    <div
      key={title}
      className={`onboarding-inputfield flex items-center gap-x-2 cursor-pointer ${
        title.toLowerCase() === formData.message_type && "bg-basic-200"
      }`}
      onClick={() => chooseOtpMethod(title.toLowerCase())}
    >
      <IconWrapper
        iconElement={icon}
        iconElementProps={{
          size: 24,
        }}
      />
      
      <p className="ml-3">{title}</p>
    </div>
  );
};

export default OtpChoice;
