"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const classes = `px-4 bg-pink-500 py-2 font-black rounded text-white`;
  console.log(path);
  return (
    <Link className={path === href ? classes : ""} href={href}>
      {children}
    </Link>
  );
};
export default NavLink;
