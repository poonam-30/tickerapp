import React, { useState } from 'react';
const Textbox = ()=>{
  const [isActive, setIsActive] = useState(false);
    return (
    <>                  
    <div class={isActive?"amount-input active":"amount-input"}>
       <input type="text" name="text" placeholder="Amount" onFocus={()=>setIsActive(true)} />
       <div class="up-down">
          <a href="#" class="up-arrow">
            <span><i class="fa fa-caret-up" aria-hidden="true"></i></span>
          </a>
          <a href="#" class="down-box">
            <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
          </a>
       </div>
    </div>
    </>
    )
}
export default Textbox;