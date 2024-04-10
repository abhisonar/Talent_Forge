import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shadcnui/components/ui/avatar";
import { Input } from "@shadcnui/components/ui/input";

const HeaderNavComponent = () => {
  return (
    <div className="flex">
      <Input placeholder="Search" />

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default HeaderNavComponent;
