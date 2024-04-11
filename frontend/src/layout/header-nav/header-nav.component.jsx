import { UiInputText } from '@libs/design-system';
import { clearLocalStorage } from '@libs/resources/function';
import { Avatar, AvatarFallback, AvatarImage } from '@shadcnui/components/ui/avatar';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeaderNavComponent = () => {
  const navigate = useNavigate();
  const logoutFun = () => {
    clearLocalStorage();
    navigate('/authentication/login');
  };

  return (
    <div className="flex items-center justify-between w-full">
      <UiInputText placeholder="Search" />

      <div className="flex items-center gap-2.5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="p-2 bg-black rounded-full" onClick={logoutFun}>
          <LogOut color="white" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavComponent;
