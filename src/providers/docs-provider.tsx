"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export const DocsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="p-2">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};
