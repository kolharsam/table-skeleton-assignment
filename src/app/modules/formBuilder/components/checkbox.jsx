"use client";
import React from "react";
import { cn } from "./utils";

export default function Checkbox({ className, ...props }) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-input bg-transparent disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}
