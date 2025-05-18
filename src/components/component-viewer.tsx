"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ComponentCategory } from "@/config/components-list";
import { useCopy } from "@/hooks/use-copy";
import { cn, convertRegistryPaths } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ShikiHighlighter from "react-shiki";
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
          <OpenInV0Button componentName={component.slug} />
          <CopyCode componentName={component.slug} />
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

const CopyCode = ({ componentName }: { componentName: string }) => {
  const { theme } = useTheme();

  const [code, setCode] = useState<string | null>(null);
  const { copied, copy } = useCopy();

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("");
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${componentName}.json`);
        if (!response.ok) {
          handleEmptyCode();
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          handleEmptyCode();
          return;
        }
        const data = await response.json();
        const codeContent = convertRegistryPaths(data.files[0].content) || "";
        setCode(codeContent);
      } catch (error) {
        console.error("Failed to load code:", error);
        handleEmptyCode();
      }
    };

    loadCode();
  }, [componentName]);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Code</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[80dvw]">
          <DialogHeader>
            <DialogTitle>
              <span>Component source</span>
            </DialogTitle>
          </DialogHeader>
          <div className="prose max-h-[80dvh] sm:max-h-[600px] overflow-x-auto">
            {code ? (
              <ShikiHighlighter
                language={"typescript"}
                theme={theme === "dark" ? "vesper" : "catppuccin-latte"}
                delay={150}
                className="max-h-[60dvh] text-sm sm:max-h-[600px] font-mono rounded-md overflow-y-auto"
              >
                {code}
              </ShikiHighlighter>
            ) : (
              "loading..."
            )}
          </div>
          <Button
            aria-label={copied ? "Copied" : "Copy component source"}
            onClick={() => copy(code || "")}
          >
            <div className="flex gap-2 items-center">
              <div
                className={cn(
                  "transition-all",
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fill="#10B981"
                    d="M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z"
                  />
                </svg>
              </div>
              <div
                className={cn(
                  "absolute transition-all",
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                )}
              >
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 2.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM10 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm3 5.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1H5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v1.5Z" />
                </svg>
              </div>
              <span>{copied ? "Copied" : "Copy"}</span>
            </div>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
