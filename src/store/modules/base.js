import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

import { backgroundClick } from "lib/clickEvent";

// action types
const TOGGLE_NAV = "base/TOGGLE_NAV";
// action creators
const toggleNav = createAction(TOGGLE_NAV);

export { toggleNav };
// initial state
const initialState = Map({
  status: Map({
    nav: false
  })
});

// reducer
export default handleActions(
  {
    [TOGGLE_NAV]: (state, action) => {
      console.log(`TOGGLE_NAV`);
      return state.setIn(["status", "nav"], !state.toJS().status.nav);
    }
  },
  initialState
);
