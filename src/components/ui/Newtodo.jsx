import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "./Textinput";
import { Button } from "@/components/ui/button";

export default function NewTodo() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    id: Date.now(),
    description: "",
  });

  const handleSave = () => {
     if (!todo.description) {
    alert("Description is required");
    return;
  }

    const existing = JSON.parse(localStorage.getItem("todos")) || [];
    localStorage.setItem("todos", JSON.stringify([...existing, todo]));
    navigate("/todo");
  };

  return (
    <div className="min-h-screen bg-black p-6 flex justify-center">
      <div className="w-full max-w-3xl p-4 border border-stone-600 rounded-xl">
        <h2 className="text-lg font-semibold text-white mb-6">Add New Todo</h2>

        <TextInput
          value={todo.description}
          onChange={(v) => setTodo({ ...todo, description: v })}
          placeholder="Todo Description"
                      className="w-70 h-6 p-2 mt-3 bg-stone-600 text-white border border-gray-400 focus:border-pink-400"
        />

        <div className="flex justify-end gap-4 mt-6">
          <Button onClick={() => navigate("/todo")}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}
