import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-page">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
