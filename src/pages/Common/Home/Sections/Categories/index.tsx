import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/ui/Button';
import ButtonIcon from '@/components/ui/ButtonIcon';

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
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Todas as Coleções
        </h2>
      </div>

      <div className="wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 32 },
            768: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {categories.length > 0 &&
            categories.map((category) => (
              <SwiperSlide key={category.name}>
                <div className="group relative z-0 h-136 overflow-hidden rounded-sm">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 z-10 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />

                  <div className="relative z-20 flex h-full flex-col justify-start gap-1 bg-linear-to-b from-black/75 via-black/50 p-4 group-hover:from-black/50 sm:justify-end sm:bg-linear-to-t">
                    <p className="text-sm font-light text-white uppercase">
                      Coleção
                    </p>
                    <h3 className="text-3xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>

                  <Link
                    to={`/categorias/${category.name}`}
                    className="absolute inset-0 z-30 flex h-full w-full items-end justify-center py-6 transition-all duration-300 ease-in-out group-hover:flex sm:hidden sm:items-center sm:py-0"
                    title={category.name}
                    children={
                      <>
                        <Button variant="secondary">
                          <ButtonIcon
                            Icon={ShoppingBag}
                            fill={false}
                            baseColor="default"
                            hoverColor="primary"
                          />
                          <span>Ver coleção</span>
                        </Button>
                      </>
                    }
                  />
                </div>
              </SwiperSlide>
            ))}

          <div className="swiper-button-prev">
            <Button className="rounded-full bg-white/80 p-2 shadow-md">
              <ButtonIcon
                Icon={ChevronLeft}
                fill={false}
                baseColor="default"
                hoverColor="primary"
              />
            </Button>
          </div>

          <div className="swiper-button-next">
            <Button className="rounded-full bg-white/80 p-2 shadow-md">
              <ButtonIcon
                Icon={ChevronRight}
                fill={false}
                baseColor="default"
                hoverColor="primary"
              />
            </Button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
