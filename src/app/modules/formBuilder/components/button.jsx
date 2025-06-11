"use client";
import React from "react";
import { cn } from "./utils";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 text-sm font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 focus:ring-2 focus:ring-zinc-800 disabled:opacity-50 hover:cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
