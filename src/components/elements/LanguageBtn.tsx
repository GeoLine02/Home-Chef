import { useState } from "react";
import { GrLanguage } from "react-icons/gr";

const LanguageBtn = () => {
  const [language, setLanguage] = useState("Rus");
  return (
    <div className="flex flex-col items-center justify-center">
      <GrLanguage size={20} />
      <p>{language}</p>
    </div>
  );
};

export default LanguageBtn;
