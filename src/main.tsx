import { StrictMode } from 'react';

import App from '@/App.tsx';
import '@/index.css';
import AuthLayout from '@/pages/Auth/Layout';
import SignIn from '@/pages/Auth/SignIn';
import SignUp from '@/pages/Auth/SignUp';
import About from '@/pages/Common/About';
import Cart from '@/pages/Common/Cart';
import Categories from '@/pages/Common/Categories';
import Category from '@/pages/Common/Category';
import Contact from '@/pages/Common/Contact';
import Home from '@/pages/Common/Home/index.tsx';
import CommonLayout from '@/pages/Common/Layout.tsx';
import NotFound from '@/pages/Error/NotFound';
import { persistor, store } from '@/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthGuard from '@/components/guards/AuthGuard';
import GuestGuard from '@/components/guards/GuestGuard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="" element={<CommonLayout />}>
                  <Route index element={<Home />} />
                  <Route path="categorias" element={<Categories />} />
                  <Route path="sobre" element={<About />} />
                  <Route path="contato" element={<Contact />} />
                  <Route path="categoria/:name" element={<Category />} />
                  <Route path="" element={<AuthGuard />}>
                    <Route path="carrinho" element={<Cart />} />
                  </Route>
                </Route>

                <Route path="" element={<GuestGuard />}>
                  <Route path="autenticacao" element={<AuthLayout />}>
                    <Route path="login" element={<SignIn />} />
                    <Route path="cadastro" element={<SignUp />} />
                  </Route>
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
