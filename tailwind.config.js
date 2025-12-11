import { shadcnPreset } from "./src/components/ui/preset"

export default {
  presets: [shadcnPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
