import {
    SEARCH_TEXT ,
    SEARCH_SUCCESS,
    SEARCH_UN_SUCCESS,
    SEARCH_LOAD,
    PROFILE_LOAD,
    PROFILE_DATA
} from '../actions/types';


const INITAL_STATE = { 
    term: '',
    data: '',
    loading: null,
    userdata: '',
};

export default (state = INITAL_STATE,action ) => {
    console.log(action);

    switch (action.type){
        case SEARCH_TEXT:
            return {...state ,term: action.payload}
        case SEARCH_LOAD:
            return {...state ,loading: true}     
        case SEARCH_SUCCESS:
           return {...state , data: action.payload , loading: false}
        case SEARCH_UN_SUCCESS:
            return { ...state};  
        case PROFILE_LOAD:
            return { ...state }; 
        case PROFILE_DATA:
            return { ...state , userdata: action.payload  };     
        default:
            return state;
    }
};

