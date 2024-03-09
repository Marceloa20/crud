import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListProducts from './ListProducts.jsx'
import InsertProduct from './InsertProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        path: "/",
        element: <ListProducts />
      },
      {
        path: "/insert",
        element: <InsertProduct />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
