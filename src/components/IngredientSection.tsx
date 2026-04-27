export default function IngredientSection() {
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">

      {/* Circle number */}
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
        3
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">Lisää raaka-aineet</h2>

      {/* Search field */}
      <input
        type="text"
        placeholder="Search ingredients..."
        className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135] mb-6"
      />

      {/* Category pill placeholders */}
      <div className="flex flex-wrap gap-3">
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Proteiini</span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Vihannekset</span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Hedelmät</span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Siemenet</span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Kastikkeet</span>
      </div>
    </div>
  )
}
