import { useState } from "react";
import Desksettings from "./Desksettings";
import NavigationSettings from "./Navigationsettings";
import StatusSettings from "./Statussettings";
import MoreInformation from "../Moreinformation";
import Timeline from "../Timeline";
import Reference from "../Reference";
import Emailinbox from "../Emailinbox";
const sections = [
  "Status",
  "More Information",
  "Reference",
  "Timeline Links",
  "Email Inbox",
];
const sectionComponents = {
  "Status":StatusSettings,
  "More Information":MoreInformation,
 "Reference":Reference,
    "Timeline Links":Timeline,
      "Email Inbox":Emailinbox,

   


};
export default function Newcommunication() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl text-white mx-auto mt-6 border rounded-lg ">
        
      {sections.map((title, index) => (
        <div key={index} className="border-b last:border-b-0">
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
          >
            {title}
            <span className="text-xl">
              {openIndex === index ? "▴" : "▾"}
            </span>
          </button>

          {/* Content */}
          {openIndex === index && (
            <div className="px-4 py-3   border border-stone-600 text-sm text-white">
              {(() => {
                const Component = sectionComponents[title];
                return Component ? <Component /> : <div>Coming Soon</div>;
              })()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
