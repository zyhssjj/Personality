import type { ProofPoint } from '../types/site'

interface ProofStripProps {
  points: ProofPoint[]
}

export function ProofStrip({ points }: ProofStripProps) {
  return (
    <section className="proof-strip reveal" aria-labelledby="proof-strip-title">
      <div className="section-heading">
        <span className="eyebrow">Proof Layer</span>
        <h3 id="proof-strip-title">先给面试官一组快速判断信号</h3>
      </div>
      <div className="proof-strip__grid">
        {points.map((point) => (
          <article key={point.label} className="proof-card">
            <strong>{point.value}</strong>
            <h4>{point.label}</h4>
            <p>{point.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
