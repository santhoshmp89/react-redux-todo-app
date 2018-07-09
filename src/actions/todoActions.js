function addTodo(data) {
    return{
        type: "ADD_TODO",
        payload: data
    }
}

function completedTodoLists(data) {
    return{
        type: "COMPLETED_TODO",
        payload: data
    }
}

function deleteTodo(data) {
    return{
        type: "DELETE_TODO",
        payload: data
    }
}

export {addTodo, completedTodoLists, deleteTodo};