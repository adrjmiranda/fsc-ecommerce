const CategoriesSkeleton = () => (
  <section className="py-20">
    <div className="wrapper">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-136 animate-pulse rounded-sm bg-gray-200" />
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSkeleton;
