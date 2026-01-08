import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextInput from "./ui/Textinput";
import { Button } from "@/components/ui/button";

export default function Newcommunication() {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    middleName: "",
    designation: "",
  });

const handleSave = () => {
  if (!contact.firstName) {
    alert("First name is required");
    return;
  }
  if (!contact.middleName) {
    alert("Middle name is required");
    return;
  }
  if (!contact.lastName) {
    alert("Last name is required");
    return;
  }
  if (!contact.designation) {
    alert("Designation is required");
    return;
  }
  

    const existing =
      JSON.parse(localStorage.getItem("Communications")) || [];

    localStorage.setItem(
      "Communications",
      JSON.stringify([...existing, contact])
    );

    navigate("/Communications");
  };

  return (
    <div className="min-h-screen border border-stone-600 bg-black p-4 flex justify-center">
      <div className="w-full max-w-5xl rounded- xl p-4">

        <h2 className="text-lg font-semibold text-white mb-6">
          Add New Communications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 pb-6 gap-6">

          <Input
            label="First Name"
            value={contact.firstName}
            onChange={(v) =>
              setContact({ ...contact, firstName: v })
              
            }
             className="w-full h-6 p-2 mt-3 bg-stone-600 text-white border border-gray-400 focus:border-pink-400"
          />

          <Input
            label="Last Name"
            value={contact.lastName}
            onChange={(v) =>
              setContact({ ...contact, lastName: v })
            }
              className="w-full h-6 p-2 mt-3 bg-stone-600 text-white border border-gray-400 focus:border-pink-400"
          />

          <Input
            label="Middle Name"
            value={contact.middleName}
            onChange={(v) =>
              setContact({ ...contact, middleName: v })
              
            }
              className="w-full h-6 p-2 mt-3 bg-stone-600 text-white border border-gray-400 focus:border-pink-400"
          />

          <Input
            label="Designation"
            value={contact.designation}
            onChange={(v) =>
              setContact({ ...contact, designation: v })
            }
              className="w-full h-6 p-2 mt-3 bg-stone-600 text-white border border-gray-400 focus:border-pink-400"
          />

        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button onClick={() => navigate(-1)} className={undefined} variant={undefined} size={undefined}>Cancel</Button>
          <Button onClick={handleSave} className={undefined} variant={undefined} size={undefined}>Save</Button>
        </div>
      </div>
    </div>
  );
}

/* Reusable input */
function Input({ label, value, onChange,className }) {
  return (
    <div>
      <label className="text-sm text-white gap-3">{label}</label>
      <TextInput
        value={value}
        onChange={onChange}
       className={`${className} `} 
      />
    </div>
  );
}
