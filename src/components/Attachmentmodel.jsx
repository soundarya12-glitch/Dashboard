import React, { useState, useRef } from "react";

export default function AttachmentModal({ onClose, onSelect }) {
  const [activeTab, setActiveTab] = useState("device"); // device / library / link / camera
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef(null);

  // === Handlers for each tab ===

  // Device file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setLink("");
    setCameraOn(false);
  };

  // Library selection (dummy example)
  const handleLibrarySelect = (imageName) => {
    const fakeFile = new File([], imageName); // Replace with real file object if needed
    setFile(fakeFile);
    setLink("");
    setCameraOn(false);
  };

  // Link input
  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setFile(null);
    setCameraOn(false);
  };

  // Open camera
  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setCameraOn(true);
      setFile(null);
      setLink("");
    } catch (err) {
      console.error("Cannot access camera:", err);
      alert("Please allow camera access!");
    }
  };

  // Capture photo from camera
  const handleCapture = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      const capturedFile = new File([blob], "photo.png", { type: "image/png" });
      setFile(capturedFile);
      setCameraOn(false);

      // Stop camera stream
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
    }, "image/png");
  };

  // Upload
  const handleUpload = () => {
    if (!file && !link) {
      alert("Please select a file or enter a link");
      return;
    }

    // Send to parent
    if (file) onSelect(file);
    else if (link) onSelect(link);

    alert("Uploaded successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-stone-900 w-[520px] rounded-xl p-6 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Upload Attachment</h2>
          <button className="text-white text-xl" onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-4">
          {["device", "library", "link", "camera"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "camera") handleOpenCamera();
                else setCameraOn(false);
              }}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Device Upload */}
          {activeTab === "device" && (
            <label className="border border-stone-400 rounded-lg p-10 text-center cursor-pointer block">
              <input type="file" className="hidden" onChange={handleFileChange} />
              <p className="text-white mb-4">Select a file from your device</p>
              <span className="px-4 py-2 bg-stone-600 border border-stone-500 rounded cursor-pointer">
                Choose File
              </span>
            </label>
          )}

          {/* Library */}
          {activeTab === "library" && (
            <div className="flex flex-wrap gap-4">
              {["image1.png", "image2.png", "image3.png"].map((img) => (
                <div
                  key={img}
                  onClick={() => handleLibrarySelect(img)}
                  className="w-24 h-24 bg-gray-300 flex items-center justify-center cursor-pointer rounded hover:bg-gray-400"
                >
                  {img}
                </div>
              ))}
            </div>
          )}

          {/* Link */}
          {activeTab === "link" && (
            <input
              type="text"
              placeholder="Paste link here"
              value={link}
              onChange={handleLinkChange}
              className="w-full p-2 bg-gray-300 rounded-xl border"
            />
          )}

          {/* Camera */}
          {activeTab === "camera" && cameraOn && (
            <div className="flex flex-col items-center gap-4">
              <video ref={videoRef} className="w-full border rounded" autoPlay playsInline />
              <button
                onClick={handleCapture}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Capture Photo
              </button>
            </div>
          )}
        </div>

        {/* Selected File / Link Display */}
        {(file || link) && (
          <div className="mt-4 flex justify-between items-center text-sm">
            <span className="text-white">{file ? file.name : link}</span>
            <button
              onClick={() => { setFile(null); setLink(""); }}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="bg-stone-600 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="bg-stone-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>

      </div>
    </div>
  );
}
