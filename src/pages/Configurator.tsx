import BaseSelection from "../components/BaseSelection.tsx"
import BowlSelection from "../components/BowlSelection.tsx"
import CenterBowl from "../components/CenterBowl.tsx"
import IngredientSection from "../components/IngredientSection.tsx"
import SummaryBar from "../components/SummaryBar.tsx"

export default function Configurator() {
  return (
    <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">

      {/* Top row: bowl selection, center bowl, base selection */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch">
        <BowlSelection />
        <CenterBowl />
        <BaseSelection />
      </div>

      {/* Bottom row: ingredient section */}
      <IngredientSection />

      {/* Summary bar */}
      <SummaryBar />
    </main>
  )
}
