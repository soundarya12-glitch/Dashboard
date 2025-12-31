import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextInput from "./Textinput";

export default function NewUserModal({ open, onClose }) {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    role: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl text-black border-t">
        <DialogHeader>
          <DialogTitle>New User</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <TextInput
            label="Email"
            required
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <TextInput
            label="First Name"
            required
            placeholder="Enter first name"
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />

          <TextInput className="bg-white"
            label="Role Profile"
            placeholder="Select role"
            value={form.role}
            onChange={(e) => handleChange("role", e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-6">
          <Button variant="secondary">Edit Full Form</Button>

          <Button
            onClick={() => {
              console.log(form);
              onClose(false);
            }}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
