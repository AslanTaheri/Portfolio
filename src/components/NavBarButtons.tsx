import NavButton from "./NavButton";
import BkgFilter from "./filters/BkgFilter";

const NavBarButtons = ({ onClickAbout, onClickProjects, onClickContact }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <NavButton onClick={onClickAbout} bullet={"A."} label={"About"} />
      <NavButton onClick={onClickProjects} bullet={"B."} label={"Projects"} />
      <NavButton onClick={onClickContact} bullet={"C."} label={"Contact"} />
    </div>
  );
};
export default NavBarButtons;
