export default function SectionHeader({ title, id }) {
  return (
    <h2
      id={id}
      className="mb-3 px-1 text-sm font-bold text-slate-500"
    >
      {title}
    </h2>
  )
}
