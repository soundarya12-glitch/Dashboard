import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextInput from "./Textinput";
import GenderModal from "../Gendermodel";

/* -------------------- Types -------------------- */

type InfoState = {
  gender: string;
  phone: string;
  mobile: string;
  dob: string;
  location: string;
  address: string;
};

const LOCATIONS = ["Madurai", "Chennai", "Coimbatore"];

/* -------------------- Component -------------------- */

export default function Information() {
  const { id } = useParams();
  const storageKey = id ? `user-${id}-info` : "user-info";

  const [openGender, setOpenGender] = useState(false);

  const [info, setInfo] = useState<InfoState>({
    gender: "",
    phone: "",
    mobile: "",
    dob: "",
    location: "",
    address: "",
  });

  /* ---------------- Load from localStorage ---------------- */

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setInfo(JSON.parse(saved));
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, [storageKey]);

  /* ---------------- Update field + save ---------------- */

  const updateField = (field: keyof InfoState, value: string) => {
    const updated = { ...info, [field]: value };
    setInfo(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  /* ---------------- JSX ---------------- */

  return (
    <div className="min-h-screen bg-black p-4 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* ---------------- Gender Modal (ONLY ONCE) ---------------- */}
        {openGender && (
          <GenderModal
            onSelect={(value: string) => {
              updateField("gender", value);
              setOpenGender(false);
            } }
            onClose={() => setOpenGender(false)} onAdvanced={undefined}          />
        )}

        <h2 className="text-white text-lg font-semibold mb-6">
          More Information
        </h2>

        {/* ---------------- Form Grid ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Gender */}
          <div>
            <label className="text-white">Gender</label>
            <select
              value={info.gender}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "advanced") {
                  setOpenGender(true);
                } else {
                  updateField("gender", value);
                }
              }}
              className="mt-2 w-full h-8 rounded-2xl px-3
              border border-gray-400 text-white bg-stone-600
              focus:border-pink-400 focus:outline-none
              hover:bg-stone-500 hover:border-pink-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Other">Other</option>
              <option value="advanced">Advanced Search</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="text-white">Phone</label>
            <TextInput
              value={info.phone}
              onChange={(v: string) => {
                const onlyNumbers = v.replace(/[^0-9]/g, "");
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
              onChange={(v: string) => {
                const onlyNumbers = v.replace(/[^0-9]/g, "");
                if (onlyNumbers.length <= 10) {
                  updateField("mobile", onlyNumbers);
                }
              }}
              placeholder="Enter mobile number"
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
              border border-gray-400 text-white bg-stone-600
              focus:border-pink-400 focus:outline-none"
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
              onChange={(v: string) => updateField("address", v)}
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
