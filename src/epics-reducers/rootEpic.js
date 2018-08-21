import {combineEpics} from 'redux-observable';
import {fetchLoginEpic} from './services/fetch-login.duck'
import {fetchLogoutEpic} from "./services/fetch-logout.duck";
import {fetchProfileEpic} from "./services/fetch-profile.duck";
import {fetchProductsEpic, fetchProductEpic} from "./services/fetch-product.duck";

const rootEpic = combineEpics(
  //Get login info
  fetchLoginEpic,
  // Logout
  fetchLogoutEpic,
  // profile
  fetchProfileEpic,
//product
  fetchProductsEpic,
  fetchProductEpic
  )
;

export default rootEpic;
