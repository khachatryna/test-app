import CoursesIcon from "../assets/resources/coursesIcon";
import TasksIcon from "../assets/resources/tasksIcon";
import UsersIcon from "../assets/resources/usersIcon";

const routs = [
    {
        id: 1,
        path: "/courses",
        name: "Courses",
        icon: <CoursesIcon />,
        navbar: true
    },
    {
        id: 2,
        path: "/tasks",
        name: "Tasks",
        icon: <TasksIcon />,
        navbar: true
    },
    {
        id: 3,
        path: "/users",
        name: "Users",
        icon: <UsersIcon />,
        navbar: true
    },
    {
        id: 4,
        path: "/",
        name: "Home",
        icon: "",
        navbar: false
    }
]

export default routs