import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2 px-1 relative mt-1 pt-1 flex flex-col items-center justify-center space-y-3">
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
      >
        <ArrowUp size={20} />
      </a>
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} zwm.co, All Rights Reserved
      </p>
    </footer>
  );
};
