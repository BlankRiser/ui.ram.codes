"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { allComponents } from "@/config/components-list";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar
      {...props}
      className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {allComponents.map((group) => (
              <SidebarMenuItem key={group.slug}>
                <SidebarMenuButton asChild>
                  <Link href={`/docs/${group.slug}`} className="font-medium">
                    {group.name}
                  </Link>
                </SidebarMenuButton>
                {group.components?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {group.components.map((item) => (
                      <SidebarMenuSubItem key={item.slug}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={
                            pathname === `/docs/${group.slug}/${item.slug}`
                          }
                        >
                          <Link href={`/docs/${group.slug}/${item.slug}`}>
                            {item.name}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
