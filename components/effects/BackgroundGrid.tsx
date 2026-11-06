export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[900px]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(23,42,57,.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(23,42,57,.045) 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
        maskImage: "linear-gradient(to bottom, #000 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 100%)",
      }}
    />
  );
}
