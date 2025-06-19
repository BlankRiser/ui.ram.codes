"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Gem } from "lucide-react";
import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export function Button1() {
  return (
    <div className="grid place-items-center">
      <div className="space-x-2 space-y-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="destructive">destructive</Button>
      </div>
      <div className="space-x-2 space-y-2">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="secondary">
          secondary (sm)
        </Button>
        <Button size="sm" variant="outline">
          outline (sm)
        </Button>
        <Button size="sm" variant="ghost">
          ghost (sm)
        </Button>
        <Button size="sm" variant="link">
          link (sm)
        </Button>
        <Button size="sm" variant="destructive">
          destructive (sm)
        </Button>
      </div>
      <div className="space-x-2 space-y-2">
        <Button size="lg">Default</Button>
        <Button size="lg" variant="secondary">
          secondary (lg)
        </Button>
        <Button size="lg" variant="outline">
          outline (lg)
        </Button>
        <Button size="lg" variant="ghost">
          ghost (lg)
        </Button>
        <Button size="lg" variant="link">
          link (lg)
        </Button>
        <Button size="lg" variant="destructive">
          destructive (lg)
        </Button>
      </div>
      <div className="space-x-2 space-y-2">
        <Button size="icon">
          <Gem />
        </Button>
        <Button size="icon" variant="secondary">
          <Gem />
        </Button>
        <Button size="icon" variant="outline">
          <Gem />
        </Button>
        <Button size="icon" variant="ghost">
          <Gem />
        </Button>
        <Button size="icon" variant="link">
          <Gem />
        </Button>
        <Button size="icon" variant="destructive">
          <Gem />
        </Button>
      </div>
    </div>
  );
}
