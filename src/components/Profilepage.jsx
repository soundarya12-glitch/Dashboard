// ProfilePanel.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProfileAvatar from "./Avatar";
import TodoModal from "./todo";
import AttachmentModal from "./Attachmentmodel";
import ShareModal from "./Sharemodel";
import TagsInput from "./Tagsinput";

export default function ProfilePanel() {
  const { profileId } = useParams();
  const location = useLocation();

  const headerName =
    location.state?.header ||
    localStorage.getItem(`profile-header-${profileId}`) ||
    "Untitled";

  const [title, setTitle] = useState(headerName);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [sharedWith, setSharedWith] = useState([]);

  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // Load from localStorage
  useEffect(() => {
    localStorage.setItem(`profile-header-${profileId}`, headerName);

    setAssignedUsers(
      JSON.parse(localStorage.getItem(`assigned-${profileId}`) || "[]")
    );
    setTags(JSON.parse(localStorage.getItem(`tags-${profileId}`) || "[]"));
    setAttachments(
      JSON.parse(localStorage.getItem(`attachments-${profileId}`) || "[]")
    );
    setSharedWith(
      JSON.parse(localStorage.getItem(`share-${profileId}`) || "[]")
    );
  }, [profileId, headerName]);

  // Handlers
  const handleAssignedSave = (email) => {
    const newAssigned = assignedUsers.includes(email)
      ? assignedUsers
      : [...assignedUsers, email];

    setAssignedUsers(newAssigned);
    localStorage.setItem(`assigned-${profileId}`, JSON.stringify(newAssigned));
  };

  const handleTagsSave = (newTags) => {
    setTags(newTags);
    localStorage.setItem(`tags-${profileId}`, JSON.stringify(newTags));
  };

  const handleAttachmentSave = (file) => {
    const newAttachments = [...attachments, file.name]; // store file name
    setAttachments(newAttachments);
    localStorage.setItem(`attachments-${profileId}`, JSON.stringify(newAttachments));
  };

  const handleShareSave = (newShare) => {
    setSharedWith(newShare);
    localStorage.setItem(`share-${profileId}`, JSON.stringify(newShare));
  };

  const removeTag = (i) => setTags(tags.filter((_, idx) => idx !== i));
  const removeAttachment = (i) => setAttachments(attachments.filter((_, idx) => idx !== i));

  return (
    <div className="w-72 p-4 ml-8 mt-7 border border-stone-500 rounded-xl bg-stone-900 text-white">

      {/* Profile Avatar */}
      <ProfileAvatar username={title} profileId={profileId} size="md" />
      <p className="text-center mt-2 text-sm text-gray-300">
        {title} (Profile ID: <span className="font-semibold">{profileId}</span>)
      </p>

      <div className="space-y-3 mt-6">

        {/* Assigned To */}
        <PanelOption label="Assigned To">
          <div className="flex items-center gap-1">
            {assignedUsers.map((user, i) => (
              <ProfileAvatar key={i} username={user} size="sm" />
            ))}
            <button
              onClick={() => setShowTodoModal(true)}
              className="w-6 h-6 flex items-center justify-center bg-stone-600 text-white rounded-full text-xs font-bold"
            >
              +
            </button>
          </div>
        </PanelOption>

        {/* Attachments */}
        <PanelOption label="Attachments">
          <div className="flex flex-col-3 gap-1  w-full">
            {attachments.map((att, i) => (
              <div key={i} className="flex justify-between  items-center text-xs bg-stone-600 px-2 py-1 rounded-xl">
                <span>{att}</span>
                <button
                  onClick={() => removeAttachment(i)}
                  className="text-white ml-2 text-base"
                >
                  x
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowAttachmentModal(true)}
              className="w-6 h-6 flex items-center justify-center bg-stone-600 text-white rounded-full text-xs font-bold mt-1"
            >
              +
            </button>
          </div>
        </PanelOption>

        {/* Tags */}
        <PanelOption label="Tags" onClick={() => setShowTagsModal(true)}>
          <div className="flex gap-1 flex-wrap">
            {tags.map((tag, i) => (
              <span key={i} className="bg-blue-700 text-xs px-2 rounded flex items-center gap-1">
                {tag}
                <button onClick={() => removeTag(i)}>x</button>
              </span>
            ))}
          </div>
        </PanelOption>

   <PanelOption label="Share">
  <div className="flex gap-1 flex-wrap">
    {sharedWith.map((user, i) => (
      <ProfileAvatar key={i} username={user} size="sm" />
    ))}
    <button
      onClick={() => setShowShareModal(true)}
      className="w-6 h-6 flex items-center justify-center bg-stone-600 text-white rounded-full text-xs font-bold mt-1"
    >
      +
    </button>
  </div>
</PanelOption>

{showShareModal && (
  <ShareModal
    sharedWith={sharedWith}
    onClose={() => setShowShareModal(false)}
    onSave={(users) => {
      setSharedWith(users);
      localStorage.setItem(`share-${profileId}`, JSON.stringify(users));
    }}
  />
)}

      </div>

      {/* Modals */}
      {showTodoModal && (
        <TodoModal
          taskName={`Task for ${title}`}
          onClose={() => setShowTodoModal(false)}
          onSave={handleAssignedSave}
        />
      )}
      {showAttachmentModal && (
        <AttachmentModal
          onClose={() => setShowAttachmentModal(false)}
          onSelect={handleAttachmentSave} // file passed here
        />
      )}
      {showTagsModal && (
        <TagsInput
          profileId={profileId}
          tags={tags}
          onClose={() => setShowTagsModal(false)}
          onSave={handleTagsSave}
        />
      )}
      {showShareModal && (
        <ShareModal
          profileId={profileId}
          sharedWith={sharedWith}
          onClose={() => setShowShareModal(false)}
          onSave={handleShareSave}
        />
      )}

    </div>
  );
}

function PanelOption({ label, onClick, children }) {
  return (
    <div className="flex items-center justify-between py-2 cursor-pointer">
      <span className="font-medium">{label}</span>
      <div className="flex items-center gap-1">
        {children}
        {onClick && (
          <button
            onClick={onClick}
            className="text-white font-bold px-2 py-1 rounded"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
