import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routers.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}></RouterProvider>
  </Provider>

)
