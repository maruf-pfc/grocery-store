"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import globalAPI from "../_utils/globalAPI";
import { useEffect } from "react";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    categories();
  }, []);
  const categories = () => {
    globalAPI.getCategory().then((res) => {
      setCategoryList(res.data);

      // divide the size of setCategoryList by 3
      setCategoryList(res.data.slice(0, Math.ceil(res.data.length / 3)));
    });
  };

  return (
    <div className="p-5 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Image src="/assets/mainlogo.png" alt="logo" width={150} height={100} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 hidden cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, _id) => (
              <DropdownMenuItem key={_id}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category?.icon?.[0]?.url
                  }
                  alt="icon"
                  width={25}
                  height={25}
                  unoptimized={true}
                />
                <h2>{category.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center font-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
