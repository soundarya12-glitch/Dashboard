// ProfileComments.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function ProfileComments() {
  const { id } = useParams(); // profile id from route
  const COMMENTS_KEY = `comments-user-${id}`;
  const ACTIVITY_KEY = `activity-user-${id}`;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Load comments & activity from localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(COMMENTS_KEY)) || [];
    setComments(savedComments);

    const savedActivity = JSON.parse(localStorage.getItem(ACTIVITY_KEY)) || [];
    setActivityLog(savedActivity);
  }, [COMMENTS_KEY, ACTIVITY_KEY]);

  // Helper: Update activity log persistently
  const addActivity = (type, text) => {
    const newEntry = { type, text, createdAt: Date.now() };
    const updatedLog = [newEntry, ...activityLog];
    setActivityLog(updatedLog);
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(updatedLog));
  };

  // Add comment
  const addComment = () => {
    if (!comment.trim()) return;
    const newComment = {
      id: comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1,
      text: comment.trim(),
      createdAt: Date.now(),
      liked: false,
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(updatedComments));
    addActivity("added", newComment.text);
    setComment("");
  };

  // Delete comment
  const deleteComment = (commentId) => {
    const deleted = comments.find(c => c.id === commentId);
    const updatedComments = comments.filter(c => c.id !== commentId);
    setComments(updatedComments);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(updatedComments));
    addActivity("deleted", deleted.text);
  };

  // Edit comment
  const startEdit = (commentId, text) => {
    setEditingId(commentId);
    setEditingText(text);
  };

  const saveEdit = () => {
    if (!editingText.trim()) return;
    const updatedComments = comments.map(c =>
      c.id === editingId ? { ...c, text: editingText.trim() } : c
    );
    setComments(updatedComments);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(updatedComments));
    addActivity("edited", editingText.trim());
    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => setEditingId(null);

  // Toggle like/unlike
  const toggleLike = (commentId) => {
    const updatedComments = comments.map(c =>
      c.id === commentId ? { ...c, liked: !c.liked } : c
    );
    setComments(updatedComments);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(updatedComments));
    const likedComment = updatedComments.find(c => c.id === commentId);
    addActivity(likedComment.liked ? "liked" : "unliked", likedComment.text);
  };

  // Time ago helper
  const getTimeAgo = (time) => {
    const seconds = Math.floor((Date.now() - time) / 1000);
    if (seconds < 60) return "just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
  };

  // Refresh "time ago" every minute
  useEffect(() => {
    const interval = setInterval(() => setComments(prev => [...prev]), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Comments</h2>

      {/* Input */}
      <div className="flex gap-2 max-w-full mb-4">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={`Type a comment for profile ${id}`}
          className="flex-1 bg-stone-800 text-white  border border-stone-600 rounded-xl h-10 pl-3 focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && addComment()}
        />
        <button
          onClick={addComment}
          className="relative bg-stone-600 text-white px-4 rounded flex items-center"
        >
          Send
          {comments.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {comments.length}
            </span>
          )}
        </button>
      </div>

      {/* Comments List */}
      <div className="border border-stone-600 rounded-xl p-3 bg-stone-800 max-h-[400px] overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-sm">No comments yet</p>
        ) : (
          comments.map((item) => (
            <div
              key={item.id}
              className="bg-stone-700 p-3 rounded-xl mb-3 flex justify-between items-center"
            >
              {editingId === item.id ? (
                <div className="flex flex-col gap-2 w-full">
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="w-full bg-stone-600 text-white px-2 py-1 rounded"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="bg-green-600 px-2 rounded text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-red-600 px-2 rounded text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-gray-300 text-sm flex-1">
                    {item.text} · {getTimeAgo(item.createdAt)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => startEdit(item.id, item.text)}
                      className="bg-stone-500 px-2 rounded text-white text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => navigator.clipboard.writeText(item.text)}
                      className="bg-stone-500 px-2 rounded text-white text-sm"
                    >
                      Copy
                    </button>
                    <button
                      onClick={() => deleteComment(item.id)}
                      className="bg-red-600 px-2 rounded text-white text-sm"
                    >
                      Delete
                    </button>
                    <Heart
                      onClick={() => toggleLike(item.id)}
                      className={`text-xl cursor-pointer ${
                        item.liked ? "fill-red-600" : "text-black"
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Activity Feed */}
    <div className="mt-6 border border-stone-600 rounded-xl p-4 bg-stone-900">
  <h3 className="text-white text-lg mb-4">Activity</h3>

  {activityLog.length === 0 ? (
    <p className="text-gray-400 text-sm">No activity yet</p>
  ) : (
    <div className="relative pl-6">
      {/* Vertical line */}
  

      {activityLog.map((item, index) => (
        <div key={index} className="relative flex gap-4 mb-6">
          {/* Bullet */}
          <div className="relative z-5">
            <span className="w-3 h-3 bg-stone-600 rounded-full  block mt-1"></span>
          </div>

          {/* Content */}
          <div className="text-sm text-white">
            {item.type === "edit" && (
              <>You edited section {item.text}</>
            )}
            {item.type === "added" && (
              <>You added a comment {item.text}</>
            )}
            {item.type === "deleted" && (
              <>You deleted a comment {item.text}</>
            )}
            {item.type === "liked" && (
              <>You liked a comment {item.text}</>
            )}

            <div className="text-gray-400 text-xs mt-1">
              · {getTimeAgo(item.createdAt)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
</div>
  );
}
