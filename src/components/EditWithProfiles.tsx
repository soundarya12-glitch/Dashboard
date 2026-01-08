import { useParams } from "react-router-dom";
import ProfilePanel from "./Profilepage";
import Addedit from "./ui/Addeditsectionpage";

interface RouteParams {
  id?: string;
  profileId?: string;
}

export default function EditWithProfile() {
  const { id, profileId } = useParams();

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1">
        {/* LEFT – Profile */}
        <div className="-ml-9 -mt-4.5 overflow-y-auto">
          <ProfilePanel profileId={profileId} />
        </div>

        {/* CENTER – Add / Edit Section */}
        <div className="flex-1 overflow-y-auto p-2">
          <Addedit editId={id} />
        </div>
      </div>
    </div>
  );
}
