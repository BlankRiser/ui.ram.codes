"use client";

import { ComponentCategory } from "@/config/components-list";
import { type ReactNode, createContext, useContext } from "react";

type SelectedComponent = ComponentCategory["components"][number];

const currentSelectionContext = createContext<SelectedComponent | null>(null);

export const useCurrentSelection = () => {
  const context = useContext(currentSelectionContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  if (!context) {
    throw new Error("Component does not exist");
  }

  return context;
};

export const CurrentSelectionProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: SelectedComponent | null;
}) => {
  return (
    <currentSelectionContext.Provider value={value}>
      {children}
    </currentSelectionContext.Provider>
  );
};
