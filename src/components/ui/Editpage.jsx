import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextInput from "./Textinput";
import { Button } from "@/components/ui/button";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [row, setRow] = useState(null);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("proposalTableData")) || [];
    const found = data.find((r) => r.id === Number(id));
    setRow(found);
  }, [id]);

  if (!row) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black border border-stone-600 p-2 flex justify-center">
      {/* WHITE CARD */}
      <div className=" w-full max-w-5xl rounded-xl p-2">
        
        {/* TITLE */}
        <h2 className="text-lg font-semibold pb-2 text-white mb-6">
          Basic Info
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Title */}
          <div>
            <label className="text-sm font-medium p-1 text-white">
              Title
            </label>
            <TextInput 
              value={row.header}
              onChange={(v) =>
                setRow({ ...row, header: v })
              }
              className=" mt-2 pl-2  h-8  pr-18  border border-gray-400
     hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none  text-white  bg-stone-600"
            />
          </div>

          {/* Section Type */}
          <div>
            <label className="text-sm font-medium text-white">
              Section Type
            </label>
            <TextInput
              value={row.type}
              onChange={(v) =>
                setRow({ ...row, type: v })
              }
              className="  mt-2 pl-2 h-8  pr-18
                      border border-gray-400
     hover:border-gray-900
    focus:border-pink-400
    focus:ring-0
    focus:outline-none text-white bg-stone-600"
            />
          </div>

          {/* Target */}
          <div>
            <label className="text-sm font-medium text-white">
              Target
            </label>
            <TextInput type="number"  
              value={row.target}
              onChange={(v) =>
                setRow({ ...row, target: v })
              }
              className="mt-2 pl-2 h-8  pr-18  text-white    border border-gray-400
     hover:border-gray-900
    focus:border-pink-400
    focus:ring-0 text-left
    focus:outline-none  bg-stone-600"
            />
          </div>

          {/* Limit */}
   
   <div>
            <label className="text-sm font-medium  mt-1 pr-18 text-white">
              Limit
            </label>
           
            <TextInput type="number" 
  value={row.limit}
  onChange={(v) =>
    setRow({ ...row, limit: v })
  }
  className="mt-2 pl-2 h-8  pr-18
             text-white text-left bg-stone-600
             border border-gray-400
             hover:border-gray-900
             focus:border-pink-400
             focus:ring-0
             focus:outline-none"
/>
          </div>
            
          
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-8">
          <Button
 
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              const data =
                JSON.parse(localStorage.getItem("proposalTableData")) || [];

              const updated = data.map((r) =>
                r.id === row.id ? row : r
              );

              localStorage.setItem(
                "proposalTableData",
                JSON.stringify(updated)
              );

              navigate(-1);
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
