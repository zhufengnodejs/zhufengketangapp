/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import reducers from './reducers';
import {createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createHistory  from 'history/createHashHistory';
import {applyMiddleware} from 'redux';
let router = routerMiddleware(createHistory());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers,composeEnhancers(applyMiddleware(router)));
window._store = store;
export default store;
