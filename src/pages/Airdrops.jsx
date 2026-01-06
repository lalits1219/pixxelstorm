const files = import.meta.glob("../data/airdrops/*.json", {
  eager: true
})

export default function Airdrops() {
  const data = Object.values(files)

  return (
    <div className="container">
      <h1>Airdrops</h1>

      <div className="grid">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <span className="badge">{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
