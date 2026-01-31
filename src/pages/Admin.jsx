import { useEffect, useState } from "react";

const ADMIN_PASSWORD = "pixxelstorm@123";

function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const [airdrops, setAirdrops] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [time, setTime] = useState("");
  const [reward, setReward] = useState("");
  const [endDate, setEndDate] = useState("");
  const [content, setContent] = useState("");

  // 🔐 Auth check
  useEffect(() => {
    if (localStorage.getItem("admin_auth") === "true") {
      setAuthorized(true);
    }
  }, []);

  // 📦 Load airdrops
  useEffect(() => {
    const saved = localStorage.getItem("airdrops");
    if (saved) setAirdrops(JSON.parse(saved));
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_auth", "true");
      setAuthorized(true);
    } else {
      alert("Wrong password ❌");
    }
  };

  const handleSave = () => {
    if (!title || !content || !endDate) {
      alert("Title, content & end date required");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    let updated;

    if (editingId) {
      updated = airdrops.map(a =>
        a.id === editingId
          ? {
              ...a,
              title,
              endDate,
              details: { cost, time, reward },
              content,
            }
          : a
      );
    } else {
      const newAirdrop = {
        id: Date.now(),
        title,
        postedOn: today,   // ✅ AUTO POST DATE
        endDate,           // ✅ REAL END DATE
        details: {
          cost,
          time,
          reward,
        },
        content,
      };

      updated = [newAirdrop, ...airdrops];
    }

    setAirdrops(updated);
    localStorage.setItem("airdrops", JSON.stringify(updated));

    // reset
    setTitle("");
    setCost("");
    setTime("");
    setReward("");
    setEndDate("");
    setContent("");
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this airdrop?")) return;
    const updated = airdrops.filter(a => a.id !== id);
    setAirdrops(updated);
    localStorage.setItem("airdrops", JSON.stringify(updated));
  };

  // 🔐 Login screen
  if (!authorized) {
    return (
      <div style={{ padding: "80px", maxWidth: "400px", margin: "0 auto" }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // 🛠️ Admin Panel
  return (
    <div style={{ padding: "32px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Admin Panel</h1>

      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <br /><br />

      <input placeholder="Cost ($0 - $2)" value={cost} onChange={e => setCost(e.target.value)} />
      <br /><br />

      <input placeholder="Time (5 Min)" value={time} onChange={e => setTime(e.target.value)} />
      <br /><br />

      <input placeholder="Reward (Upto $100 - $1000)" value={reward} onChange={e => setReward(e.target.value)} />
      <br /><br />

      <label>End Date</label><br />
      <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      <br /><br />

      <textarea
        rows="8"
        placeholder="X-style content (links allowed)"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSave}>
        {editingId ? "Update Airdrop" : "Add Airdrop"}
      </button>

      <hr style={{ margin: "32px 0" }} />

      <h2>Existing Airdrops</h2>

      {airdrops.map(a => (
        <div key={a.id} style={{ marginBottom: "12px" }}>
          <strong>{a.title}</strong>

          <button
            style={{ marginLeft: "12px" }}
            onClick={() => {
              setEditingId(a.id);
              setTitle(a.title);
              setCost(a.details.cost);
              setTime(a.details.time);
              setReward(a.details.reward);
              setEndDate(a.endDate);
              setContent(a.content);
            }}
          >
            Edit
          </button>

          <button
            style={{ marginLeft: "8px", color: "red" }}
            onClick={() => handleDelete(a.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
