import { StrictMode } from 'react';

import App from '@/App.tsx';
import '@/index.css';
import AuthLayout from '@/pages/Auth/Layout';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import About from '@/pages/Common/About';
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
              </Route>
              <Route path="autenticacao" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Register />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
