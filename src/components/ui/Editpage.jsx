// EditPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextInput from "./Textinput";
import { Button } from "@/components/ui/button";

export default function EditPage() {
  const { id } = useParams(); // row id from route
  const navigate = useNavigate();

  const [row, setRow] = useState(null);
  const [errors, setErrors] = useState({});
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Ensure proposalTableData exists
    const data = JSON.parse(localStorage.getItem("proposalTableData")) || [];
    const found = data.find((r) => String(r.id) === String(id)); // string check
    if (!found) console.warn(`Row with id ${id} not found`);
    setRow(found);
  }, [id]);

  if (!row) return <div className="p-6 text-white">Loading...</div>;

  const profileId = row.profileId || id; // profile for activity
  const ACTIVITY_KEY = `activity-user-${profileId}`;

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!row.header?.trim()) newErrors.header = "Title is required";
    if (!row.type?.trim()) newErrors.type = "Section Type is required";
    if (!row.target || Number(row.target) <= 0) newErrors.target = "Target must be > 0";
    if (!row.limit || Number(row.limit) <= 0) newErrors.limit = "Limit must be > 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save changes
  const handleUpdate = () => {
  if (!validate()) return;

  // Update table data
  const data = JSON.parse(localStorage.getItem("proposalTableData")) || [];
  const updatedData = data.map((r) => (r.id === row.id ? row : r));
  localStorage.setItem("proposalTableData", JSON.stringify(updatedData));

  // Detect which fields changed
  const prevRow = data.find((r) => r.id === row.id) || {};
  const changes = [];
  if (prevRow.header !== row.header) changes.push(`Title: "${row.header}"`);
  if (prevRow.type !== row.type) changes.push(`Type: "${row.type}"`);
  if (prevRow.target !== row.target) changes.push(`Target: ${row.target}`);
  if (prevRow.limit !== row.limit) changes.push(`Limit: ${row.limit}`);

  if (changes.length > 0) {
    const prevActivity = JSON.parse(localStorage.getItem(ACTIVITY_KEY)) || [];
    const newEntry = {
      id: prevActivity.length > 0 ? Math.max(...prevActivity.map(a => a.id)) + 1 : 1,
      text: `Edited section: ${changes.join(", ")}`, // only changed fields
      type: "edit",
      createdAt: Date.now(),
    };
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify([newEntry, ...prevActivity]));
  }

  navigate(-1); // go back
};


  return (
    <div className="min-h-screen border border-stone-600 bg-black p-4 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-white mb-6">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            className="accent-white bg-stone-600"
          />
          Enabled
        </label>

        {enabled && (
          <div>
            <h2 className="text-lg font-semibold pb-1 text-white mb-6">Basic Info</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Title */}
              <div>
                <label className="text-sm font-medium text-white">Title</label>
                <TextInput
                  value={row.header}
                  onChange={(v) => setRow({ ...row, header: v })}
                  className={`mt-2 h-8 bg-stone-600 text-white border ${errors.header ? "border-red-500" : "border-gray-400"}`}
                />
                {errors.header && <p className="text-red-400 text-xs mt-1">{errors.header}</p>}
              </div>

              {/* Section Type */}
              <div>
                <label className="text-sm font-medium text-white">Section Type</label>
                <TextInput
                  value={row.type}
                  onChange={(v) => setRow({ ...row, type: v })}
                  className={`mt-2 h-8 bg-stone-600 text-white border ${errors.type ? "border-red-500" : "border-gray-400"}`}
                />
                {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type}</p>}
              </div>

              {/* Target */}
              <div>
                <label className="text-sm font-medium text-white">Target</label>
                <TextInput
                  type="number"
                  value={row.target}
                  onChange={(v) => setRow({ ...row, target: v })}
                  className={`mt-2 h-8 bg-stone-600 text-white border ${errors.target ? "border-red-500" : "border-gray-400"}`}
                />
                {errors.target && <p className="text-red-400 text-xs mt-1">{errors.target}</p>}
              </div>

              {/* Limit */}
              <div>
                <label className="text-sm font-medium text-white">Limit</label>
                <TextInput
                  type="number"
                  value={row.limit}
                  onChange={(v) => setRow({ ...row, limit: v })}
                  className={`mt-2 h-8 bg-stone-600 text-white border ${errors.limit ? "border-red-500" : "border-gray-400"}`}
                />
                {errors.limit && <p className="text-red-400 text-xs mt-1">{errors.limit}</p>}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <Button onClick={() => navigate(-1)}>Cancel</Button>
              <Button onClick={handleUpdate}>Update</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
