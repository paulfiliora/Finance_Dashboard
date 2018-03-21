import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Upgrade from 'views/Upgrade/Upgrade';
import TasksView from 'views/TasksView/TasksView';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    { path: "/table", name: "Sales Sheet", icon: "pe-7s-note2", component: TableList },
    { path: "/task", name: "Tasks", icon: "pe-7s-note2", component: TasksView },
    { upgrade: true, path: "/upgrade", name: "Google", icon: "pe-7s-rocket", component: Upgrade },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
