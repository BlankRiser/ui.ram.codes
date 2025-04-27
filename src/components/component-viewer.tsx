import { ComponentCategory } from "@/config/components-list";
import { OpenInV0Button } from "./open-in-v0-button";

type ComponentViewerProps = {
  component: ComponentCategory["components"][number];
};

export const ComponentViewer = ({ component }: ComponentViewerProps) => {
  const RenderedComponent = component.component;

  return (
    <main className="flex flex-col flex-1 gap-8">
      <div className="flex flex-col gap-4 border rounded-lg  min-h-[450px] relative">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-sm text-foreground sm:pl-3">{component.name}</h2>
          <OpenInV0Button
            groupName={component.group}
            componentName={component.slug}
            className="w-fit"
          />
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative p-4">
          <RenderedComponent />
        </div>
      </div>
    </main>
  );
};
