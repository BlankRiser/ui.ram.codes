"use client";

import { JSX } from "react";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const menu = [
  {
    title: "Components",
    url: "/docs",
  },
];

export const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="hidden justify-between md:flex ">
          <div className="w-full flex items-center justify-between gap-6">
            <Link href={"/"} className="flex items-center gap-2">
              <span className="text-lg font-semibold">UI</span>
            </Link>
            <div className="flexitems-center ">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => {
                    return (
                      <NavigationMenuLink key={item.title} asChild>
                        <Link href={item.url}>{item.title}</Link>
                      </NavigationMenuLink>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>
        <div className="block md:hidden px-2">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center gap-2">
              <span className="text-lg font-semibold">UI</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={"/"} className="flex items-center gap-2">
                      <span className="text-lg font-semibold">UI</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className=" flex flex-col gap-4">
                  {menu.map((item) => {
                    return (
                      <Button variant="link" asChild>
                        <Link
                          key={item.title}
                          href={item.url}
                          className="w-fit"
                        >
                          {item.title}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};
