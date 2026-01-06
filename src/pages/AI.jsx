import { useState } from "react"

export default function AI() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  function sendMessage() {
    if (!input) return

    const userMsg = { role: "user", text: input }
    const aiMsg = {
      role: "ai",
      text: "PixxelStorm AI is warming up. AI integration coming next."
    }

    setMessages([...messages, userMsg, aiMsg])
    setInput("")
  }

  return (
    <div className="container">
      <h1>PixxelStorm AI</h1>

      <div
        style={{
          background: "#020617",
          borderRadius: "16px",
          padding: "20px",
          minHeight: "300px",
          marginBottom: "20px"
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "10px"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "12px",
                background:
                  msg.role === "user"
                    ? "#38bdf8"
                    : "rgba(56,189,248,0.15)",
                color: msg.role === "user" ? "#020617" : "#e5e7eb"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about airdrops, crypto basics..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #1e293b",
            background: "#020617",
            color: "#e5e7eb"
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "12px 18px",
            borderRadius: "10px",
            border: "none",
            background: "#38bdf8",
            color: "#020617",
            fontWeight: "600"
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}
