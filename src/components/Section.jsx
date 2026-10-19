// A reusable part of the page with a small title. Every part (About, Projects, ...) uses this.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
