import { Outlet } from "react-router-dom";
import Sider from "./Sider"
import { useSelector } from "react-redux";

const Layout = () => {
    const menu = useSelector((state) => state.app.app.expand);
    console.log(menu)
  return (
    <div className="main_layout">
     <Sider/>
     <div className={`outlet_content  ${menu?"expand":"reduce"}`}>
    <Outlet />
    </div>
    </div>
  )
}

export default Layout;
