import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
import { setTheme } from "../store/Initializer";


const Header = () => {
  const [colorTheme, setColorTheme] = useState(false);
  const routeName = useSelector((state) => state.app.app.routeName);
  const theme = useSelector((state) => state.app.app.themes.colorTheme);
  console.log(theme);
  const dispatch = useDispatch();

  const handleColor = () => {
    setColorTheme(!colorTheme)
    dispatch(setTheme({colorTheme:colorTheme}))
  }
  return (
    <div className="header_container">
      <div>{routeName}</div>
      <div className="hear_icon"><FaUserCircle /></div>
      <div className="dropDown">
        <div>{theme?<MdDarkMode onClick={handleColor} /> :<MdLightMode onClick={handleColor} /> }</div>
      </div>
    </div>
  )
}

export default Header
