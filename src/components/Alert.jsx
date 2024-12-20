import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Heading from "./Heading";

const alertTitle = {
  success: "Success",
  info: "Information",
  danger: "Error",
};
const Alert = () => {
  const {
    alert: { msg, type },
  } = useSelector((state) => state.global);

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ y: -200, opacity: 0 }}
      className="alert-container"
    >
      <Heading
        title={alertTitle[type]}
        tclass="text-xl font-bold"
        description={msg}
        dclass="font-medium"
      />
    </motion.div>
  );
};

export default Alert;
