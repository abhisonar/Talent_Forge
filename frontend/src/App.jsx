import './App.scss';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@shadcnui/components/ui/toaster';
function App() {
  return (
    <div className="bg-muted p-2">
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
