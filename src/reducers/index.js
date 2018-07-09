import {combineReducers} from 'redux';
import activeBook from './reducer_active_book';

import addList from './reducer_add_list';
import completedLists from './reducer_completed_list';

const rootReducers = combineReducers({
    activeBook: activeBook,
    todoList: addList,
    completedLists: completedLists
})

export default rootReducers;