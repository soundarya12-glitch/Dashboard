export default function TextInput( {
  value,
  onChange,
  type="text",
  placeholder = "",
  className = "",
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}  // correctly use placeholder
        onChange={(e) => onChange(e.target.value)} // send value
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
