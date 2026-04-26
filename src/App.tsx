
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import BaseSelection from "./components/BaseSelection.tsx"
import BowlSelection from "./components/BowlSelection.tsx"

// 你的页面组件（示例）

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Header at the top */}
      <Header />

      {/* Main content area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">
       
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}
