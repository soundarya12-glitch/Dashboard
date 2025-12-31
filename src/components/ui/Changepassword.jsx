import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [logoutAll, setLogoutAll] = useState(true);

  return (
    <div className="space-y-4   text-sm text-white">
      {/* PASSWORD INPUT */}
      <div className="space-y-1 pb-4">
        <label className="text-xs text-stone-400">
          Set New Password
        </label>

        <div className="relative mt-2">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" w-120
    bg-stone-800
    text-white
    border border-stone-600
    rounded-xl
    px-3 py-2
    focus:outline-none
    focus:ring-2
    focus:ring-stone-500"

          />

          {/* EYE ICON */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

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
