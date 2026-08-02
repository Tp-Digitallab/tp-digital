import PackageCard from "./PackageCard";
import { packages } from "@/config/packages";

export default function PackageGrid() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          badge={pkg.featured ? "Most Popular" : undefined}
          title={pkg.name}
          price={`€${pkg.price}`}
          description={pkg.description}
          features={pkg.features}
          featured={pkg.featured}
        />
      ))}
    </div>
  );
}