import { IoMdHome } from "react-icons/io";
import { RiTodoFill } from "react-icons/ri";
const dashboard = import("../pages/dashboard/Dashboard")
const todo = import("../pages/todo/Todo")
export const Routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <IoMdHome />,
        component: dashboard,
    },
    {
        name: "ToDo",
        path: "/todo",
        icon: <RiTodoFill />,
        component: todo,
    },

]