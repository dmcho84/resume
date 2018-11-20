import React, { Component } from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const cx = classNames.bind(styles);

class Header extends Component {
  handleStopPropagation = e => {
    e.stopPropagation();
    console.log("쟂");
  };

  render() {
    const { handleNav } = this.props;
    const { nav: navStatus } = this.props.status;

    return [
      <header className={cx("header")}>
        <div className={cx("header-content")}>
          <h1 className={cx("logo")}>
            <a href="/">LOGO</a>
          </h1>
          <div className={cx("header-menu", `navStatus-${navStatus}`)}>
            <button type="button" onClick={handleNav}>
              Menu
            </button>
          </div>
          <div className={cx("header-search")}>
            <div className={cx("search-box")}>
              <input type="text" id="asd" name="asd" className="search-input" />
              <label htmlFor="asd">Search</label>
            </div>
            <button type="button" className={`btn-open`}>
              Search
            </button>
          </div>
          <div className={cx("header-member")}>
            <button type="button">Login</button>
          </div>
        </div>
      </header>,
      <aside
        id={`aside-nav`}
        className={cx("aside-nav", `navStatus-${navStatus}`)}
      >
        <div className={cx("aside-title")}>
          Menu
          <button type="button" className={cx("btn-close")} onClick={handleNav}>
            close X
          </button>
        </div>
        <div className={cx("aside-menu")}>
          <ul className={cx("aside-menu-list")}>
            <li className={cx("aside-menu-item")}>Menu1</li>
            <li className={cx("aside-menu-item")}>Menu2</li>
            <li className={cx("aside-menu-item")}>Menu3</li>
          </ul>
        </div>
      </aside>
    ];
  }
}

export default Header;
