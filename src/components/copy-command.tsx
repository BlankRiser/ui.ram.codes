"use client";
import { CopyButton } from "@/components/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useConfigStore } from "@/hooks/use-config";

export const CopyCommand = ({ componentSlug }: { componentSlug: string }) => {
  const { packageManager, setConfig } = useConfigStore();

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentSlug}.json`,
    npm: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentSlug}.json`,
    yarn: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentSlug}.json`,
    bun: `bunx --bun shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentSlug}.json`,
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
            <TabsTrigger variant="border" value="npm">
              npm
            </TabsTrigger>
            <TabsTrigger variant="border" value="yarn">
              yarn
            </TabsTrigger>
            <TabsTrigger variant="border" value="pnpm">
              pnpm
            </TabsTrigger>
            <TabsTrigger variant="border" value="bun">
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
