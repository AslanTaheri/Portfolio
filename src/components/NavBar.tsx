import profileImage from "../assets/images/01.jpg";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    // main navbar container
    <nav className="container mx-auto p-6">
      {/* flex container for the nav items */}
      <div className="my-6 flex flex-col items-center justify-between md:flex-row">
        {/* my logo or name comes here */}
        <div className="flex items-center space-x-5">
          <img
            src={profileImage}
            alt="profile image"
            className="z-50 w-16 rounded-full border-2 border-slate-400 md:w-24"
          />
          <h1 className="text-xl font-bold">ASLAN TAHERI</h1>
        </div>
        {/* menu comes here */}
        <div className="mt-10 grid grid-cols-3 items-center gap-4 md:mt-0">
          <NavButton bullet={"A."} label={"About"} />
          <NavButton bullet={"B."} label={"Projects"} />
          <NavButton bullet={"C."} label={"Contact"} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
