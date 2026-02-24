import { Outlet } from 'react-router-dom';

import Cart from '@/components/layout/Cart';

const App = () => {
  return (
    <>
      <Outlet />
      <Cart />
    </>
  );
};

export default App;
