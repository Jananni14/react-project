import React from "react";
import { TiGift } from "react-icons/ti";
import "./styles.scss";

function Header() {
  return (
    <div className="row shadow-sm">
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid">
          <div className="navbar-brand brand-name">
            <img
              src="https://website-assets-fw.freshworks.com/attachments/cks4gvmk304f37vfz7zkpij0b-freshteam.full.png"
              width="30"
              height="30"
              className="d-inline-block align-bottom mx-2"
              alt="icon"
            />
            <h6 className="m-0">iamneo.ai Talent Center</h6>
          </div>
          <form className="form-inline">
            <i icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75 border-bottom border-0"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="positiona-relative">
            <TiGift size={30} color="#808080c2" />
            <span className="gift-badge badge rounded-circle translate-middle">
              5
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
