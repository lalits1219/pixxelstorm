function News() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
        Crypto News
      </h1>

      <p style={{ fontSize: "16px", opacity: 0.75, marginBottom: "32px" }}>
        Curated crypto news and important updates coming soon.
      </p>

      <div
        style={{
          padding: "32px",
          borderRadius: "16px",
          background: "linear-gradient(180deg, #0b1220, #060b16)",
          border: "1px solid #1f2937",
        }}
      >
        <h3 style={{ marginBottom: "12px" }}>
          🚧 News section is being prepared
        </h3>

        <p style={{ fontSize: "14px", opacity: 0.7 }}>
          We’re working on bringing you verified crypto news, project updates,
          and ecosystem insights.
          <br />
          <br />
          For now, follow us on X to stay updated.
        </p>

        <button
          style={{ marginTop: "20px" }}
          onClick={() => window.open("https://x.com/pixxelstorm", "_blank")}
        >
          Follow on X
        </button>
      </div>
    </div>
  );
}

export default News;
