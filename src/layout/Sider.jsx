import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { setExpand, setRouteName } from "../store/Initializer";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "./SiderRoute";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Layout.css";

const Sider = () => {
  const [isExpand, setIsExpand] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const menu = useSelector((state) => state.app.app.expand);
  const DirectionTheme = useSelector((state) => state.app.app.direction);
  const handleExpand = () => {
    setIsExpand(!isExpand);
    dispatch(setExpand(isExpand));
  };
  const handleRouteClick = (routeName) => {
    dispatch(setRouteName(routeName));
  };

  return (
    <div className={`sider_main ${!menu ? "sider_expand" : "sider_reduce"}`}>
      <div className="sider_head">
        {!menu && <div >Template</div>}
        <div>
          {!menu ? (
            <IoMenu onClick={handleExpand} />
          ) : (
            <AiOutlineClose onClick={handleExpand} />
          )}
        </div>
      </div>

      {Routes.map((route, index) => (
        <div key={index} className="link_main">
          <Link
            to={route.path}
            onClick={() => handleRouteClick(route.name)}
            className={` ${
              location.pathname === route.path ? "active-link" : ""
            } 
            ${!menu ? "active-content" : "link_content"} ${
              DirectionTheme
                ? "link_name"
                : "link_div"
            }`}
          >
            <span className="link_icon">{route.icon}</span>
            {!menu && <span className={``}>{route.name}</span>}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sider;
