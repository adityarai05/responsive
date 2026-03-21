const Footer = () => (
  <footer className="relative w-full bg-white text-black py-8 px-6 lg:px-12 flex flex-col justify-between font-sans h-screen overflow-hidden">

    {/* Top Navbar */}
    {/*<div className="flex flex-row justify-between items-center w-full pt-4 pb-12 text-sm md:text-base font-bold">
      <a href="#home" className="tracking-tight hover:opacity-75 transition-opacity">aditya rai</a>
      <a href="#work" className="hidden sm:block hover:opacity-75 transition-opacity">work</a>
      <a href="#about" className="hidden sm:block hover:opacity-75 transition-opacity">about me</a>
      <a href="#contact" className="hover:opacity-75 transition-opacity">start a project</a>
    </div>*/}

    {/* Middle Information Section */}
    <div className="flex flex-col md:flex-row justify-between w-full py-16 lg:py-24 gap-16 lg:gap-0 z-10 relative mt-auto">
      <div className="flex flex-col gap-4 text-base md:text-xl font-bold tracking-tight opacity-90">
        <p>email: <a href="mailto:adityaraii2005@gmail.com" className="hover:opacity-75 transition-opacity">adityaraii2005@gmail.com</a></p>
        <p>based in: India</p>
        <p>available for: freelance projects & full-time</p>
      </div>

      <div className="flex gap-16 md:gap-24 lg:gap-32 md:pr-12 lg:pr-24 font-bold">
        <div className="flex flex-col gap-3">
          <span className="text-xs md:text-sm opacity-50 mb-1">pages</span>
          <a href="#home" className="text-base md:text-xl tracking-tight hover:opacity-75 transition-opacity">home</a>
          <a href="#about" className="text-base md:text-xl tracking-tight hover:opacity-75 transition-opacity">about</a>
          <a href="#work" className="text-base md:text-xl tracking-tight hover:opacity-75 transition-opacity">work</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs md:text-sm opacity-50 mb-1">socials</span>
          <a href="https://github.com/adityarai05" className="text-base md:text-xl tracking-tight hover:opacity-75 transition-opacity">Github</a>
          <a href="https://www.linkedin.com/in/adityarai-017996375/" className="text-base md:text-xl tracking-tight hover:opacity-75 transition-opacity">linkedin</a>
        </div>
      </div>
    </div>

    {/* Massive Name Text */}
    <div className="w-full flex items-end justify-center mt-12 md:mt-auto md:-mb-8 lg:-mb-14 z-0 relative pointer-events-none px-4">
      <h1 className="text-[15vw] sm:text-[19vw] flex gap-4 md:gap-10 leading-[0.85] font-display font-black tracking-normal whitespace-nowrap text-black m-0 p-0 select-none">
        <span>ADITYA</span>
        <span>RAI</span>
      </h1>
    </div>

    {/* Bottom Footer Credits */}
    <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 pb-4 border-t border-black/10 text-xs font-bold opacity-50 relative z-10 mt-12">
      <p>© {new Date().getFullYear()} aditya rai. all rights reserved</p>
      <p className="mt-4 md:mt-0">designed with precision</p>
    </div>
  </footer>
);

export default Footer;
