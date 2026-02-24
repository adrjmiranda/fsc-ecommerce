import HeroImage from '@/assets/images/hero.webp';

import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="bg-secondary relative z-0 h-144 overflow-hidden">
      <div className="absolute left-1/2 z-0 h-full w-full -translate-x-1/2 overflow-visible">
        <img
          src={HeroImage}
          alt="FSC E-commerce"
          className="relative h-full w-full object-cover object-left sm:-left-20"
        />
      </div>

      <div className="wrapper relative z-10 h-full">
        <div className="mr-auto flex h-full flex-col justify-end gap-4 py-20 sm:mr-0 sm:ml-auto sm:w-1/2 sm:justify-center sm:py-0">
          <h1 className="text-primary text-5xl font-bold">
            Coleção de Verão 2026
          </h1>
          <p className="text-primary-text text-2xl font-semibold md:text-3xl">
            Conheça a nova coleção de verão com descontos de até 50%
          </p>
          <Button type="button" variant="primary" className="w-fit">
            Comprar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
