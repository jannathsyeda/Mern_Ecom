import {USER_LOGING_REQUEST,
    USER_LOGING_SUCCESS,
    USER_LOGING_FAIL,
    USER_LOGOUT, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL} from '../Constants/UserConstant'
import axios from 'axios'

export const Login=(email, password)=>async(dispatch)=>{
    try{

        dispatch({
            type:USER_LOGING_REQUEST
        })
        const config={
            headers:{
               'Content-Type':'application/json',
              

            }
    
        }
        const {data}=await axios.post('/api/users/login',
        {email,password},
        config
        )
        
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

export const userLogout=()=>(dispatch)=>{
 localStorage.removeItem('userInfo')
 dispatch({
    type:USER_LOGOUT
 })
}


export const RegisterAction=(name,email, password)=>async(dispatch)=>{
    try{

        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config={
            headers:{
               'Content-Type':'application/json',
            }
    
        }
        const {data}=await axios.post('/api/users',
        {email,password},
        config
        )
        
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type:USER_LOGING_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){

        dispatch({
            type:USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}

