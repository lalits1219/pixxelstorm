import data from "../data/airdrops.json"

export default function Airdrops() {
  return (
    <div className="container">
      <h1>Airdrops</h1>
      <div className="grid">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <span className="badge">{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
