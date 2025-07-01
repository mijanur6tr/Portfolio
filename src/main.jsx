import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Layout } from './Layout.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Projects from "./components/Projects.jsx"
import {Contact} from "./components/Contact.jsx"
import { Home } from './components/Home.jsx'

import Details from "./components/Details.jsx"

const route = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/projects",
        element:<Projects/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/projects/:id",
        element:<Details/>
      },
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={route}/>
  </StrictMode>,
)
