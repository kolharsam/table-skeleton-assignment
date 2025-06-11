import React from "react";

const Label = ({ children, ...props }) => {
  return (
    <label className="block font-medium text-md text-zinc-800" {...props}>
      {children}
    </label>
  );
};

export default Label;
