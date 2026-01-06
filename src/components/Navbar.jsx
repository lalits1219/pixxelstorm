import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "24px",
      padding: "20px 40px",
      background: "linear-gradient(180deg, #020617, #020617cc)"
    }}>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/airdrops" className="nav-link">Airdrops</NavLink>
      <NavLink to="/news" className="nav-link">News</NavLink>
      <NavLink to="/ai" className="nav-link">AI</NavLink>
    </nav>
  )
}
