import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./Visual.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Visual extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <Fragment>
        <div className={cx("image")}>
          <div className={cx("image-text")}>
            <h2 className={cx("image-title")}>image title</h2>
            <div className={cx("image-description")}>image description</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    // lastPage: state.list.get("lastPage"),
    // posts: state.list.get("posts"),
    // loading: state.pender.pending["list/GET_POST_LIST"]
  }),
  dispatch => ({
    // ListActions: bindActionCreators(listActions, dispatch)
  })
)(Visual);
