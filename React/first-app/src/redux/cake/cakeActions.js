import {Buy_Cake} from './actionTypes.js';

//Action Creater
export const buyCake = (number = 1)=>{
    return{
        type: Buy_Cake,
        payload: number
    }
}