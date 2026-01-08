import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function DeskSettings() {
  const [muteSounds, setMuteSounds] = useState(false);
  const [deskTheme, setDeskTheme] = useState("light");
  const [bannerImage, setBannerImage] = useState(null);

  const handleBannerUpload = (e) => {
    setBannerImage(e.target.files[0]);
  };

  return (
    <div className="space-y-6 text-sm text-white">
      {/* 🔹 Mute Sounds */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={muteSounds}
          onChange={(e) => setMuteSounds(e.target.checked)}
          className="accent-white"
        />
        <span>Mute Sounds</span>
      </label>

      {/* 🔹 Desk Theme (SelectTrigger) */}
      <div className="space-y-2">
        <label className="block">Desk Theme</label>

        <Select value={deskTheme} onValueChange={setDeskTheme}>
          <SelectTrigger
            className="
              w-120
              bg-stone-800
              text-white
              border border-stone-600
              rounded-xl
              focus
            "
          >
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>

          <SelectContent className="bg-stone-800 text-white border-stone-600">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 🔹 Banner Image */}
      <div className="space-y-1">
        <label className="block">Banner Image</label>

        <label className="inline-block px-3 py-1 border border-stone-600 rounded cursor-pointer hover:bg-stone-700">
          Attach
          <input type="file" hidden onChange={handleBannerUpload} />
        </label>

        {bannerImage && (
          <p className="text-xs text-gray-400">{bannerImage.name}</p>
        )}
      </div>
    </div>
  );
}
