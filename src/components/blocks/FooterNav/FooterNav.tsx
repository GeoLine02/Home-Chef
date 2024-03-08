import { text } from "../../../helpers/functions";

const FooterNav = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <h1>{text("FOOTER_NAV_ABOUT_COMPANY")}</h1>
      <h1>{text("FOOTER_NAV_CONTACT")}</h1>
      <h1>{text("FOOTER_NAV_DELIVERY")}</h1>
      <h1>{text("FOOTER_NAV_QA")}</h1>
      <h1>{text("FOOTER_NAV_RULES")}</h1>
    </div>
  );
};

export default FooterNav;
