import {postDataApi} from '../../utils/fetchData';
// import {ALERT_TYPES} from './alertActions';
// import valid from '../../utils/valid';

export const TYPES = {
    AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) =>{
    
    try {
        dispatch({
            type:ALERT_TYPES.ALERT,
            payload: {
                loading:true,
            }
        })
        const res = await postDataApi('login', data)
        localStorage.setItem('login',true);
        
        dispatch({
            type: 'AUTH',
            payload:{
                token:res.data.access_token,
                user: res.data.user
            } 
        })

        

        dispatch({
            type:ALERT_TYPES.ALERT,
            payload:{
                success:res.data.msg
            }
        })
    } catch (error) {
        
        dispatch({
            type:ALERT_TYPES.ALERT,
            payload:{
                error:error.response.data.msg,
            }
        })
    }
}

