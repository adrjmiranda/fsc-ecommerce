import { Navigate, useParams } from 'react-router-dom';

import SectionTitle from '@/components/ui/SectionTitle';

import { useCategory } from '@/hooks/categories/useCategory';

import CategorySkeleton from './CategorySkeleton';
import ProductCard from './ProductCard';

const Category = () => {
  const { name } = useParams();

  const { data: category, isPending } = useCategory({ name: name || '' });

  if (isPending) return <CategorySkeleton />;

  if (!category) return <Navigate to="/" replace />;

  return (
    <>
      <section className="py-20">
        <SectionTitle title={category.displayName} />

        <div className="wrapper">
          <div className="h-96 w-full overflow-hidden rounded-sm">
            <img
              src={category.imageUrl}
              alt={category.displayName}
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Products */}
          {category.products.length > 0 && (
            <div className="py-20">
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-4">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Category;
