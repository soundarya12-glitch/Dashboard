import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextInput from "./Textinput";
import GenderModal from "../Gendermodel";


export default function Information() {
  const { id } = useParams();
  const storageKey = `user-${id}-info`;

  const [openGender, setOpenGender] = useState(false);

  const [info, setInfo] = useState({
    gender: "",
    phone: "",
    mobile: "",
    dob: "",
    location: "",
    address: "",
  });

  // 🔹 LOAD FROM STORAGE
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setInfo(JSON.parse(saved));
    }
  }, [storageKey]);

  // 🔹 SAVE TO STORAGE
  const updateField = (field, value) => {
    const updated = { ...info, [field]: value };
    setInfo(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };
const LOCATIONS = ["Madurai", "Chennai", "Coimbatore"];

  return (
    <div className="min-h-screen bg-black p-4 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* GENDER MODAL */}
        {openGender && (
          <GenderModal
            onSelect={(value) => updateField("gender", value)}
            onClose={() => setOpenGender(false)}
            className="hover:bg-stone-500"
           
          />
        )}

        <h2 className="text-white text-lg font-semibold mb-6">
          More Information
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Gender */}
          <div>
              <label className="text-white">Gender</label>
            <select
    value={info.gender}
    onChange={(e) => {
      const value = e.target.value;
      if (value === "advanced") {
        setOpenGender(true); // open advanced search modal
      } else {
        updateField("gender", value);
      }
    }}
   className="mt-2 w-full h-8 rounded-2xl px-3 py-1
  border border-gray-400 text-white bg-stone-600
  focus:border-pink-400  focus:outline-none hover:bg-stone-500 hover:border-pink-400  "
  >
    <option  value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Transgender">Transgender</option>
    <option value="Other">Other</option>
    <option value="advanced">Advanced Search</option>
  </select>


{/* Gender Modal */}
{openGender && (
  <GenderModal
    onSelect={(value) => updateField("gender", value)}
    onClose={() => setOpenGender(false)}
  />
)}
           </div>
       
          

          {/* Phone */}
          <div>
            <label className="text-white">Phone</label>
          <TextInput
  value={info.phone}
  onChange={(v) => {
    // 🔹 numbers mattum allow
    const onlyNumbers = v.replace(/[^0-9]/g, "");

    // 🔹 max 10 digits
    if (onlyNumbers.length <= 10) {
      updateField("phone", onlyNumbers);
    }
  }}
  placeholder="Enter phone number"
  className="mt-2 w-full h-8 rounded-2xl px-3 py-2
  border border-gray-400 text-white bg-stone-600
  focus:border-pink-400 focus:outline-none"
/>
</div>

          {/* Mobile */}
          <div>
            <label className="text-white">Mobile</label>
          <TextInput
  value={info.mobile}
  onChange={(v) => {
    // 🔹 numbers mattum allow
    const onlyNumbers = v.replace(/[^0-9]/g, "");

    // 🔹 max 10 digits
    if (onlyNumbers.length <= 10) {
      updateField("mobile", onlyNumbers);
    }
  }}
  placeholder="Enter phone number"
  className="mt-2 w-full h-8 rounded-2xl px-3 py-2
  border border-gray-400 text-white bg-stone-600
  focus:border-pink-400 focus:outline-none"
/>
</div>

          {/* DOB */}
          <div>
            <label className="text-white">DOB</label>
            <input
              type="date"
              value={info.dob}
              onChange={(e) => updateField("dob", e.target.value)}
              className="mt-2 w-full h-8 rounded-2xl px-3 py-2
              border border-gray-400 text-white bg-stone-600
              focus:border-pink-400 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-white">Location</label>
          <select
  value={info.location}
  onChange={(e) => updateField("location", e.target.value)}
  className="mt-2 w-full h-8 rounded-2xl px-3
  border border-gray-400 text-white bg-stone-600"
>
  <option value="">Select Location</option>
  {LOCATIONS.map((loc) => (
    <option key={loc} value={loc}>
      {loc}
    </option>
  ))}
</select>
          </div>

          {/* Address */}
          <div>
            <label className="text-white">Address</label>
            <TextInput
              value={info.address}
              onChange={(v) => updateField("address", v)}
              className="mt-2 w-full h-8 rounded-2xl px-3 py-2
              border border-gray-400 text-white bg-stone-600
              focus:border-pink-400 focus:outline-none"
            />
          </div>

        </div>
      </div>
      </div>


  );
}
