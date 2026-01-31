import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // ✅ REQUIRED

  return (
    <div className="home">
      <section className="hero">

        {/* LOGO */}
        <div className="logo-wrapper">
          <img
            src="/pixxelstorm.png"
            alt="PixxelStorm"
            className="hero-logo"
          />
        </div>

        {/* TITLE */}
        <h1 className="hero-title">PixxelStorm</h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          A community driven crypto hub for Airdrops, Alpha & News.
        </p>

        {/* CTA BUTTONS */}
        <div className="hero-actions">
          <button
            className="hero-btn primary"
            onClick={() =>
              window.open("https://x.com/pixxelstorm", "_blank")
            }
          >
            🚀 Join Community
          </button>

          <button
            className="hero-btn outline"
            onClick={() => navigate("/airdrops")}
          >
            ⚡ View Airdrops
          </button>

          <button
            className="hero-btn outline"
            onClick={() => navigate("/news")}
          >
            📰 Crypto News
          </button>
        </div>

      </section>
    </div>
  );
}

export default Home;
