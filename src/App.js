import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style/style.css'
import Dashboard from './components/Dashboard';
import { Provider, useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './appRedux/store';
import { useEffect } from 'react';
import { setSocket } from './appRedux/actions/common';

const store = configureStore(/ provide initial state if any /);

function App() {
  const dispatch = useDispatch();
  
  // useEffect(()=>{
    console.log("app.js")
    // Create WebSocket connection.
    const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
  
    let msg = JSON.stringify({ 
      event: 'subscribe', 
      channel: 'ticker', 
      symbol: 'tBTCUSD' 
    })

    // Connection opened
    socket.onopen = function (event) {
       console.log("ready state ->", socket.readyState);
       socket.send(msg)
    };
    
    dispatch(setSocket(socket));
    
  // },[]);
 
  return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </ConnectedRouter>
  );
}

const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}
export default AppWrapper;
