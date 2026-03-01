import { selectCartItems } from '@/store/cart/selectors';
import { useAppSelector } from '@/store/hooks';

import Item from '../Item';

const List = () => {
  const items = useAppSelector(selectCartItems);

  return (
    <tbody className="no-scrollbar flex max-h-96 w-full flex-col gap-2 overflow-y-scroll rounded-sm p-2 ring-1 ring-gray-100">
      {items.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </tbody>
  );
};

export default List;
