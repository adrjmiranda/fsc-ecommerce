const categories = [
  {
    name: 'Feminina',
    image: '/imagens/categorias/mulheres.webp',
  },
  {
    name: 'Masculina',
    image: '/imagens/categorias/homens.webp',
  },
  {
    name: 'Infantil',
    image: '/imagens/categorias/criancas.webp',
  },
  {
    name: 'Cintos',
    image: '/imagens/categorias/cintos.webp',
  },
  {
    name: 'Lingeries',
    image: '/imagens/categorias/lingeries.webp',
  },
  {
    name: 'Chapéus',
    image: '/imagens/categorias/chapeus.webp',
  },
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="grid grid-cols-3 gap-8">
          {categories.length > 0 &&
            categories.map((category) => (
              <div
                key={category.name}
                className="relative z-0 h-136 overflow-hidden rounded-sm"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 z-10 h-full w-full object-cover object-center"
                />
                <div className="relative z-20 flex h-full flex-col justify-end gap-1 bg-linear-to-t from-black/75 via-black/50 p-4">
                  <p className="text-sm font-light text-white uppercase">
                    Coleção
                  </p>
                  <h3 className="text-3xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
