import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Connections from "./Connections";
import Desksettings from "./Desksettings";
import NavigationSettings from "./Navigationsettings";
import ListSettings from "./Listsettings";
import FormSettings from "./Formsettings";
import ChangePassword from "./Changepassword";
import DocumentFlow from "./Documentflow";
import Email from "./Email";
import App from "./App";
import Workspace from "./Workspace";
import ApiAccess from "./Api";
import Security from "./Security";
import ThirdParty from "./Thirdparty";

const settings = [
  "Desk Settings",
  "Navigation Settings",
  "List Settings",
  "Form Settings",
  "Change Password",
  "Document Follow",
  "Email",
  "Workspace",
  "App",
  "Security Settings" ,
  "Third Party Authentication",
  "API Access",
];
const settingComponents = {
  "Desk Settings": Desksettings,
  "Navigation Settings":NavigationSettings,
    "List Settings":ListSettings,
    "Form Settings":FormSettings,
     "Change Password":ChangePassword,
     "Document Follow":DocumentFlow,
     "Email":Email,
      "Workspace":Workspace,
     "App":App,
  "Security Settings":Security,
  "Third Party Authentication":ThirdParty,
     "API Access":ApiAccess


};
export default function Settings() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-300 border  border-stone-600   divide-x">
      {settings.map((item, index) => (
        <div  className=" border border-stone-600"key={index}>
          {/* HEADER */}
          <button 
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full gap-20 flex justify-between   items-center px-4 py-3 text-left font-medium"
          >
            {item}
            <ChevronDown
              className={` transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>

          {/* CONTENT */}
          {openIndex === index && (
            <div className="px-4 py-3   border border-stone-600 text-sm text-white">
              {(() => {
                const Component = settingComponents[item];
                return Component ? <Component /> : <div>Coming Soon</div>;
              })()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}