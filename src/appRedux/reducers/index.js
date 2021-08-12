import { connectRouter } from 'connected-react-router';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import common from './common';

export default (history) => combineReducers({
    router:connectRouter(history),
    dashboard:Dashboard,
    common:common
})