import React from "react";
import { getGreeting } from "../../Helpers/globalFunction";
import { sidebarItems } from "../../Navigation/AllRoutes";
import { Link, useLocation } from "react-router-dom";

const SidebarSmScreen = () => {
  const location = useLocation();

  return (
    <div
      className="modal fade"
      id="navigation_side_drawer_sm_screen"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog mb-0 ms-0 mt-0 mw-400p">
        <div className="modal-content h-100vh">
          <div className="modal-header">
            <h5 className="modal-title">
              {getGreeting()},&nbsp;
              <span className="text-primary-theme">Dipankar Barman</span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body px-0 h-100 overflow-auto">
            <ul className="sidebar-nav">
              {sidebarItems?.map((item) => {
                const isActive = location.pathname === item?.path;
                return (
                  <li className="sidebar-item" key={item?.path}>
                    <Link
                      to={item?.path}
                      className={`sidebar-link ${isActive ? "active" : ""}`}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      {item?.icon}
                      <span>{item?.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div class="modal-footer"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SidebarSmScreen;
