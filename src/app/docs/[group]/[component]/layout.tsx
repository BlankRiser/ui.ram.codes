import { getComponent } from "@/config/components-list";
import { CurrentSelectionProvider } from "@/providers/current-selection-provider";

interface LayoutProps {
  params: Promise<{
    group: string;
    component: string;
  }>;
  children: React.ReactNode;
}

export default async function ComponentLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { component, group } = await params;
  const componentToRender = getComponent(group as string, component as string);

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
    <CurrentSelectionProvider value={componentToRender}>
      {children}
    </CurrentSelectionProvider>
  );
}
