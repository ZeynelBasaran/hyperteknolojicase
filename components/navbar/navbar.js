import Link from "next/link";
import ModeToggleTheme from "./toogleTheme";
import { Button } from "../ui/button";
import { SlBasket } from "react-icons/sl";
import BasketIcon from "./basketIcon";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-one">
      <div className="flex justify-between items-center py-2">
        <div className="">
          <Link className="cursor-pointer flex items-center py-2" href="/">
            <span className=" text-xl ml-3 text-white">HyperTextCase</span>
          </Link>
        </div>

        <div className="space-x-2 flex justify-center items-center mr-2">
          <ModeToggleTheme />
          <Button asChild className="flex justify-start" variant="white" size="xl">
            <Link href="/sepet" className="relative">
              <SlBasket />
              <BasketIcon/>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
