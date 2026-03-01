import { MUTATION_KEYS } from '@/constants/mutationKeys';
import { selectCartItems } from '@/store/cart/selectors';
import { useAppSelector } from '@/store/hooks';
import { useIsMutating } from '@tanstack/react-query';

import LoadingScreen from '@/components/ui/LoadingScreen';
import SectionTitle from '@/components/ui/SectionTitle';

import Footer from './Footer';
import Header from './Header';
import List from './List';

const Cart = () => {
  const items = useAppSelector(selectCartItems);
  const isMutating = useIsMutating({
    mutationKey: [MUTATION_KEYS.CHECKOUT, JSON.stringify(items)],
  });
  const isPending = isMutating > 0;

  if (isPending) {
    return <LoadingScreen />;
  }

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
