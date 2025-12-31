import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
  }, []);

  const handleDelete = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Todos</h2>
          <Button onClick={() => navigate("/NewTodo")}>+ New Todo</Button>
        </div>

        {todos.length === 0 && <p className="text-gray-400">No todos found. Add a new todo.</p>}

        {todos.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border border-stone-600 text-white">
              <thead className="bg-stone-800">
                <tr>
                  <th className="border border-stone-600 px-3 py-2 text-left">Description</th>
                  <th className="border border-stone-600 px-3 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((t) => (
                  <tr key={t.id} className="hover:bg-stone-700">
                    <td className="border border-stone-600 px-3 py-2">{t.description}</td>
                    <td className="border border-stone-600 px-3 py-2 text-center">
                      <div className="flex justify-center gap-2">
                        <Button size="sm" className="bg-stone-600 border border-stone-500" onClick={() => navigate(`/EditTodo/${t.id}`)}>Edit</Button>
                        <Button size="sm" variant="destructive" className="bg-red-600 border border-stone-600" onClick={() => handleDelete(t.id)}>Delete</Button>
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
