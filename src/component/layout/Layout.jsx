import { Outlet } from "react-router-dom";
import Sider from "./Sider"
import { useSelector } from "react-redux";
import Header from "./Header";

const Layout = () => {
    const menu = useSelector((state) => state.app.app.expand);
  return (
    <div className="main_layout">
     <Sider/>
     <div className={`outlet_content  ${menu?"expand":"reduce"}`}>
        <Header/>
    <Outlet />
    </div>
    </div>
  )
}

export default Layout;
