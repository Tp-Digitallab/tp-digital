export default function BackgroundGrid() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "70px 70px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.02) 0%, rgba(0,0,0,.75) 80%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,.05), rgba(5,5,5,.65))",
        }}
      />
    </>
  );
}