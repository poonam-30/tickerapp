import Header from "../Common/header";
import Price from "../Common/price";
import InnerContainer from "../Dashboard/inner-container";

const Dashboard = ()=>{    
    return (
    <>
    <Header/>
    <div class="main-section">
        <Price/>
        <InnerContainer/>
    </div>      
   </>

    )
}


export default Dashboard;