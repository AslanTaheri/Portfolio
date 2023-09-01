import profileImage from "../assets/images/01.jpg";
import NavButton from "./NavButton";

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
        <div className="grid grid-cols-3 items-center gap-4 mt-10 md:mt-0">
          <NavButton bullet={"A."} label={"About"} />
          <NavButton bullet={"B."} label={"Projects"} />
          <NavButton bullet={"C."} label={"Contact"} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
