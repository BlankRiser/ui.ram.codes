"use client";

import { getComponentGroup } from "@/config/components-list";
import Link from "next/link";
import { useParams } from "next/navigation";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function ComponentGroupPage() {
  const { group } = useParams();

  const componentGroup = getComponentGroup(group as string);
  if (!componentGroup) {
    return (
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <h1 className="text-2xl font-bold">Group not found</h1>
        <p className="text-muted-foreground">
          The group you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      {componentGroup.components.map((component) => {
        return (
          <div key={component.name} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 pl-2">
              <Link href={`/docs/${group}/${component.slug}`}>
                <span className="text-lg font-semibold">{component.name}</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
