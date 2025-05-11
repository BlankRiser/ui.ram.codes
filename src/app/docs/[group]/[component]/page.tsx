"use client";

import { ComponentViewer } from "@/components/component-viewer";
import { CopyCommand } from "@/components/copy-command";
import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-4 md:space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">{componentsToRender.name}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {componentsToRender.description}
        </p>
        <div className="flex gap-1 items-center">
          {componentsToRender.tags.map((tag) => {
            return (
              <Badge key={tag} className="rounded-full">
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="space-y-4 md:space-y-16 max-w-7xl mx-auto">
        {componentsToRender.components.map((component) => {
          return (
            <div key={component.slug} className="flex flex-col gap-6">
              <h1 className="text-xl font-medium">{component.name}</h1>
              <ComponentViewer component={component} />
              <CopyCommand componentSlug={component.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
