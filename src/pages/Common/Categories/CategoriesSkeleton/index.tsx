const CategoriesSkeleton = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="wrapper">
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`${(index + 1) % 3 === 0 ? 'sm:col-span-2' : 'col-span-1'} group relative h-96 animate-pulse rounded-sm bg-gray-200`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSkeleton;
