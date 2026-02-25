import { StrictMode } from 'react';

import App from '@/App.tsx';
import '@/index.css';
import AuthLayout from '@/pages/Auth/Layout';
import SignIn from '@/pages/Auth/SignIn';
import SignUp from '@/pages/Auth/SignUp';
import About from '@/pages/Common/About';
import Cart from '@/pages/Common/Cart';
import Categories from '@/pages/Common/Categories';
import Contact from '@/pages/Common/Contact';
import Home from '@/pages/Common/Home/index.tsx';
import CommonLayout from '@/pages/Common/Layout.tsx';
import NotFound from '@/pages/Error/NotFound';
import { persistor, store } from '@/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="" element={<CommonLayout />}>
                <Route index element={<Home />} />
                <Route path="categorias" element={<Categories />} />
                <Route path="sobre" element={<About />} />
                <Route path="contato" element={<Contact />} />
                <Route path="carrinho" element={<Cart />} />
              </Route>
              <Route path="autenticacao" element={<AuthLayout />}>
                <Route path="login" element={<SignIn />} />
                <Route path="cadastro" element={<SignUp />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
