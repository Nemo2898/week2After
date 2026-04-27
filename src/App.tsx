
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Configurator from "./pages/Configurator.tsx"
import Community from "./pages/Community.tsx"
import Print from "./pages/Print.tsx"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Header at the top */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Configurator />} />
        <Route path="/community" element={<Community />} />
        <Route path="/print" element={<Print />} />
      </Routes>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}
