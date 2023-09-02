import profileImage from "../assets/images/01.jpg";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    // main navbar container
    <nav className="container mx-auto bg-transparent p-6">
      {/* flex container for the nav items */}
      <div className="my-6 flex flex-col items-center justify-between md:flex-row">
        {/* my logo or name comes here */}
        <div className="z-50 flex items-center space-x-5">
          <img
            src={profileImage}
            alt="profile image"
            className="relative w-16 rounded-full outline outline-2 outline-offset-2 outline-blue-600 md:w-24"
          />

          <h1 className=" text-xl font-bold">ASLAN TAHERI</h1>
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
