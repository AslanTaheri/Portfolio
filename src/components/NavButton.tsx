const NavButton = ({ bullet, label, link }) => {
  return (
    <a
      href={link}
      className="items-center rounded-full bg-black px-3 py-2 text-xs font-semibold tracking-wide text-white drop-shadow-lg transition-colors duration-500 hover:bg-transparent hover:text-black hover:outline hover:outline-2 hover:backdrop-blur-sm md:text-sm"
    >
      <button>
        <span className="mr-2 text-gray-400">{bullet}</span>
        {label}
      </button>
    </a>
  );
};

export default NavButton;
