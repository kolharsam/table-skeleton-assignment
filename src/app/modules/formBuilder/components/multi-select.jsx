"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { cn } from "./utils";
import { ChevronDown } from "../icons";

export default function MultiSelect({
  className,
  options,
  value = [],
  onChange,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  // NOTE: isMounted is to prevent the component from rendering before
  // the DOM is ready and cause hydration error
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = useCallback(
    (option) => {
      const newValue = value.includes(option)
        ? value.filter((v) => v !== option)
        : [...value, option];
      onChange?.(newValue);
    },
    [value, onChange]
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const displayText = useMemo(() => {
    switch (value.length) {
      case 0:
        return "Select options...";
      case 1:
        return "1 option selected";
      default:
        return `${value.length} options selected`;
    }
  }, [value]);

  if (!isMounted) {
    return null;
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border rounded-md bg-white text-left flex justify-between items-center focus:ring-2 focus:ring-zinc-800 focus:border-zinc-800"
        {...props}
      >
        <span
          className={`${value.length === 0 ? "text-gray-500" : "text-black"}`}
        >
          {displayText}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
          {options.map((option) => (
            <div
              key={`${option}-multi-select-checkbox`}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => handleToggle(option)}
                className="h-4 w-4 rounded border hover:cursor-pointer ml-2 mt-2 mb-2"
                id={`${option}-multi-select-checkbox`}
              />
              <label
                htmlFor={`${option}-multi-select-checkbox`}
                className="text-sm w-full hover:cursor-pointer select-none pt-2 pb-2 pr-2"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
