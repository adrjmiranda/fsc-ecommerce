import { selectCartItems } from '@/store/cart/selectors';
import { useAppSelector } from '@/store/hooks';

import Item from '../Item';

const List = () => {
  const items = useAppSelector(selectCartItems);

  return (
    <div className="no-scrollbar flex h-full flex-1 shrink-0 flex-col gap-4 overflow-y-auto py-4">
      {items.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
};

export default List;
