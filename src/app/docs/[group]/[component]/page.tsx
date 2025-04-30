"use client";

import { ComponentViewer } from "@/components/component-viewer";
import { CopyCommand } from "@/components/copy-command";
import { useCurrentSelection } from "@/providers/current-selection-provider";

export default function ComponentsPage() {
  const componentsToRender = useCurrentSelection();

  if (!componentsToRender) {
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
    <div className="space-y-4">
      {componentsToRender.components.map((component) => {
        return (
          <div key={component.slug} className="flex flex-col gap-2">
            <ComponentViewer component={component} />
            <CopyCommand componentName={component.slug} />
          </div>
        );
      })}
    </div>
  );
}
