import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from './components/Root/Root';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/Contact/ContactForm';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ShoppingCart from './components/Payment/ShoppingCart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound ></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/contact',
        element: <ContactForm />
      },
      {
        path: '/products',
        element: <Products/>,
        loader: () => fetch('/public/Data/Data.json')
      },
      {
        path: '/products/:product_id',
        element: <ProductDetails />,
        loader: () => fetch('/public/Data/Data.json')
      }, 
      {
        path: '/shoppingCart',
        element: <ShoppingCart />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)