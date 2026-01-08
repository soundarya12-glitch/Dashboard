import React from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  required?: boolean;
}

export default function TextInput({
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
  label,
  required = false,
}: TextInputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-medium mb-1">
          {label} {required && "*"}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`
          bg-stone-300
          text-black
          border border-gray-100
          rounded-xl
          outline-none
          px-2 py-2
          ${className}
        `}
      />
    </div>
  );
}
