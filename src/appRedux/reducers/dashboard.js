import {PRICE_STREAM_TABLE} from '../action-type/actionType';

const INIT_STATE = {
    price_stream_table:[]
}

export default (state=INIT_STATE,action)=>{
    switch (action.type) {

        case PRICE_STREAM_TABLE:{
            return {...state,price_stream_table:action.payload}
        }   
            
        default:
            return state;
    }
}