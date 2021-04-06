
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = { 
    email:"",
    name: "",
    avatar: "",
    profile: null,
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default profileReducer;