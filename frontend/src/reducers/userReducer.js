import {USER_LOGING_REQUEST,USER_LOGING_SUCCESS,USER_LOGING_FAIL,USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from '../Constants/UserConstant'

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