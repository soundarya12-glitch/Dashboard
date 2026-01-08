import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function UserContact() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  // LOAD CONTACTS
  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("Usercontact")) || [];
    setContacts(data);
  }, []);

  // DELETE CONTACT
  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    localStorage.setItem(
      "Usercontact",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            User Contacts
          </h2>

          <Button onClick={() => navigate("/Newcontact")}>
            + New Contact
          </Button>
        </div>

        {/* EMPTY STATE */}
        {contacts.length === 0 && (
          <p className="text-gray-400">
            No contacts found. Add a new contact.
          </p>
        )}

        {/* TABLE */}
        {contacts.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border border-stone-600 text-white">
              <thead className="bg-stone-800">
                <tr>
                  <th className="border border-stone-600 px-3 py-2 text-left">
                    Name
                  </th>
                    <th className="border border-stone-600 px-3 py-2 text-left">
                    Last name
                  </th>
                    <th className="border border-stone-600 px-3 py-2 text-left">
                    Middle name
                  </th>
                  <th className="border border-stone-600 px-3 py-2 text-left">
                    Designation
                  </th>
                  <th className="border border-stone-600 px-3 py-2 text-left">
                    User ID
                  </th>
                  <th className="border border-stone-600 px-3 py-2 text-left">
                    Address
                  </th>
                  <th className="border border-stone-600 px-3 py-2 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr
                    key={c.id}
                    className="hover:bg-stone-700"
                  >
                    <td className="border border-stone-600 px-3 py-2">
                      {c.firstName}
                    </td>
    <td className="border border-stone-600 px-3 py-2">
                       {c.lastName}
                    </td>
                                      
    <td className="border border-stone-600 px-3 py-2">
                       {c.middleName}
                    </td>
                    
                    <td className="border border-stone-600 px-3 py-2">
                      {c.designation}
                    </td>

                    <td className="border border-stone-600 px-3 py-2">
                      {c.userId}
                    </td>

                    <td className="border border-stone-600 px-3 py-2">
                      {c.address}
                    </td>

                    <td className="border border-stone-600 px-3 py-2 text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                               className="bg-stone-600 border border-stone-500"
                          onClick={() =>
                            navigate(`/editcontact/${c.id}`)
                          }
                        >
                          Edit
                        </Button>

                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(c.id)}
                              className="bg-red-600 border border-stone-600"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
