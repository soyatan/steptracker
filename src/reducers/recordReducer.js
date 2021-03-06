const INITIAL_STATE = null;

//selector
export const recordSelector=state=>state.recordState;



export const CREATE_RECORD_REQUEST='record/create/request';
export const FETCH_RECORDS='record/create';
export const SET_RECORDS='record/set';


export const createRecordRequest = (locations,name) =>{
    
    return{
        type: CREATE_RECORD_REQUEST,
        payload:{
            locations,name,
        }
    }
}


export const fetchRecords = () =>{
    
    return{
        type: FETCH_RECORDS,
      
    }
}

export const setRecords = (records) =>{
    
    return{
        type: SET_RECORDS,
        payload:{
            records
        }
      
    }
}

export const recordReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_RECORDS:
            return action.payload.records
        
    default:
        return state;
    }
}
