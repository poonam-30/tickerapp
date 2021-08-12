import Danger from "./Button/danger"
import Success from "./Button/success"
import Textbox from "./textbox"
const Trade = ()=>{
return (
<>
<div class="trade-box">
   <div class="full-height">
      <div class="color-box-2">
         <div class="header-2">
            <h3>Trade</h3>
         </div>
         <div class="amount-sec coman-sec">
            <Textbox/>
            <div class="buy-btns">
               <Success/>
               <Danger/>
            </div>
            <div class="amount-p">
               <div class="ptext">
                  <p>New position marging requirement</p>
                  <span>1 500 EUR</span>
               </div>
               <div class="ptext">
                  <p>Estimated new total margin requirement for roll</p>
                  <span>9 700 EUR</span>
               </div>
               <div class="ptext">
                  <p>Fixed fee (10 EUR per 1 XBT contract)</p>
                  <span>15 EUR</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</>
)
}
export default Trade;