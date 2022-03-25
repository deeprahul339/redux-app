export const countReducer=(state=0,action)=>{
    if(action.type==='dec')
    {
        return state-action.payload
    }
    else if(action.type==='inc'){
    return state+action.payload
    }
    else{
        return state
    }
    } 
    //named export and default export
export default countReducer