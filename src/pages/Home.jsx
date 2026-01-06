import { useState } from "react"

export default function Home() {
  const [showText, setShowText] = useState(false)

  return (
    <div className="container" style={{ textAlign: "center" }}>
      
      <div
        className="hero-logo"
        style={{ cursor: "pointer" }}
        onClick={() => setShowText(!showText)}
      >
        {!showText ? (
          <img
            src="/pixxelstorm.png"
            alt="PixxelStorm"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(56,189,248,0.4)"
            }}
          />
        ) : (
          <svg
            width="260"
            height="260"
            viewBox="0 0 260 260"
            className="rotating-svg"
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M 130, 130
                  m -90, 0
                  a 90,90 0 1,1 180,0
                  a 90,90 0 1,1 -180,0
                "
              />
            </defs>

           <text
  fill="#7dd3fc"
  fontSize="13"
  letterSpacing="4"
  style={{ textTransform: "uppercase" }}
>

              <textPath href="#circlePath">
                PIXXELSTORM • CRYPTO • AI • COMMUNITY •
              </textPath>
            </text>
          </svg>
        )}
      </div>

      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        Click on PixxelStorm
      </p>

    </div>
  )
}
