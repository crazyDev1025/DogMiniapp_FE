import { useState } from "react";
import Header from "./Header";

function Lang() {
  const languages = [
    { code: "DE", label: "Deutsch" },
    { code: "EN", label: "English" },
    { code: "ES", label: "Español" },
    { code: "FR", label: "Français" },
    { code: "PT", label: "Português" },
    { code: "RU", label: "Русский" },
    { code: "TL", label: "Tagalog" },
    { code: "TR", label: "Türkçe" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const before_hint = "setting";
  return (
    <div className="min-h-[765px]">
      <Header valuable={before_hint} />
      <div className="text-2xl font-bold text-white my-[40px] text-left">Select language</div>

      <div className="px-8">
        {languages.map((language) => (
          <div
            key={language.code}
            className="mb-5 text-lg font-semibold text-white flex justify-between items-center cursor-pointer"
            onClick={() => setSelectedLanguage(language.code)}
          >
            <div className="text-[white] text-[17px] mb-[25px]">{language.label}<span className="text-[#8E8E93]">({language.code})</span></div>
            {selectedLanguage === language.code && (
              <span className="text-white-500">✔</span>
            )}
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Lang;
