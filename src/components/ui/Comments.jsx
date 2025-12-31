import { useState } from "react";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = (e) => {
    if (e.key === "Enter" && comment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: comment,
          user: "S", // first letter avatar
        },
      ]);
      setComment("");
    }
  };

  return (
    <div className="rounded-xl border p-4 mt-6">
      {/* TITLE */}
      <h3 className="font-semibold mb-3 text-white ">Comments</h3>

      {/* INPUT ROW */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-semibold text-green-700">
          S
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Type a reply / comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleAddComment}
          className=" w-full
              bg-stone-800
              text-white
              border border-stone-600
              rounded-xl
              focus h-10 pl-3
            "
        
        ></input>
    
      </div>

      {/* COMMENTS LIST */}
      <div className="mt-4 space-y-3">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-semibold text-green-700">
              {c.user}
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
              {c.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
