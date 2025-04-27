"use client";

import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <div>
              <Link href="/docs">
                <Button asChild variant="secondary" size="sm" className="gap-4">
                  <span>
                    Your UI, ready to go. <MoveRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 flex-col items-center">
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
                Build Faster with Ready-to-Use Shadcn Components
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Copy, paste, or install beautiful components in seconds — power
                your project with clean, customizable UI blocks built with
                shadcn/ui and Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button className="gap-4" variant="outline">
                Install via cli
              </Button>
              <Link href="/docs">
                <Button asChild className="gap-4">
                  <span>
                    Get Components <MoveRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
