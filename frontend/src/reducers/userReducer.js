import {USER_LOGING_REQUEST,USER_LOGING_SUCCESS,USER_LOGING_FAIL,USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_PROFILE_UPDATE_SUCCESS, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_FAIL, USER_PROFILE_RESET, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, USER_LIST_RESET} from '../Constants/UserConstant'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGING_REQUEST:
        return {
          loading: true,
          
        };
      case USER_LOGING_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
        };
      case USER_LOGING_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        case USER_LOGOUT:
            return {
          
            }; 
      default:
        return state;
    }
  };


  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return {
          loading: true,
          
        };
      case USER_REGISTER_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
        };
      case USER_REGISTER_FAIL:
        return {
          loading: false,
          error: action.payload,
        }; 
      default:
        return state;
    }
  };

  export const userDetailsReducer = (state = {user:{}}, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return {
          loading: true,
          
        };
      case USER_DETAILS_SUCCESS:
        return {
          loading: false,
          user: action.payload,
        };
      case USER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }; 
        case USER_PROFILE_RESET:
          return {
            user:{}
          };
          
      default:
        return state;
    }
  };

  export const userUpdateProfileReducer = (state = { }, action) => {
    switch (action.type) {
      case USER_PROFILE_UPDATE_REQUEST:
        return {
          loading: true,
          
        };
      case USER_PROFILE_UPDATE_SUCCESS:
        return {
          loading: false,
          success:true,
          userInfo: action.payload,
        };
      case USER_PROFILE_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }; 
        case USER_PROFILE_RESET:
          return {
            
          };
      default:
        return state;
    }
  };

export const userListReducer=(state={users:[]},action)=>{
  switch(action.type){
    case USER_LIST_REQUEST:
      return{
        loading:true
      }
    case USER_LIST_SUCCESS:
      return{
        loading:false,
        users:action.payload
      }
    case USER_LIST_FAIL:
      return{
        loading:false,
        error:action.payload
      }
      case USER_LIST_RESET:
        return{
          users:[]
        }
    default:
      return state
  }
}

