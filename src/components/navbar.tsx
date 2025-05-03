"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

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
              <div className="flex items-center gap-2">
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
                <ThemeToggle />
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
export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
