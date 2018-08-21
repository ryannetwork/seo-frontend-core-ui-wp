import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import {DefaultLayout} from './containers';
// Pages
import {Login, Page404, Page500, Register} from './views/Pages';

// import { renderRoutes } from 'react-router-config';
/////////////////////////////////////
//import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import axios from 'axios'
import {createStore, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import rootReducer from './epics-reducers/rootReducer'
import rootEpic from './epics-reducers/rootEpic'
import {fetchToast} from "./epics-reducers/services/fetch-toast.duck";
import {CONSTANTS} from "./common/constants";
import {COMMON_APP} from "./common/common_app";
import axios from 'axios'
import Routes from './views/Routes/index'
import * as $ from 'jquery'

const epicMiddleware = createEpicMiddleware(rootEpic);


const initialState = {
  //global variable
};

let store = createStore(rootReducer, initialState, applyMiddleware(epicMiddleware))

// check bug api
let countRequest = 0;
let countResponse = 0;
axios.interceptors.request.use(function (config) {
  //$("#MainToggleModal").show();
  //config.headers['token'] = localStorage.getItem('BROWSER_TOKEN');
  //config.headers['lang_id'] = localStorage.getItem('i18nextLng');
  config.timeout = 20000;
  return config;
}, function (error) {
  return Promise.reject(error);
})
axios.interceptors.response.use(res => {
  //console.log(res.config.method)
  store.dispatch(fetchToast({success: true, method: res.config.method}))
  return res
}, error => {
  // method = error.response.config.method
  if (error.response.status !== 200) {
    store.dispatch(fetchToast({success: false, method: error.response.config.method}))
  }
  return Promise.reject(error)
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

export default App;
