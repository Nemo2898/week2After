
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Configurator from "./pages/Configurator.tsx"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Header at the top */}
      <Header />

      {/* Main content area */}
      <Configurator />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}
