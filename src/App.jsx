import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Airdrops from "./pages/Airdrops"
import News from "./pages/News"

function App() {
  return (
    <div style={{ background: "#0B0F1A", color: "white", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrops" element={<Airdrops />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  )
}

export default App
