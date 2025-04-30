import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ComponentCategory } from "@/config/components-list";
import { OpenInV0Button } from "./open-in-v0-button";

type ComponentViewerProps = {
  component: ComponentCategory["components"][number]["components"][number];
};

export const ComponentViewer = ({ component }: ComponentViewerProps) => {
  const RenderedComponent = component.component;
  return (
    <main className="flex flex-col flex-1">
      <div className="flex flex-col border rounded-lg overflow-hidden min-h-[450px] relative">
        <div className="flex items-center justify-between border-b p-2">
          <span className="text-sm text-foreground sm:pl-3">
            {component.name}
          </span>
          <div>
            <OpenInV0Button componentName={component.slug} />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <MediaQueryViewer>
            <RenderedComponent />
          </MediaQueryViewer>
        </div>
      </div>
    </main>
  );
};

const MediaQueryViewer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel minSize={40} defaultSize={100}>
        <div className=" p-2">{children}</div>
      </ResizablePanel>
      <ResizableHandle className="border" withHandle />
      <ResizablePanel defaultSize={0} />
    </ResizablePanelGroup>
  );
};
