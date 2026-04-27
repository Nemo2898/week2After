export default function SummaryBar() {
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">

      <div className="flex-1 bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
        <h3 className="text-lg font-semibold mb-4">Selected ingredients</h3>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center">
          <span className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
            0 g
          </span>
          <span className="text-sm opacity-80">Total Weight</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
            0,00 €
          </span>
          <span className="text-sm opacity-80">Total Price</span>
        </div>
      </div>

    </div>
  )
}
