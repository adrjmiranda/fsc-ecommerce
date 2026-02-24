import SectionTitle from '@/components/ui/SectionTitle';

import Footer from './Footer';
import Header from './Header';
import List from './List';

const Cart = () => {
  return (
    <>
      <section className="pt-10 pb-20">
        <SectionTitle title="Items no Carrinho" />

        <div className="wrapper">
          <table className="flex w-full flex-col gap-4 text-center">
            <Header />
            <List />
            <Footer />
          </table>
        </div>
      </section>
    </>
  );
};

export default Cart;
