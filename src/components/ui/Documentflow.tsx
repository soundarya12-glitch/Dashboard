import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function DocumentFlow() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [logoutAll, setLogoutAll] = useState(true);

  return (
    <div className="space-y-4  pb-2 text-sm text-white">
      {/* PASSWORD INPUT */}
      

      {/* CHECKBOX */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={logoutAll}
          onChange={(e) => setLogoutAll(e.target.checked)}
          className="accent-white"
        />
        <span>
          Logout From All Devices After Changing Password
        </span>
      </label>
    </div>
  );
}
