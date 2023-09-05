import profileImage from "../assets/images/01.jpg";

const NavBarTitle = () => {
  return (
    <nav className="bg-transparent p-6">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="z-50 flex items-center space-x-5">
          <img
            src={profileImage}
            alt="profile image"
            className="w-16 rounded-full outline outline-2 outline-offset-2 outline-blue-600 md:w-24"
          />

          <h1 className="text-xl font-bold">ASLAN TAHERI</h1>
        </div>

        <div className="sticky top-0 self-start"></div>
      </div>
    </nav>
  );
};

export default NavBarTitle;
