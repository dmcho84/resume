import React, { Fragment, Component } from "react";
import PageTemplate from "components/common/PageTemplate";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

import Visual from "containers/section/Visual";

class ListPage extends Component {
  handleNav = () => {
    this.props.BaseActions.toggleNav();
  };

  render() {
    const { status } = this.props;
    return (
      <PageTemplate status={this.props.status} handleNav={this.handleNav}>
        <Visual key="visual" />
        <Fragment key="profile">profile</Fragment>
        <Fragment key="project">project</Fragment>
      </PageTemplate>
    );
  }
}

export default connect(
  state => ({
    status: state.base.get("status").toJS()
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ListPage);
