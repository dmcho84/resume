import React, { Component } from "react";
import styles from "./PageTemplate.scss";
import classNames from "classnames/bind";
import Header from "./Header";

const cx = classNames.bind(styles);

class PageTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let children = this.props.children;

    if (!Array.isArray(children)) {
      children = [children];
    }

    let content = children.map((child, i) => {
      let childKey = child && child && child.key ? child.key : "disable-key";
      return (
        <section key={`section_key_${childKey}_${i}`} className={childKey}>
          {child}
        </section>
      );
    });

    return (
      <div
        id={"page-template"}
        className={cx("page-template", `nav-status-${this.props.status.nav}`)}
      >
        <Header handleNav={this.props.handleNav} status={this.props.status} />
        <section className={cx("content")}>{content}</section>
        <div className={cx("dim")} onClick={this.props.handleNav} />
      </div>
    );
  }
}

export default PageTemplate;
