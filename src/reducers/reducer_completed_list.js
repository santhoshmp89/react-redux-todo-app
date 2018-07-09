function completeTodos (state=[], action) {
    switch(action.type) {
        case "COMPLETED_TODO":
            return [...state, action.payload];
            break;

        default:            
            return state;
    }
    
}

export default completeTodos;