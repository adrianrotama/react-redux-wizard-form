import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from '../Reducers'

export default function configureStore(initialState, middleware) {

    const sagaMiddleware = createSagaMiddleware()
    const logger = createLogger()

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, sagaMiddleware, logger)
    )

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}