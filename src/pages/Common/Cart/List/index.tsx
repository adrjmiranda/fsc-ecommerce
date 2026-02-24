import Item from '../Item';

const List = () => {
  return (
    <tbody className="no-scrollbar flex max-h-96 w-full flex-col gap-2 overflow-y-scroll rounded-sm p-2 ring-1 ring-gray-100">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </tbody>
  );
};

export default List;
