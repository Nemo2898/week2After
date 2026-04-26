
export default function CenterBowl() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">

      {/* Top button row */}
      <div className="flex gap-3 mb-6 items-center">
        <button className="px-4 py-2 bg-green-200 rounded-lg">Salaatti</button>
        <button className="px-4 py-2 bg-blue-200 rounded-lg">Rahka</button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg">Icon</button>
      </div>

      {/* Big Bowl */}
      <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative">
        <span className="text-gray-500">Bowl</span>
      </div>

      {/* Bottom info */}
      <div className="mt-4 text-center text-gray-600">
        <p>100 g / 1,99 €</p>
        <p>500 ml</p>
      </div>
    </div>
  );
}
