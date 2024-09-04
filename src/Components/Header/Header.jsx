import React from "react";
import SidebarSmScreen from "../Sidebar/SidebarSmScreen";
import { Link } from "react-router-dom";
import { getGreeting } from "../../Helpers/globalFunction";

const Header = () => {
  return (
    <>
      <nav
        className="navbar border-bottom px-4 sticky-header bg-white"
        style={{ paddingBlock: "11px" }}
      >
        <div className="container-fluid align-items-start">
          <p className="navbar-brand d-none-md">
            {getGreeting()},&nbsp;
            <span className="text-primary-theme">Dipankar Barman</span>
          </p>

          <span className="d-block-md">
            <span
              className="btn btn-sm btn-light btn-icon rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#navigation_side_drawer_sm_screen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </span>
          </span>

          <div className="d-flex align-items-center gap-3">
            <span className="btn btn-icon border rounded-circle position-relative">
              <i className="lni lni-alarm"></i>
              <span
                className="position-absolute translate-middle p-1 bg-danger border border-light rounded-circle"
                style={{ top: "5px", right: "-5px" }}
              ></span>
            </span>
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                loading="lazy"
                style={{ height: "40px", width: "40px" }}
                src="https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-1/420067553_3694929510790035_8155103646032178127_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=ySzQTxhKFcYQ7kNvgGnBm34&_nc_ht=scontent.fccu20-1.fna&oh=00_AYBOrHaA6MKMzWfHfP20sTYYx7YXUrF0br9Y2QYCbpHvig&oe=66DCC09A"
                alt=""
              />
              <div className="dropdown">
                <span
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dipankar Barman
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ left: "-100px" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <span className="dropdown-item pointer">Logout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SidebarSmScreen />
    </>
  );
};

export default Header;
