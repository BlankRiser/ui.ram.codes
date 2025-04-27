"use client";

import { allComponents } from "@/config/components-list";
import Link from "next/link";

export default function Docse() {
  return (
    <div className="flex flex-col min-h-svh px-4 py-8 gap-8">
      {allComponents.map((component) => {
        return (
          <div key={component.name} className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{component.name}</h2>
            <p className="text-muted-foreground">{component.description}</p>
            <div className="flex flex-col gap-2 pl-2">
              {component.components.map((item) => (
                <div key={item.slug} className="flex flex-col gap-1">
                  <Link href={`/docs/${component.slug}/${item.slug}`}>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </Link>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
