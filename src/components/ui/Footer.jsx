import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Magfrai. All rights reserved.
      </div>
    </footer>
  );
}
