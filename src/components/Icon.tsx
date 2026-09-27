export function Icon({
  name = "arrow",
  size = 20,
}: {
  name?: string;
  size?: number;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    down: (
      <>
        <path d="M12 4v16m-6-6 6 6 6-6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-1-3 4-.5 6-2 6-6a5 5 0 0 0-1-3c.2-1 .2-2 0-3-2 0-3 1-4 2a13 13 0 0 0-6 0C8 4 7 3 5 3c-.3 1-.3 2 0 3a5 5 0 0 0-1 3c0 4 2 5.5 6 6-1 1-1 2-1 3v4" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6M7 10h6m-3-3v6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v18h17M8 16v-5m5 5V7m5 9V4" />
      </>
    ),
    nodes: (
      <>
        <rect x="2" y="8" width="6" height="8" rx="2" />
        <rect x="16" y="2" width="6" height="6" rx="2" />
        <rect x="16" y="16" width="6" height="6" rx="2" />
        <path d="M8 12h4V5h4m-4 7v7h4" />
      </>
    ),
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 9 4v7c0 5-9 9-9 9S3 18 3 13V6l9-4Z" />
        <path d="m7 12 3 3 7-7" />
      </>
    ),
    layers: (
      <>
        <path d="m2 7 10-5 10 5-10 5L2 7Zm0 5 10 5 10-5M2 17l10 5 10-5" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M16 8V3H3v13h5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.arrow}
    </svg>
  );
}
