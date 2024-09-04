import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "../../Navigation/AllRoutes";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      id="sidebar"
      className={`border-end d-none-md ${isExpanded ? "expand" : ""}`}
    >
      <div className="d-flex align-items-center border-bottom">
        <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          {isExpanded ? (
            <i className="lni lni-grid-alt text-primary-theme"></i>
          ) : (
            <i className="lni lni-indent-increase text-primary-theme"></i>
          )}
        </button>
        <div className="sidebar-logo">
          <Link to="/">
            <h4 className="mb-0 text-primary-theme text-uppercase">Logo</h4>
          </Link>
        </div>
      </div>
      <ul className="sidebar-nav">
        {sidebarItems?.map((item, index) => (
          <SidebarItem
            key={index}
            to={item?.path}
            icon={item?.icon}
            label={item?.label}
            submenu={item?.submenu}
            setIsExpanded={setIsExpanded}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
