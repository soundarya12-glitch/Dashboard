import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProfileAvatar from "./Avatar";
import TodoModal from "./todo";
import AttachmentModal from "./Attachmentmodel";
import ShareModal from "./Sharemodel";
import TagsModal from "./Tagsinput";

interface ProfilePanelProps {
  profileId?: string;
}

export default function ProfilePanel({ profileId }: ProfilePanelProps) {
  const location = useLocation();

  const headerName =
    (location.state as any)?.header ||
    localStorage.getItem(`profile-header-${profileId}`) ||
    "Untitled";

  const [title, setTitle] = useState(headerName);
  const [assignedUsers, setAssignedUsers] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<string[]>([]);
  const [sharedWith, setSharedWith] = useState<string[]>([]);

  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    if (!profileId) return;

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

  const handleAssignedSave = (email: string) => {
    if (!profileId) return;
    const newAssigned = assignedUsers.includes(email)
      ? assignedUsers
      : [...assignedUsers, email];

    setAssignedUsers(newAssigned);
    localStorage.setItem(`assigned-${profileId}`, JSON.stringify(newAssigned));
  };

  const handleTagsSave = (newTags: string[]) => {
    if (!profileId) return;
    setTags(newTags);
    localStorage.setItem(`tags-${profileId}`, JSON.stringify(newTags));
  };

  const handleAttachmentSave = (file: File) => {
    if (!profileId) return;
    const newAttachments = [...attachments, file.name];
    setAttachments(newAttachments);
    localStorage.setItem(
      `attachments-${profileId}`,
      JSON.stringify(newAttachments)
    );
  };

  return (
    <div className="w-72 p-4 ml-8 mt-7 border border-stone-500 rounded-xl bg-stone-900 text-white">
      <ProfileAvatar username={title} profileId={profileId} size="md" />

      <p className="text-center mt-2 text-sm text-gray-300">
        {title} (Profile ID: <span className="font-semibold">{profileId}</span>)
      </p>

      <div className="space-y-3 mt-6">
        <PanelOption label="Assigned To">
          <div className="flex items-center gap-1">
            {assignedUsers.map((user, i) => (
              <ProfileAvatar key={i} username={user} size="sm" profileId={undefined} />
            ))}
            <button
              onClick={() => setShowTodoModal(true)}
              className="w-6 h-6 bg-stone-600 rounded-full text-xs font-bold"
            >
              +
            </button>
          </div>
        </PanelOption>

        <PanelOption label="Tags">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            <button
              onClick={() => setShowTagsModal(true)}
              className="w-6 h-6 bg-stone-600 rounded-full text-xs font-bold"
            >
              +
            </button>
          </div>
        </PanelOption>

        <PanelOption label="Share">
          <div className="flex gap-1 flex-wrap">
            {sharedWith.map((user, i) => (
              <ProfileAvatar key={i} username={user} size="sm" profileId={undefined} />
            ))}
            <button
              onClick={() => setShowShareModal(true)}
              className="w-6 h-6 bg-stone-600 rounded-full text-xs font-bold"
            >
              +
            </button>
          </div>
        </PanelOption>
      </div>

      {showTodoModal && (
        <TodoModal
          taskName={`Task for ${title}`}
          onClose={() => setShowTodoModal(false)}
          onSave={handleAssignedSave}
        />
      )}

      {showTagsModal && (
        <TagsModal
          initialTags={tags}
          onClose={() => setShowTagsModal(false)}
          onSave={handleTagsSave}
        />
      )}

      {showShareModal && (
        <ShareModal
          sharedWith={sharedWith}
          onClose={() => setShowShareModal(false)}
          onSave={setSharedWith}
        />
      )}

      {showAttachmentModal && (
        <AttachmentModal
          onClose={() => setShowAttachmentModal(false)}
          onSelect={handleAttachmentSave}
        />
      )}
    </div>
  );
}

function PanelOption({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-medium">{label}</span>
      {children}
    </div>
  );
}
