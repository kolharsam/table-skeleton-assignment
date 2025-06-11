"use client";
import React from "react";
import { cn } from "./utils";

export default function TextBox({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "w-full h-9 px-3 py-2 border rounded-md bg-white outline-none focus:ring-2 focus:ring-zinc-800 focus:border-zinc-800 selection:bg-zinc-800 selection:text-zinc-50 disabled:opacity-50 placeholder:text-gray-500",
        className
      )}
      {...props}
    />
  );
}
