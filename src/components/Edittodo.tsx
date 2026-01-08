import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextInput from "./ui/Textinput";
import { Button } from "@/components/ui/button";

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState({ description: "" });

  useEffect(() => {
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const current = allTodos.find((t) => String(t.id) === id);
    if (current) setTodo(current);
  }, [id]);

  const handleSave = () => {
    if (!todo.description.trim()) return;
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = allTodos.map((t) => (String(t.id) === id ? todo : t));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    navigate("/todo");
  };

  return (
    <div className="min-h-screen bg-black p-6 flex justify-center">
      <div className="w-full max-w-3xl p-4 border border-stone-600 rounded-xl">
        <h2 className="text-lg font-semibold text-white mb-6">Edit Todo</h2>

        <TextInput
          value={todo.description}
          onChange={(v) => setTodo({ ...todo, description: v })}
          placeholder="Todo Description"
            className="w-50 h-6 p-2 mt-3 bg-stone-600 text-white border border-gray-400 focus:border-pink-400"
        />

        <div className="flex justify-end gap-4 mt-6">
          <Button  onClick={() => navigate("/todo")} className={undefined} variant={undefined} size={undefined}>Cancel</Button>
          <Button onClick={handleSave} className={undefined} variant={undefined} size={undefined}>Save</Button>
        </div>
      </div>
    </div>
  );
}
