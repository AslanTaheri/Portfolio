const NavBar = () => {
  return (
    // main navbar container
    <nav className="container relative mx-auto p-8">
      {/* flex container for the nav items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* my logo or name comes here */}
        <div className="z-30">
          <h1>ASLAN TAHERI</h1>
        </div>
        {/* menu comes here */}
        <div className="hidden items-center space-x-10 md:flex">
          <a href="" className="tracking-widest hover:text-slate-400">
            About
          </a>
          <a href="" className="tracking-widest hover:text-slate-400">
            Projects
          </a>
          <a href="" className="tracking-widest hover:text-slate-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
