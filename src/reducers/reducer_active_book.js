function activeBook(state = null, action) {
    if(action.type == 'SELECTED_BOOK') {
        return action.payload
    }
    return state;
}

export default activeBook;