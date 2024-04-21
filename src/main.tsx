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
    element: <App launchCase={0}/>,
  },
  {
    path:"Thoughts",
    element: <ThoughtsPage/>,
  },
  {
    path:"/About",
    element: <App launchCase={1}/>,
  },
  {
    path:"/PersonalProjects",
    element: <App launchCase={2}/>,

  },
  {
    path:"/SchoolProjects",
    element: <App launchCase={3}/>,

  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
