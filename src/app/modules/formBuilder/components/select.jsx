"use client";
import React from "react";
import { cn } from "./utils";

export default function Select({ className, options, ...props }) {
  return (
    <select
      className={cn(
        "w-full h-9 p-2 border rounded-md bg-white focus:ring-2 focus:border-zinc-800 disabled:opacity-50",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
