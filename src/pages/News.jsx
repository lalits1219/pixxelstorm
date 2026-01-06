const files = import.meta.glob("../data/news/*.json", {
  eager: true
})

export default function News() {
  const data = Object.values(files)

  return (
    <div className="container">
      <h1>Crypto News</h1>

      <div className="grid">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

