import { createStore, applyMiddleware,combineReducers} from 'redux';
import { thunk } from 'redux-thunk';
import bookReducer from './reducers/bookReducer';

const rootReducer = combineReducers({ books: bookReducer  });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
