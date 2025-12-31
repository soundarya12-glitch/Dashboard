export default function ApiAccess() {
  return (
    <div className=" space-y-3">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        
      </div>

      {/* Button */}
      <button
        type="button"
        className="
          bg-stone-800
              text-white
              border border-stone-600
              
              focus
             w-40 rounded-md  p-2
        "
      >
        Generate Keys
      </button>

      {/* Helper text */}
      <p className="text-xs text-stone-500">
        Click here to learn about token-based authentication
      </p>
    </div>
  );
}
