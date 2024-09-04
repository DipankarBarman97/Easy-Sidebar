import MainRoutes from "../Routes/MainRoutes";

export const sidebarItems = [
  {
    label: "Home",
    path: MainRoutes.HOME,
    icon: <i className="lni lni-bar-chart"></i>,
  },
  {
    label: "Contact",
    path: MainRoutes.CONTACT,
    icon: <i class="lni lni-phone"></i>,
  },
  {
    label: "More Data",
    icon: <i className="lni lni-layers"></i>,
    submenu: [
      { label: "Module 1", path: "/module1" },
      { label: "Module 2", path: "/module2" },
    ],
  },
];
