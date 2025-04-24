import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import Error from './Pages/Error/Error';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
