export default function Grid() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0

          opacity-[0.035]

          [background-image:
          linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-black/0
          via-transparent
          to-black
        "
      />
    </div>
  );
}