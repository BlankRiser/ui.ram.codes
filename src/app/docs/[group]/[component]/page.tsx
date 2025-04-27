"use client";

import { ComponentViewer } from "@/components/component-viewer";
import { useCurrentSelection } from "@/providers/current-selection-provider";

export default function ComponentsPage() {
  const componentToRender = useCurrentSelection();

  if (!componentToRender) {
    return (
      <div className="flex flex-col min-h-svh px-4 py-8 gap-8">
        <h1 className="text-2xl font-bold">Component not found</h1>
        <p className="text-muted-foreground">
          The component you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ComponentViewer component={componentToRender} />
    </div>
  );
}
