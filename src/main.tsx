import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.tsx';
import NotFoundPage from './pages/notfound.tsx';
import React from 'react';
import 'remixicon/fonts/remixicon.css';

// Criação do cliente React Query
const client = new QueryClient();

// Definir o ponto de entrada para o React
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Configuração das rotas do React Router
const router = createBrowserRouter([
  {
    path: '/Site_criptmoedas/',
    element: <App />, // A página principal da aplicação
    children: [
      {
        path: '',
        element: <Home />, // Rota principal dentro do App
      },
      { path: '*', element: <NotFoundPage /> }, // Página de erro 404 para rotas não encontradas
    ],
  },
]);

// Renderização da aplicação com React Query e React Router
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
