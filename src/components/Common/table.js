import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceStreamTable } from "../../appRedux/actions/dashboard";

const Table = () =>{
   const dispatch = useDispatch();
   
   const socket = useSelector(({common}) => common.socket);  
   const price_stream_table = useSelector(({dashboard}) => dashboard.price_stream_table);  

   useEffect(()=>{
      if(tableData.length > 10){
         var data = tableData;
         data.shift();
         setTableData([...data,price_stream_table]);
      }else{
         setTableData([...tableData,price_stream_table]);
      }
      
   },[price_stream_table]);
   
   const [tableData, setTableData] = useState([]);

    return(
    <>
    <div class="coman-sec table-sec">
    <table>  
       <tr>
          <td>Last Price BTC</td>
          <td>24 Hour Change</td>
          <td>24 Hour Volume</td>
       </tr>
       {
         tableData && tableData.map((item) => (
            <tr>
               <td>{item[6]}</td>
               <td>{item[5]}</td>
               <td>{item[7]}</td>
            </tr>
            )
    )}
    </table>
    </div>
    </>
    )
} 
export default Table;