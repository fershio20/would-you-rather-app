import { getInitialData } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";



export function handleInitialData(){
    return (dispatch) =>{

        return getInitialData()
            .then(({ users, polls}) =>{
                dispatch(receivePolls(polls))
                dispatch(receiveUsers(users))
                // dispatch(setAuthedUser(AUTHED_ID))

            })
    }
}
