const NavButton = ({ bullet, label, link }) => {
  return (
    <a
      href={link}
      className="tracking-widest font-semibold text-white text-xs md:text-sm bg-black px-3 py-2 rounded-full drop-shadow-lg hover:text-black hover:bg-white transition-colors duration-500 hover:outline hover:outline-2">
      <span className="text-gray-400 mr-2">{bullet}</span>
      {label}
    </a>
  );
};

export default NavButton;
