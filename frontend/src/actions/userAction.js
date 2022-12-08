import {USER_LOGING_REQUEST,USER_LOGING_SUCCESS,USER_LOGING_FAIL} from '../Constants/UserConstant'
import axios from 'axios'

export const userLogin=(email,password)=>(getState,dispatch)=>{
    try{

        dispatch({
            type:USER_LOGING_REQUEST
        })
    
        const config={
            headers:{
               ' Content-type':'Application-json'
            }
    
        }
        const {data}=axios.get('/api/users/login',{email,password},config)
        dispatch({
            type:USER_LOGING_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_LOGING_FAIL,
            payload: error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}