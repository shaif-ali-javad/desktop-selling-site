import React from "react";
import "./navbar.css";
import { NavbarData } from "./navbarData";

function Navbar() {
  return (
    <div className="sidebar">
      <ul className="sidebarlist">
        {NavbarData.map((val, key) => {
          return (
            <li
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
