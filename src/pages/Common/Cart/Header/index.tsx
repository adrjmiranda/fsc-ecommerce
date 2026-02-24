const Header = () => {
  return (
    <thead className="text-primary-text bg-secondary w-full rounded-sm p-2 ring-1 ring-gray-100">
      <tr className="grid w-full grid-cols-5 sm:grid-cols-6">
        <th className="text-sm font-medium sm:text-base"></th>
        <th className="hidden text-sm font-medium sm:flex sm:text-base">
          Produto
        </th>
        <th className="text-sm font-medium sm:text-base">Preço</th>
        <th className="text-sm font-medium sm:text-base">Quantidade</th>
        <th className="text-sm font-medium sm:text-base">Subtotal</th>
        <th className="text-sm font-medium sm:text-base"></th>
      </tr>
    </thead>
  );
};

export default Header;
