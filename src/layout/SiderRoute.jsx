import { IoMdHome } from "react-icons/io";
import { RiTodoFill } from "react-icons/ri";
export const Routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: <IoMdHome />,
  },
  {
    name: "ToDo",
    path: "/todo",
    icon: <RiTodoFill />,
  },
];
