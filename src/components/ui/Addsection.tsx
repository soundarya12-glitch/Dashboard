import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextInput from "./Textinput";

import { Button } from "./button";
import Comments from "./Comments";
import ProfilePanel from "../Profilepage";

export default function Addsection() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ default object (no Loading screen issue)
  const [editingRow, setEditingRow] = useState({
    id: null,
    header: "",
    type: "",
    target: "",
    limit: "",
  });

  // LOAD DATA
  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("proposal_sections")) || [];

    const found = data.find((r) => r.id === Number(id));

    if (found) {
      setEditingRow(found);
    }
  }, [id]);

  return (
  
   <div className="min-h-screen border border-stone-600 bg-black p-2 flex justify-center">
        {/* WHITE CARD */}
        
        <div className=" w-full max-w-5xl rounded-xl p-2">
    
          {/* TITLE */}
          <h2 className="text-lg font-semibold  pb-2  text-white mb-6">
            Add New Section
          </h2>
  
          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
  
            {/* Title */}
            <div>
              <label className="text-sm font-medium  mt-1  pr-20  text-white">
                Name
              </label>
              <TextInput 
                value={editingRow.header}
                onChange={(v) =>
                  setEditingRow({ ...editingRow, header: v })
                }
                className=" mt-2  h-8  pl-2 pr-24  border border-gray-400
       hover:border-gray-900
      focus:border-pink-400
      focus:ring-0
      focus:outline-none  text-white  bg-stone-600"
              />
            </div>
  
            {/* Section Type */}
            <div>
              <label className="text-sm font-medium mt-1  pr-20 text-white">
               Email
              </label>
              <TextInput
                value={editingRow.type}
                onChange={(v) =>
                  setEditingRow({ ...editingRow, type: v })
                }
                className="  mt-2  h-8  pl-2 pr-24
                        border border-gray-400
       hover:border-gray-900
      focus:border-pink-400
      focus:ring-0
      focus:outline-none text-white bg-stone-600"
              />
            </div>
  
            {/* Target */}
            <div>
              <label className="text-sm font-medium mt-1  pr-20 text-white">
                Target
              </label>
              <TextInput type="number" 
                value={editingRow.target}
                onChange={(v) =>
                  setEditingRow({ ...editingRow, target: v })
                }
                className="mt-2  h-8  pl-2 pr-24  text-white    border border-gray-400
       hover:border-gray-900
      focus:border-pink-400
      focus:ring-0 text-left
      focus:outline-none  bg-stone-600"
              />
            </div>
  
            {/* Limit */}
    
    
              
               <div>
              <label className="text-sm font-medium mt-1  pr-20 text-left text-white">
                Limit
              </label>
              <TextInput  type="number" 
                value={editingRow.limit}
                onChange={(v) =>
                  setEditingRow({ ...editingRow, limit: v })
                }
                className=" mt-2  h-8   pl-2 pr-24 text-white text-left  bg-stone-600
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
   
            onClick={() => navigate(-1)} className={undefined} variant={undefined} size={undefined}            >
              Cancel
            </Button>
  
            <Button
            onClick={() => {
              const data = JSON.parse(localStorage.getItem("proposal_sections")) || [];

              const updated = data.map((r) => r.id === editingRow.id ? editingRow : r
              );

              localStorage.setItem(
                "proposal_sections",
                JSON.stringify(updated)
              );

              navigate(-1);
            } } className={undefined} variant={undefined} size={undefined}>
  Update
</Button>



          </div>
        </div>
      </div>
    );
  }
  