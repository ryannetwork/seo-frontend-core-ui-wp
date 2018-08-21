import * as React from 'react';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import {withRouter} from 'react-router';
import Register from '../Pages/Register/Register'
import Page404 from '../Pages/Page404/Page404'
import Page500 from '../Pages/Page500/Page500'
import {DefaultLayout} from '../../containers'


class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }

  render() {
    let ROUTE =
      <Switch>
        <Route exact path="/register" name="Register Page" component={Register}/>
        <Route exact path="/404" name="Page 404" component={Page404}/>
        <Route exact path="/500" name="Page 500" component={Page500}/>
        <Route path="/" name="Home" component={DefaultLayout}/>
      </Switch>
    return (
      <div className="wrapper full-page">
        {ROUTE}
      </div>
    );
  }
}

export default withRouter(MainLayout);
