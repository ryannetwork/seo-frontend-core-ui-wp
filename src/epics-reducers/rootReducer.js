import {combineReducers} from 'redux';

import {requestLoginReducer, fetchLoginReducer} from './services/fetch-login.duck';
import {requestLogoutReducer, fetchLogoutReducer} from "./services/fetch-logout.duck";

import {requestProfileReducer, fetchProfileReducer} from "./services/fetch-profile.duck";

import {fetchToastReducer} from "./services/fetch-toast.duck";

import {
  requestProductsReducer,
  fetchProductsReducer,
  requestProductReducer,
  fetchProductReducer
} from "./services/fetch-product.duck";

const rootReducer = combineReducers({
  loginReq: requestLoginReducer,
  loginRes: fetchLoginReducer,

  logoutReq: requestLogoutReducer,
  logoutRes: fetchLogoutReducer,

  profileReq: requestProfileReducer,
  profileRes: fetchProfileReducer,

  notify: fetchToastReducer,

  productsReq: requestProductsReducer,
  productsRes: fetchProductsReducer,
  productReq: requestProductReducer,
  productRes: fetchProductReducer
});

export default rootReducer;
