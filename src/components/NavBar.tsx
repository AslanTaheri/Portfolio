import profileImage from "../assets/images/01.jpg";

const NavBar = () => {
  return (
    // main navbar container
    <nav className="container relative mx-auto p-8 ">
      {/* flex container for the nav items */}
      <div className="flex flex-col items-center justify-between my-6 md:flex-row">
        {/* my logo or name comes here */}
        <div className="flex items-center space-x-5">
          <img
            src={profileImage}
            alt="profile image"
            className="rounded-full w-16 border-2 border-slate-400 md:w-24"
          />
          <h1>ASLAN TAHERI</h1>
        </div>
        {/* menu comes here */}
        <div className="items-center space-x-10 mt-10 md:mt-0">
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
