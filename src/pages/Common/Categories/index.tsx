import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';
import EmptyCategoriesFallback from '@/components/ui/EmptyCategoriesFallback';
import SectionTitle from '@/components/ui/SectionTitle';

import { useCategories } from '@/hooks/categories/useCategories';

import CategoriesSkeleton from './CategoriesSkeleton';

const Categories = () => {
  const { data: categories = [], isPending } = useCategories();

  return (
    <>
      <section className="pt-10 pb-20">
        <SectionTitle title="Todas as Coleções" />

        <div className="wrapper">
          {isPending ? (
            <CategoriesSkeleton />
          ) : categories.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`${(index + 1) % 3 === 0 ? 'sm:col-span-2' : 'col-span-1'} group relative flex h-96 items-end overflow-hidden rounded-sm p-4`}
                >
                  <div className="absolute inset-0 z-10 h-full w-full bg-linear-to-b from-black/75 via-black/50"></div>
                  <img
                    src={category.imageUrl}
                    alt={category.displayName}
                    className="absolute inset-0 z-0 h-full w-full scale-120 rotate-2 object-cover object-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-0"
                  />
                  <p className="relative z-20 h-fit rounded-sm bg-linear-to-r from-black p-2 text-xl font-medium text-white">
                    {category.displayName}
                  </p>

                  <Link
                    to={`/categoria/${category.name}`}
                    className="absolute inset-0 z-30 flex h-full w-full items-end justify-center py-6 transition-all duration-300 ease-in-out group-hover:flex sm:hidden sm:items-center sm:py-0"
                    title={category.displayName}
                    children={
                      <>
                        <Button variant="secondary">
                          <ButtonIcon
                            Icon={ShoppingBag}
                            fill={false}
                            baseColor="default"
                            hoverColor="primary"
                          />
                          <span>Descubra</span>
                        </Button>
                      </>
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            <EmptyCategoriesFallback />
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
