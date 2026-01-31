import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// 🔢 Days left calculator
const getDaysLeft = (endDate) => {
  const today = new Date();
  const end = new Date(endDate);
  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  return diff;
};

function Airdrops() {
  const [airdrops, setAirdrops] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("airdrops");
    if (saved) setAirdrops(JSON.parse(saved));
  }, []);

  return (
    <div style={{ padding: "32px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "24px" }}>Airdrops</h1>

      {/* EMPTY STATE */}
      {airdrops.length === 0 && (
        <div
          style={{
            marginTop: "40px",
            padding: "32px",
            maxWidth: "600px",
            borderRadius: "16px",
            background: "linear-gradient(180deg, #0b1220, #060b16)",
            border: "1px solid #1f2937",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          <h3>No active airdrops right now 🚀</h3>
          <p style={{ fontSize: "14px", opacity: 0.75 }}>
            Follow us on X to stay updated.
          </p>
          <button
            onClick={() =>
              window.open("https://x.com/pixxelstorm", "_blank")
            }
          >
            Follow on X
          </button>
        </div>
      )}

      {/* AIRDROPS */}
      {airdrops.map((airdrop) => {
        const daysLeft = getDaysLeft(airdrop.endDate);
        const isEnded = daysLeft <= 0;

        return (
          <div
            key={airdrop.id}
            style={{
              background: "linear-gradient(180deg, #0b1220, #060b16)",
              border: "1px solid #1f2937",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "32px",
              maxWidth: "900px",
              opacity: isEnded ? 0.6 : 1,
            }}
          >
            {/* TITLE */}
            <h2 style={{ fontSize: "24px", marginBottom: "6px" }}>
              {airdrop.title}
            </h2>

            {/* STATUS */}
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: "bold",
                background: isEnded ? "#6b7280" : "#16a34a",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              {isEnded ? "ENDED" : "LIVE"}
            </span>

            {/* DATES */}
            <div style={{ fontSize: "13px", opacity: 0.7, marginBottom: "12px" }}>
              Posted: {airdrop.postedOn} | Ends: {airdrop.endDate}
            </div>

            {/* DETAILS */}
            <div style={{ marginBottom: "16px" }}>
              <div>💰 <strong>Cost:</strong> {airdrop.details.cost}</div>
              <div>⏱️ <strong>Time:</strong> {airdrop.details.time}</div>
              <div>🔥 <strong>Reward:</strong> {airdrop.details.reward}</div>
              {!isEnded && (
                <div>📅 <strong>Ends in:</strong> {daysLeft} days</div>
              )}
            </div>

            {/* CONTENT */}
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ ...props }) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#38bdf8",
                      textDecoration: "underline",
                      wordBreak: "break-word",
                    }}
                  />
                ),
                li: ({ ...props }) => (
                  <li style={{ marginBottom: "8px" }} {...props} />
                ),
              }}
            >
              {airdrop.content}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}

export default Airdrops;
