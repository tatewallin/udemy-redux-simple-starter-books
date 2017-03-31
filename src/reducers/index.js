import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


const rootReducer = combineReducers({
    // defines books as a global application state property with the value from BooksReducer
    // any key added to the combinedReducers gets added to the global state
    books:BooksReducer,
    activeBook:ActiveBook
});

export default rootReducer;
