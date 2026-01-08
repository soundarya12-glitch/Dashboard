import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Communications() {
  const navigate = useNavigate();
  const [bloggers, setBloggers] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("Communications")) || [];
    setBloggers(data);
  }, []);

  const handleDelete = (id) => {
    const updated = bloggers.filter((b) => b.id !== id);
    setBloggers(updated);
    localStorage.setItem(
      "Communications",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
           Communicatioons
          </h2>

        
          <Button onClick={() => navigate("/Newscommunication")} className={undefined} variant={undefined} size={undefined}>
            + New communications
          </Button>
        </div>

        {bloggers.length === 0 && (
          <p className="text-gray-400">
            No bloggers found. Add a new blogger.
          </p>
        )}

        {bloggers.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border border-stone-600 text-white">
              <thead className="bg-stone-800">
                <tr>
                  <th className="border border-stone-600 px-3 py-2 text-left">
                    Name
                  </th>
                   <th className="border border-stone-600 px-3 py-2 text-left">
                    last Name
                  </th>
                   <th className="border border-stone-600 px-3 py-2 text-left">
                    Middle Name
                  </th>
                  <th className="border border-stone-600 px-3 py-2 text-left">
                    Designation
                  </th>
                  <th className="border border-stone-600 px-3 py-2 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

             
          <tbody>
                {bloggers.map((b) => (
                  <tr key={b.id} className="hover:bg-stone-700">
                    <td className="border border-stone-600 px-3 py-2">
                      {b.firstName} 
                    </td>
<td className="border border-stone-600 px-3 py-2">
                      {b.lastName}
                    </td>
                    <td className="border border-stone-600 px-3 py-2">
                     {b.middleName}
                    </td>
                    <td className="border border-stone-600 px-3 py-2">
                      {b.designation}
                    </td>

                    <td className="border border-stone-600 px-3 py-2 text-center">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          className="bg-stone-600 border border-stone-500"
                          onClick={() => navigate(`/editcommunications/${b.id}`)} variant={undefined}                        >
                          Edit
                        </Button>

                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(b.id)}
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
