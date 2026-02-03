import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MovieDatail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies/>,
  },
  {
    path: "/detalhes",
    element: <MovieDetails/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
