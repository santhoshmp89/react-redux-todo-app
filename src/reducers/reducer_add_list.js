export default function addList(state=[], action) { 
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
            break;      

        case "DELETE_TODO":            
            return state.filter(val => val !== action.payload);
    
        default:
            return state;
    }  
           
   
}