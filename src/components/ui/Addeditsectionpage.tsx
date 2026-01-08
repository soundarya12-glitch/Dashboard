import Comments from "./Comments";
import EditTabs from "./Tabsthree";
import UserTabs from "./Tabstwo";

interface AddeditProps {
  editId?: string;
}

export default function Addedit({ editId }: AddeditProps) {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      {/* DEBUG / USE */}
      {/* <p className="text-white">Edit ID: {editId}</p> */}

      <EditTabs />
      <Comments  />
    </div>
  );
}
