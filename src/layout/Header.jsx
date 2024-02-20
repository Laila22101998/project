import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
import { setDirectionData, setTheme } from "../store/Initializer";
import { BiSolidDirectionRight, BiSolidDirectionLeft } from "react-icons/bi";

const Header = () => {
  const [colorTheme, setColorTheme] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [direction, setDirection] = useState(false);
  const routeName = useSelector((state) => state.app.app.routeName);
  const theme = useSelector((state) => state.app.app.themes.colorTheme);
  const DirectionTheme = useSelector((state) => state.app.app.direction);
  const dispatch = useDispatch();

  const handleColor = () => {
    setColorTheme(!colorTheme);
    dispatch(setTheme({ colorTheme: colorTheme }));
    setDropDown(!dropDown);
  };

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  const handleDirection = () => {
    setDirection(!direction);
    setDropDown(!dropDown);
    dispatch(setDirectionData(direction));
  };

  return (
    <div className="header_container">
      <div>{routeName}</div>
      <div className="hear_icon" onClick={handleDropdown}>
        <FaUserCircle />
      </div>
      {dropDown && (
        <div className={`dropDown ${DirectionTheme ? "RTL" : "LTR"}`}>
          <div className="theme_style" onClick={handleColor}>
            <span> {theme ? <MdDarkMode /> : <MdLightMode />}</span>
            <span>{theme ? "Dark" : "Light"}</span>
          </div>
          <div className="theme_style">
            <span className="direction_style" onClick={handleDirection}>
              {" "}
              {DirectionTheme ? (
                <BiSolidDirectionRight />
              ) : (
                <BiSolidDirectionLeft />
              )}
            </span>
            <span>{DirectionTheme ? "RTL" : "LTR"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
