import Logo from "../../elements/Logo";
import DownloadApp from "../DownloadApp/DownloadApp";
import FooterNav from "../FooterNav/FooterNav";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <div className="bg-[#3D3D3D] text-white py-16 px-6">
      <div className="lg:flex lg:justify-between max-w-[960px] mx-auto my-6">
        <Logo />
        <FooterNav />
      </div>
      <div className="flex flex-col justify-center items-center my-6 gap-4">
        <Social />
        <DownloadApp />
      </div>
      <div className="flex justify-center">
        <p>Copyright © 2023 Company name</p>
      </div>
    </div>
  );
};

export default Footer;
