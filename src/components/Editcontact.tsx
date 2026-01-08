import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TextInput from "./ui/Textinput";

export default function EditContact() {
  const { id } = useParams(); // get contact id from route
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    designation: "",
    userId: "",
    address: "",
  });

  // Load contact from localStorage
  useEffect(() => {
    const allContacts = JSON.parse(localStorage.getItem("Usercontact")) || [];
    const current = allContacts.find((c) => c.id === Number(id));
    if (current) setContact(current);
  }, [id]);

  // Handle Save
  const handleSave = () => {
    if (!contact.firstName || !contact.lastName) {
      alert("First Name & Last Name are required");
      return;
    }

    const allContacts = JSON.parse(localStorage.getItem("Usercontact")) || [];
    const updatedContacts = allContacts.map((c) =>
      c.id === Number(id) ? contact : c
    );
    localStorage.setItem("Usercontact", JSON.stringify(updatedContacts));
    navigate("/Usercontact"); // go back to contacts list
  };

  return (
    <div className="min-h-screen bg-black p-6">
          

      <div className="max-w-4xl mx-auto bg-stone-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-6">
          Edit Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            value={contact.firstName}
            onChange={(val) =>
              setContact({ ...contact, firstName: val })
            }
            placeholder="First Name"
            className="w-full bg-stone-700 text-white px-3 py-2 rounded"
          />
          <TextInput
            value={contact.lastName}
            onChange={(val) =>
              setContact({ ...contact, lastName:val })
            }
            placeholder="Last Name"
            className="w-full bg-stone-700 text-white px-3 py-2 rounded"
          />
          <TextInput
            value={contact.middleName}
            onChange={(val) =>
              setContact({ ...contact, middleName: val })
            }
            placeholder="Middle Name"
            className="w-full bg-stone-700 text-white px-3 py-2 rounded"
          />
          <TextInput
            value={contact.designation}
            onChange={(val) =>
              setContact({ ...contact, designation:val})
            }
            placeholder="Designation"
            className="w-full bg-stone-700 text-white px-3 py-2 rounded"
          />
          <TextInput
            value={contact.userId}
            onChange={(val) =>
              setContact({ ...contact, userId: val })
            }
            placeholder="User ID"
            className="w-full bg-stone-700 text-white px-3 py-2 rounded"
          />
          <TextInput
            value={contact.address}
            onChange={(val) =>
              setContact({ ...contact, address: val })
            }
            placeholder="Address"
            className="w-full bg-stone-700 text-white px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            onClick={() => navigate("/Usercontact")} className={undefined} size={undefined}          >
            Cancel
          </Button>
          <Button onClick={handleSave} className={undefined} variant={undefined} size={undefined}>Save</Button>
        </div>
      </div>
    </div>
  );
}
