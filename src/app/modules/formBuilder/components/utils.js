const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export { cn };
