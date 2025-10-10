import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home2 from './pages/Home2'
import Prodotti from './pages/Prodotti'
import Contatti from './pages/Contatti'


const router = createBrowserRouter([
    {path: "/", element: <Home2/>},
    {path: "/products", element: <Prodotti/>},
    {path: "/contacts", element: <Contatti/>},
]);

const RoutProdLinks = () => {
    return <RouterProvider router={router}/>
}

export default RoutProdLinks;
