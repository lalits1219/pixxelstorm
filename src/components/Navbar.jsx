import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#38bdf8" : "#cbd5f5",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
});

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        background: "linear-gradient(180deg, #0b1220, #060b16)",
        borderBottom: "1px solid #1f2937",
      }}
    >
      {/* LEFT – LOGO (CLICKABLE) */}
      <NavLink
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        <img
          src="/pixxelstorm.png"
          alt="PixxelStorm"
          style={{ width: "36px", height: "36px", borderRadius: "50%" }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            letterSpacing: "0.4px",
          }}
        >
          PixxelStorm
        </span>
      </NavLink>

      {/* RIGHT – LINKS */}
      <div style={{ display: "flex", gap: "28px" }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/airdrops" style={linkStyle}>
          Airdrops
        </NavLink>

        <NavLink to="/news" style={linkStyle}>
          News
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
