import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Resume, NotFoundPage } from "pages";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Resume} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
