const Button = ({ label, link }) => {
  return (
    <button
      href=""
      className="px-5 py-2 text-sm text-white bg-black rounded shadow-md trasnition duration-300 active:bg-slate-600 md:text-base hover:bg-slate-300 hover:text-black">
      {label}
    </button>
  );
};

export default Button;
