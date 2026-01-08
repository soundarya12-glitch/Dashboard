"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./button";
import TextInput from "./Textinput";

interface NewUserModalProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

export default function NewUserModal({ open, onClose }: NewUserModalProps) {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    role: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl text-black border-t">
        <DialogHeader className={undefined}>
          <DialogTitle className={undefined}>New User</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <TextInput
            required
            placeholder="Enter email"
            value={form.email}
              onChange={(value) => handleChange("email",value)}
          />

          <TextInput
            required
            placeholder="Enter first name"
            value={form.firstName}
            onChange={(value) => handleChange("firstName",value)}
          />

       <TextInput
  placeholder="Select role"
  value={form.role}
  onChange={(value) => handleChange("role", value)} // value is string
/>
/</div>

        <div className="flex items-center justify-between mt-6">
          <Button variant="secondary" size="sm" className={undefined}>
            Edit Full Form
          </Button>

          <Button
            onClick={() => {
              console.log(form);
              onClose(false);
            } }
            variant="primary"
            size="sm" className={undefined}          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
