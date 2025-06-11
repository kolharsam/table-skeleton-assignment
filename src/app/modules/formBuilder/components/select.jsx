"use client";
import React from "react";
import { cn } from "./utils";
import ChevronDown from "../icons/ChevronDown";

export default function Select({ className, options, ...props }) {
  return (
    <div className={cn("relative", className)}>
      <select
        className="w-full h-auto appearance-none p-2 pr-8 border rounded-md bg-white focus:ring-2 focus:border-zinc-800 disabled:opacity-50 outline-none"
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-800">
        <ChevronDown />
      </div>
    </div>
  );
}
