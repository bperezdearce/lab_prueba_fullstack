"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { TbPokeball } from "react-icons/tb";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "sets",
    path: "/sets",
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-default" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 items-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-accent-default flex justify-center gap-2">
              POcKETCG <span className="text-terciary"><TbPokeball/></span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-secondary b-2"
                  } text-xl hover:text-accent-default transform transition-all`}
                  type="submit"
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
