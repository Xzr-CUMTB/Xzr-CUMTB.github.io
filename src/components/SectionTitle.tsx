export function SectionTitle({
  number,
  label,
  title,
  accent,
  description,
}: {
  number: string;
  label: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <h2>
        {title}
        <em>{accent}</em>
        <span className="title-dot">.</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
