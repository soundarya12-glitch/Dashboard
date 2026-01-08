export default function ProfileAvatar({ avatarUrl }) {
  return (
    <img
      src={avatarUrl}
      alt="avatar"
      className="w-20 h-20 rounded-full mx-auto border"
    />
  );
}
