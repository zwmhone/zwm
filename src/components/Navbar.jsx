import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  // Default dark mode
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 flex w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative">
            <span className="text-glow text-foreground">Zun's</span> Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* Theme toggle (desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-page Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 w-screen h-screen bg-black/20 md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-64 bg-background shadow-lg transform transition-transform duration-300 md:hidden flex flex-col p-6 space-y-6 z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button inside sidebar */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end p-2 text-foreground"
        >
          <X size={24} />
        </button>

        {/* Nav Links */}
        <div className="flex flex-col space-y-4 mt-4">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme toggle (mobile) */}
        <button
          onClick={toggleTheme}
          className="mt-auto p-2 rounded-full hover:bg-muted transition self-start"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
};
