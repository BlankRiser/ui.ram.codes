"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const menu = [
  {
    title: "Components",
    url: "/docs",
  },
];

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <div className="w-full">
          <nav className="hidden justify-between md:flex">
            <div className="w-full flex items-center justify-between gap-6">
              <Button asChild variant="ghost" size="icon">
                <Link href={"/"} className="text-4xl">
                  UI
                </Link>
              </Button>
              <div className="flex items-center ">
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
              <Button asChild className="h-8 w-8" variant="ghost" size="icon">
                <Link href={"/"} className="flex items-center gap-2">
                  UI
                </Link>
              </Button>
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
                        <Button key={item.url} variant="link" asChild>
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
      </div>
    </header>
  );
}
