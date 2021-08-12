import Trade from "../Common/trade";
import PriceStream from "../Common/priceStream";
import TradingPower from "../Common/tradingPower";
import Exposure from "../Common/exposure";
import RecentTrades from "../Common/recentTrades";
const InnerContainer = ()=>{
    return (
    <>
    <div class="secound-section">
            <div class="trade-row">
               <div class="left-boxes">
                  <div class="left-brow">
                    <Trade/>
                    <PriceStream/>
                  </div>
                  <div class="third-sec">
                     <div class="left-brow">
                        <TradingPower/>
                        <Exposure/>
                     </div>
                  </div>
               </div>
               <RecentTrades/>
            </div>
         </div>
   </>
    )
}

export default InnerContainer;