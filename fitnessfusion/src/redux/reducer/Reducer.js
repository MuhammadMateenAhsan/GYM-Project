import { USER_ERROR, USER_REGISTER, USER_REQUEST } from "../Constant"

const initialstate = {
    user:[],
    loading:false,
    error:null
}
export const reducer = (state=initialstate,action)=>{
    switch(action.type){
            case USER_REQUEST:
                return{
                  ...state,
                    loading:true
                }
            case USER_REGISTER:
                return{
                  ...state,
                    loading:false,
                    user:action.payload,
                    error:null
                }
                case USER_ERROR:
                    return{
                        ...state,
                        loading:false,
                        user:[],
                        error:action.payload
                    }
            default:
                return state
        }
}