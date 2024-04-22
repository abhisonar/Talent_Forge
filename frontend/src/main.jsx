import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './app.route.jsx';

import { PrimeReactProvider } from 'primereact/api';

import Tailwind from 'primereact/passthrough/tailwind';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider value={{ pt: Tailwind }}>
    <RouterProvider router={router} />
  </PrimeReactProvider>
);
