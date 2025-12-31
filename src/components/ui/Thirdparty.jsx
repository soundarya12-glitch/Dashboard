import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function ThirdParty() {
  const [rows, setRows] = useState([
    {
      id: 1,
      provider: "frappe",
      username: "",
      userId: "7b52d293670b38d943d2b325dfaf...",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: Date.now(),
        provider: "",
        username: "",
        userId: "",
      },
    ]);
  };

  const updateRow = (id, field, value) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  return (
    <div className="-mt-7 -ml-3  rounded-xl p-4">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
       
      </div>

      <p className="text-xs text-gray-500 mb-2">Social Logins</p>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-stone-600 text-gray-600">
            <tr className="pt-7">
              <th className="p-2  text-white text-left w-10">
                <input type="checkbox" />
              </th>
              <th className="p-2 text-white text-left w-12">No.</th>
              <th className="p-2 text-white text-left">Provider</th>
              <th className="p-2  text-white text-left">Username</th>
              <th className="p-2  text-white text-left">User ID</th>
              <th className="p-2 w-10"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className="border-t mb-3 "
              >
                <td className="p-2">
                  <input type="checkbox" />
                </td>

                <td className="p-2">{index + 1}</td>

                <td className="p-2">
                  <input
                    value={row.provider}
                    onChange={(e) =>
                      updateRow(
                        row.id,
                        "provider",
                        e.target.value
                      )
                    }
                    className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2">

             </input>
                </td>

                <td className="p-2">
                  <input
                    value={row.username}
                    onChange={(e) =>
                      updateRow(
                        row.id,
                        "username",
                        e.target.value
                      )
                    }
                     className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"></input>
                </td>

                <td className="p-2">
                  <input
                    value={row.userId}
                    onChange={(e) =>
                      updateRow(
                        row.id,
                        "userId",
                        e.target.value
                      )
                    }
                    className="mt-1 bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-full rounded-md  p-2"></input>
                </td>

                <td className="p-2 text-center">
                  <Pencil size={14} className="text-gray-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD ROW BUTTON */}
      <Button
        variant="outline"
          className="
          bg-stone-800 mt-7
              text-white
              border border-stone-600
              
              focus
             w-40 rounded-md  p-2
        "
      
        onClick={addRow}
      >
        Add Row
      </Button>
    </div>
  );
}
