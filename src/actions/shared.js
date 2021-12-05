import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch) =>{

        return getInitialData()
            .then(({ users, polls}) =>{
                dispatch(receivePolls(polls))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))

            })
    }
}
