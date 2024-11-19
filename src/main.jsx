import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routers.jsx';

createRoot(document.getElementById('root')).render(

  <RouterProvider router={routes}></RouterProvider>

)
