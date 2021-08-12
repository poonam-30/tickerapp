import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setPriceStreamTable } from "../../appRedux/actions/dashboard";

const Price = () =>{

    const socket = useSelector(({common}) => common.socket);  
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    // Listen for messages
    socket.onmessage = function (msg) {
      
      if(Array.isArray(JSON.parse(msg.data))){
        let a = Array.isArray(JSON.parse(msg.data)[1]) ? JSON.parse(msg.data)[1] : data;
        console.log("Araay",a);
        setData(a);
        dispatch(setPriceStreamTable(a));
      }
   }


    return(
        <>
            <div class="first-section">
                <div class="fs-box">
                <p>Product</p>
                <a href="#">
                    BTC/UTC
                    <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                </a>
                </div>
                <div class="fs-box">
                <p>Last Price BTC</p>
                    <a href="#">{data[6]}</a>
                </div>
                <div class="fs-box">
                <p>24 Hour Change</p>
                <a href="#" class={Math.sign(data[4]) == 1 ? "green" : "red"}>
                    {data[4]}  {data[5] ? '(%' + data[5] + ')' : null}
                </a>
                </div>
                <div class="fs-box">
                <p>24 Hour Volume</p>
                <a href="#">{data[7]}</a>
                </div>
                <div class="fs-box">
                <p>High</p>
                <a href="#">{data[8]}</a>
                </div>
                <div class="fs-box">
                <p>Low</p>
                <a href="#">{data[9]}</a>
                </div>
            </div>
    
        </>
    )
}
export default Price;