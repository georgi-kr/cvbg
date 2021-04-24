import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root.reducer';
import { rootSaga } from './root.saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Run the saga
sagaMiddleware.run(rootSaga);

if (true) {
	(window as any).store = store;
}

export default store;
