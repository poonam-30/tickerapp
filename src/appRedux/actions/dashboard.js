import {PRICE_STREAM_TABLE} from '../action-type/actionType';

export const setPriceStreamTable =(tableData)=>{
    return {
        type:PRICE_STREAM_TABLE,
        payload:tableData
    }
}