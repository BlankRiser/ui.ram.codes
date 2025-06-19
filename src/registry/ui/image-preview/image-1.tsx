"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export const Image1 = () => {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ladybugs_%28140440761%29.jpeg/640px-Ladybugs_%28140440761%29.jpeg"
        alt="A swarm of red ladybugs are eating the leaves of my prize rose bush."
        width="500px"
        height="500px"
      />
    </div>
  );
};

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width:
    | number
    | `${number}px`
    | `${number}%`
    | `${number}rem`
    | `${number}em`
    | `${number}vw`;
  height:
    | number
    | `${number}px`
    | `${number}%`
    | `${number}rem`
    | `${number}em`
    | `${number}vh`;
}

const Image = ({ src, alt, height, width, ...rest }: ImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img src={src} alt={alt} width={width} height={height} {...rest} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-7xl aspect-auto p-0 overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover size-full "
          {...rest}
        />
      </DialogContent>
    </Dialog>
  );
};
