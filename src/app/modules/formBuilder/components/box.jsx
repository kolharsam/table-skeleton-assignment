"use client";
import React from "react";
import { cn } from "./utils";

export default function Box({ className, children }) {
  return <div className={cn("flex my-2", className)}>{children}</div>;
}