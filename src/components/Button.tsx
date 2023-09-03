const Button = ({ label, link }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={
        "rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white shadow-lg transition-colors duration-500 hover:bg-transparent hover:text-black hover:outline hover:outline-2 hover:backdrop-blur-sm md:text-base"
      }
    >
      <button>{label}</button>
    </a>
  );
};

export default Button;
