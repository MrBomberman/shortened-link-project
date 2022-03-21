const defaultState = {
    link: ''
}
// actions
export const GET_SHORT_LINK = 'GET_SHORT_LINK';

export default function linkReducer(state = defaultState, action){
    switch(action.type){
        case GET_SHORT_LINK:
            return {...state, link : action.payload}
    }
    return state
}

// export const linkCreator = (payload) => ({type: GET_SHORT_LINK}, payload)