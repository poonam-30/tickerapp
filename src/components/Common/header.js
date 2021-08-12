import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {sendMessage} from '../../lib/web';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceStreamTable} from '../../appRedux/actions/dashboard';
import { fetchSuccess, setSocket} from '../../appRedux/actions/common';

const Header = ()=>{
   
   const dispatch = useDispatch();
   
   const socket = useSelector(({common}) => common.socket);  

    // Listen for messages
    socket.onmessage = function (msg) {
      
      console.log(JSON.parse(msg.data))
   }

    socket.addEventListener('close', (event) => {
      console.log('The connection has been closed successfully.');
    });

    const onOpen = async () =>{
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
    }
    
    
    const onClose = async () =>{
       // Close the connection, if open.
         if (socket.readyState === WebSocket.OPEN) {
            socket.close();
         }
   }
   

    return (
    <>
    <div className="roll-header">
         <div className="header-sec">
            <div className="logo-sec">
               <a href="/">TickerApp</a>
            </div>
            <div className="login-header">
               <button onClick={()=>onOpen()}>Session Open</button>
               <button onClick={()=>onClose()}>Session Close</button>
               
            </div>
            
         </div>
      </div>
   </>
    )
}

export default Header;