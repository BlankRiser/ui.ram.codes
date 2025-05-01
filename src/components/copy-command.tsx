"use client";
import { CopyButton } from "@/components/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useConfigStore } from "@/hooks/use-config";

export const CopyCommand = ({ componentName }: { componentName: string }) => {
  const { packageManager, setConfig } = useConfigStore();

  const componentPath = `${componentName}`;

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentPath}.json`,
    npm: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentPath}.json`,
    yarn: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentPath}.json`,
    bun: `bunx --bun shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentPath}.json`,
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl">Installation</h2>
      <div className="relative border rounded-lg max-w-xl">
        <Tabs
          value={packageManager}
          onValueChange={(value) => {
            setConfig({
              packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
            });
          }}
          className="rounded-md overflow-clip"
        >
          <TabsList className="h-auto justify-start rounded-none border-b px-4 py-0 w-full">
            <TabsTrigger
              className="max-w-fit text-neutral-500 data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-neutral-900"
              value="npm"
            >
              npm
            </TabsTrigger>
            <TabsTrigger
              className="max-w-fit text-neutral-500 data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-neutral-900"
              value="yarn"
            >
              yarn
            </TabsTrigger>
            <TabsTrigger
              className="max-w-fit text-neutral-500 data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-neutral-900"
              value="pnpm"
            >
              pnpm
            </TabsTrigger>
            <TabsTrigger
              className="max-w-fit text-neutral-500 data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-neutral-900"
              value="bun"
            >
              bun
            </TabsTrigger>
          </TabsList>
          {Object.entries(commands).map(([pkg, command]) => (
            <TabsContent className="" key={pkg} value={pkg}>
              <pre className="overflow-auto p-2 font-mono text-sm">
                {command}
              </pre>
            </TabsContent>
          ))}
        </Tabs>
        <CopyButton
          componentSource={commands[packageManager as keyof typeof commands]}
        />
      </div>
    </div>
  );
};
