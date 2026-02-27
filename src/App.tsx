import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

import Cart from '@/components/layout/Cart';

const App = () => {
  return (
    <>
      <Outlet />
      <Cart />

      <Toaster position="top-right" richColors expand={false} closeButton />
    </>
  );
};

export default App;
