import UserIcon from "@/assets/user.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./UI/NavLink";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className=""></div>
        <ul className="flex items-center gap-4 *:text-gray-500">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
        </ul>
        {/* end */}
        <div className="flex gap-4 items-center">
          <Image
            className="w-full"
            src={UserIcon}
            width={50}
            height={50}
            alt="user icon"
          />
          <Button className="bg-gray-500 text-white rounded">Login</Button>
        </div>
      </header>
    </nav>
  );
};
export default NavBar;
// {/* With right-aligned content */}
// <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
//   <header className="flex h-16 items-center justify-between px-6">
//     <div>Logo</div>
//     <ul className="flex items-center gap-4">
//       <li><Button>Sign Up</Button></li>
//     </ul>
//   </header>
// </nav>
