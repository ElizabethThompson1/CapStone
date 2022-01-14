import{ALERT_TYPES} from './alertActions';
import {getDataApi} from '../../utils/fetchData'

export const PROFILE_TYPES = {
    LOADING : 'LOADING',
    GET_USER : 'GET_USER'

}

export const getProfileUsers = ({users,id, auth}) => async (dispatch) =>{
    if(users.every(item => item._id !== id)){
           try {
            dispatch({type: PROFILE_TYPES.LOADING, payload:{loading:true}})
            const res =  await getDataApi(`user/${id}`, auth.token)
      

            const user = res;
          
           
         
            console.log(user)
            
            dispatch({
                type:PROFILE_TYPES.GET_USER,
                payload:user.data.user
            })
           
            dispatch({type: PROFILE_TYPES.LOADING, payload:{loading:false}})
            
        } catch (err) {
            dispatch({
                type:'ALERT',
                payload:{
                    error: err.response.data.msg
                }
            })
        }
    }
}

