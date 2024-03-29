import { text } from "../../../helpers/functions";
import Logo from "../../elements/Logo";
import DownloadApp from "../DownloadApp/DownloadApp";
import FooterNav from "../FooterNav/FooterNav";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer className="bg-[#3D3D3D] text-white py-16 px-6">
      <div className="lg:flex lg:justify-between max-w-screen-2xl mx-auto my-6">
        <Logo />
        <FooterNav />
      </div>
      <div className="flex flex-col justify-center items-center my-6 gap-4">
        <Social />
        <DownloadApp />
      </div>
      <div className="flex justify-center">
        <p>{text("FOOTER_COPYRIGHT")}</p>
      </div>
    </footer>
  );
};

export default Footer;
