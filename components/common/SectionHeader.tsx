interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">

      <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/40">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-medium tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          {description}
        </p>
      )}

    </div>
  );
}