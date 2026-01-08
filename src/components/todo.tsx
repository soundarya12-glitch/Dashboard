// TodoModal.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function TodoModals({ onClose, onSave, taskName }) {
  const assignedEmails = [
    "soundarya2300@gmail.com",
    "person2@example.com",
    "sabithabharathi64@gmail.com"
  ];

  const [selectedEmail, setSelectedEmail] = useState(assignedEmails[0]);

  const sendEmail = async () => {
    try {
      await emailjs.send(
        "service_npfzlpf",
        "template_k6c7mzr",
        {
          to_email: selectedEmail,
          task_name: taskName || "A new task has been assigned",
        },
        "7_SZwpJxTKiEoXsId"
      );

      alert(`Email sent to ${selectedEmail}!`);

      // 🔥 Save assigned user to ProfilePanel
      onSave(selectedEmail);

      onClose();
    } catch (error) {
      console.error("Email failed:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-stone-800 w-96 rounded-xl p-6 relative">
        <h2 className="text-white text-lg font-semibold mb-4">Assigned To</h2>

        <select
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
          className="w-full text-white bg-stone-600 p-2 mb-6 rounded"
        >
          {assignedEmails.map((email) => (
            <option key={email} value={email}>{email}</option>
          ))}
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-stone-600 text-white rounded">Cancel</button>
          <button onClick={sendEmail} className="px-4 py-2 bg-stone-600 text-white rounded">Done</button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
