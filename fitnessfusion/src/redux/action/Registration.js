import { GET_ACTIVITIES, USER_REGISTER } from "../Constant"

export const register = (user) =>{
    
    // console.log(user)
    return{
        type:USER_REGISTER,
        payload:user
    }
}
const getActivityData = (user) =>{
    return{
            type:GET_ACTIVITIES,
            payload:user
        }
}

export const getActivities = () => async(dispatch)=>{
    try {
        const user = await axios.get("http://127.0.0.1:8000/activities");
        dispatch(getActivityData(user.data));
        console.log(user)
    } catch (error) {
        console.log(error);
    }
}

