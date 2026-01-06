import data from "../data/news.json"

export default function News() {
  return (
    <div className="container">
      <h1>Crypto News</h1>
      <div className="grid">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
