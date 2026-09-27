export function TicketBadge({
  label,
  detail,
  className = "",
}: {
  label: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={`ticket-badge ${className}`}>
      <span className="ticket-punch" />
      <span>
        <strong>{label}</strong>
        <small>{detail}</small>
      </span>
      <i aria-hidden="true">✳</i>
    </div>
  );
}
