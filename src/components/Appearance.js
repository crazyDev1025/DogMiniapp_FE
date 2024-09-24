import React, { useState } from "react";
import Header from "./Header";

function Appearance() {
  const [settings, setSettings] = useState({
    feedback: false,
    rings: false,
    sounds: false,
    interface: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const before_hint = "setting";

  return (
    <div className="relative min-h-screen">
      <Header valuable={before_hint} />
      <div className="text-2xl font-bold text-white mt-10 mb-1 text-left">Appearance</div>
      <p className="text-sm font-semibold text-gray-400 w-60 text-left mb-[40px]">
        Various effects and animations that make the app look amazing
      </p>

      <div className="mx-6 space-y-10">
        {[
          { label: "Haptic feedback", key: "feedback" },
          { label: "Rings animations", key: "rings" },
          { label: "Sounds", key: "sounds" },
          { label: "Interface effect", key: "interface" },
        ].map(({ label, key }) => (
          <div key={key} className="flex justify-between">
            <span className="text-lg font-medium text-white">{label}</span>
            <div
              onClick={() => toggleSetting(key)}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                settings[key] ? "bg-blue-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                  settings[key] ? "translate-x-6" : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-36 h-1 bg-white rounded-full absolute bottom-[-12px] left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
}

export default Appearance;
