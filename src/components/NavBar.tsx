import profileImage from "../assets/images/01.jpg";
import NavButton from "./NavButton";

const NavBar = ({ onClickAbout, onClickProjects, onClickContact }) => {
  return (
    // main navbar container
    <nav className="container mx-auto bg-transparent p-6">
      {/* flex container for the nav items */}
      <section className=" flex flex-col items-center justify-between gap-6 md:flex-row">
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
        <div className="grid grid-cols-3 items-center gap-4">
          <NavButton onClick={onClickAbout} bullet={"A."} label={"About"} />
          <NavButton
            onClick={onClickProjects}
            bullet={"B."}
            label={"Projects"}
          />
          <NavButton onClick={onClickContact} bullet={"C."} label={"Contact"} />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
