
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import BaseSelection from "./components/BaseSelection.tsx"
import BowlSelection from "./components/BowlSelection.tsx"
import CenterBowl from "./components/CenterBowl.tsx"
import IngredientSection from "./components/IngredientSection.tsx"
import SummaryBar from "./components/SummaryBar.tsx"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Header at the top */}
      <Header />

      {/* Main content area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">

        {/* Top row: bowl selection, center bowl, base selection */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <BowlSelection />
          <CenterBowl />
          <BaseSelection />
        </div>

        {/* Bottom row: ingredient section */}
        <IngredientSection />

        {/* Summary bar */}
        <SummaryBar />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}
