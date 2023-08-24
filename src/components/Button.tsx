const Button = ({ label, link, className }) => {
  return (
    <div className={className}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={
          "px-4 py-1.5 text-white font-semibold md:text-base bg-black rounded-full shadow-lg transition-colors duration-500 hover:outline hover:outline-2 hover:bg-transparent hover:text-black"
        }>
        {label}
      </a>
    </div>
  );
};

export default Button;
