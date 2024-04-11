import './App.scss';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@shadcnui/components/ui/toaster';
function App() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
