import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ to, icon, label, submenu, setIsExpanded }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isSubmenuActive = submenu?.some(
    (subItem) => location.pathname === subItem.path
  );

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      className={`sidebar-item ${submenu ? "has-submenu" : ""}`}
      ref={submenuRef}
    >
      <Link
        to={to}
        className={`sidebar-link ${
          isActive || isSubmenuActive ? "active" : ""
        }`}
        onClick={submenu ? handleDropdownToggle : undefined}
      >
        {icon}
        <span>{label}</span>
        {submenu && <i className="lni lni-chevron-down ms-auto"></i>}
      </Link>
      {submenu && (
        <ul
          className={`sidebar-dropdown ${isSubmenuOpen ? "show" : ""}`}
          onClick={() => setIsExpanded(true)}
        >
          {submenu.map((subItem, index) => (
            <li key={index} className="sidebar-item">
              <Link
                to={subItem.path}
                className={`sidebar-link ${
                  location.pathname === subItem.path ? "active" : ""
                }`}
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
