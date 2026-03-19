const Footer = () => (
  <footer className="py-12 border-t border-foreground/5 bg-background text-foreground">
    <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <a href="#home" className="text-xl font-bold tracking-tight">
          ALEX RIVERA
        </a>
        <div className="flex gap-4 text-sm font-semibold">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
      <p className="text-sm text-foreground/50 font-medium">
        © {new Date().getFullYear()} Alex Rivera. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
