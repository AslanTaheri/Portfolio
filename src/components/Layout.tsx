import { Outlet } from "react-router-dom";
import BkgFilter from "./filters/BkgFilter";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
