const Button = ({ label, link }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="px-4 py-1.5 text-white bg-black rounded-full shadow-lg trasnition duration-300 active:bg-slate-600 md:text-base hover:bg-slate-300 hover:text-black">
      {label}
    </a>
  );
};

export default Button;
