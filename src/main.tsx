import { StrictMode } from 'react';

import App from '@/App.tsx';
import '@/index.css';
import AuthLayout from '@/pages/Auth/Layout';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import NotFound from '@/pages/Error/NotFound';
import Home from '@/pages/Public/Home/index.tsx';
import PublicLayout from '@/pages/Public/Layout.tsx';
import { Contact } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/Public/About';
import Categories from './pages/Public/Categories';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<PublicLayout />}>
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
  </StrictMode>,
);
