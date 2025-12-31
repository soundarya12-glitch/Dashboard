import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TextInput from "./ui/Textinput";

export default function Editcommunications() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blogger, setBlogger] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    designation: "",
    userId: "",
    address: "",
  });

  // Load blogger from localStorage
  useEffect(() => {
    const allBloggers = JSON.parse(localStorage.getItem("Communications")) || [];
    const current = allBloggers.find((b) => String(b.id) === id);
    if (current) setBlogger(current);
  }, [id]);

  // Save changes
  const handleSave = () => {
    if (!blogger.firstName || !blogger.lastName) {
      alert("First Name & Last Name are required");
      return;
    }

    const allBloggers = JSON.parse(localStorage.getItem("Communications")) || [];
    const updatedBloggers = allBloggers.map((b) =>
      String(b.id) === id ? blogger : b
    );
    localStorage.setItem("Communications", JSON.stringify(updatedBloggers));
    navigate("/Communications"); // go back to blogger list
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto bg-stone-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-6">
          Edit Blogger
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            value={blogger.firstName}
            onChange={(val) => setBlogger({ ...blogger, firstName: val })}
            placeholder="First Name"
            className="w-full bg-stone-700 text-white"
          />
          <TextInput
            value={blogger.lastName}
            onChange={(val) => setBlogger({ ...blogger, lastName: val })}
            placeholder="Last Name"
            className="w-full bg-stone-700 text-white"
          />
          <TextInput
            value={blogger.middleName}
            onChange={(val) => setBlogger({ ...blogger, middleName: val })}
            placeholder="Middle Name"
            className="w-full bg-stone-700 text-white"
          />
          <TextInput
            value={blogger.designation}
            onChange={(val) => setBlogger({ ...blogger, designation: val })}
            placeholder="Designation"
            className="w-full bg-stone-700 text-white"
          />
          <TextInput
            value={blogger.userId}
            onChange={(val) => setBlogger({ ...blogger, userId: val })}
            placeholder="User ID"
            className="w-full bg-stone-700 text-white"
          />
          <TextInput
            value={blogger.address}
            onChange={(val) => setBlogger({ ...blogger, address: val })}
            placeholder="Address"
            className="w-full bg-stone-700 text-white"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={() => navigate("/blogger")}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}
