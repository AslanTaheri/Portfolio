import profileImage from "../assets/images/01.jpg";

const NavBar = () => {
  return (
    // main navbar container
    <nav className="container mx-auto p-6">
      {/* flex container for the nav items */}
      <div className="flex flex-col items-center justify-between my-6 md:flex-row">
        {/* my logo or name comes here */}
        <div className="flex items-center space-x-5">
          <img
            src={profileImage}
            alt="profile image"
            className="rounded-full w-16 border-2 border-slate-400 md:w-24"
          />
          <h1 className="font-bold">ASLAN TAHERI</h1>
        </div>
        {/* menu comes here */}
        <div className="items-center space-x-5 mt-10 md:mt-0 font-semibold">
          <a href="" className="tracking-widest hover:text-slate-400">
            <span className="text-sm text-gray-400">A. </span>About
          </a>
          <a href="" className="tracking-widest hover:text-slate-400">
            <span className="text-sm text-gray-400">B. </span>Projects
          </a>
          <a href="" className="tracking-widest hover:text-slate-400">
            <span className="text-sm text-gray-400">C. </span>Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
