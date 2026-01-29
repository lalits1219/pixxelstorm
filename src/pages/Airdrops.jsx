import airdrops from "../Data/airdrops"

export default function Airdrops() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: "30px" }}>Airdrops</h1>

      <div className="grid">
        {airdrops.map((drop, index) => (
          <div className="card" key={index}>
            
            {/* STATUS BADGE */}
            <span className="badge">{drop.status}</span>

            {/* TITLE */}
            <h3 style={{ marginTop: "12px" }}>{drop.title}</h3>

            {/* OVERVIEW */}
            {drop.overview && (
              <ul style={{ marginTop: "12px", paddingLeft: "18px", opacity: 0.9 }}>
                {drop.overview.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* STEPS */}
            {drop.steps && (
              <div style={{ marginTop: "16px" }}>
                <strong>How to Participate</strong>
                <ol style={{ marginTop: "8px", paddingLeft: "18px" }}>
                  {drop.steps.map((step, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>
                      <strong>{step.title}:</strong> {step.text}
                    </li>
                  ))}
                </ol>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  )
}
