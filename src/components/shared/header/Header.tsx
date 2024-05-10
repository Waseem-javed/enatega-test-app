import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IoLogInOutline } from "react-icons/io5";
import { TbShoppingBagHeart } from "react-icons/tb";

const Header = () => {
  const [selected, setSelected] = useState<string>("");
  return (
    <nav className="flex items-center justify-between bg-[#90EA93] text-gray-800 p-2 px-20 xs:px-0">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://enatega.com/wp-content/uploads/2023/11/Untitled-1-1.png" />
          <AvatarFallback>Enatega</AvatarFallback>
        </Avatar>
        <span className="text-xl font-bold ml-2 hidden sm:block">Enatega</span>
      </div>
      <div className="flex relative border-none">
        <ReactFlagsSelect
          showSelectedLabel
          selected={selected}
          searchable
          className="p-0 m-0"
          optionsSize={12}
          onSelect={(code) => setSelected(code)}
        />
      </div>

      <div className="flex items-center space-x-4">
        <Button
          className="border bg-white rounded-full text-green-600 hover:bg-green-500 hover:text-white"
          variant="ghost"
        >
          <IoLogInOutline className="size-5" />
          &nbsp; Login
        </Button>
        <Button className="rounded-full" variant="ghost">
          <TbShoppingBagHeart className="size-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Header;
