import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-6 items-center">
      <FaInstagram size={20} color="white" />
      <FaLinkedin size={20} color="white" />
      <FaFacebook size={20} color="white" />
    </div>
  );
};

export default Social;
