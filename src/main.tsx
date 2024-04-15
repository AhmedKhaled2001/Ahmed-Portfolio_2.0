import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThoughtsPage from './Pages/ThoughtsPage.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"Thoughts",
    element: <ThoughtsPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
