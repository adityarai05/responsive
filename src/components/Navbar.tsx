import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Calculate if we've reached the footer region
      const scrollPos = window.scrollY + window.innerHeight;
      const bottomPos = document.documentElement.scrollHeight;
      setAtBottom(bottomPos - scrollPos < window.innerHeight / 2);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: atBottom ? -150 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 w-full px-4 ${atBottom ? 'pointer-events-none' : ''}`}
    >
      <div className={`flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500 bg-white/70 backdrop-blur-md shadow-sm border border-black/5 ${scrolled ? 'w-full max-w-4xl' : 'w-full max-w-5xl'}`}>
        
        {/* Avatar / Brand */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer" onClick={() => handleClick("#home")}>
          <img src="/profile.jpeg" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-border" />
          <span className="hidden md:inline font-bold text-sm tracking-wide">ADITYA RAI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleClick(href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right Button */}
        <div className="hidden md:block pr-1">
          <button
            onClick={() => handleClick("#contact")}
            className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 pr-4"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white shadow-xl rounded-3xl p-6 border border-border md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleClick(href)}
                  className="text-lg font-semibold text-foreground hover:text-primary text-left"
                >
                  {label}
                </button>
              ))}
              <hr className="border-black/5" />
              <button
                onClick={() => handleClick("#contact")}
                className="bg-foreground text-background px-6 py-3 rounded-full text-base font-semibold text-center w-full"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
