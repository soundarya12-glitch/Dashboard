export default function SelectInput({ value, onChange }) {
  return (
    <select
      className="border px-2 py-1 bg-black text-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>In Process</option>
      <option>Done</option>
    </select>
  )
}
