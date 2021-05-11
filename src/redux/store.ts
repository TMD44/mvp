import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mediaReducer } from './reducers/mediaReducer';
import { configReducer } from './reducers/configReducer';

const rootReducer = combineReducers({
    config: configReducer,
    media: mediaReducer,
});

const logger = createLogger({
    collapsed: true, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
    duration: true, // print the duration of each action?
    timestamp: true, // print the timestamp with each action?
    // predicate, // if specified this function will be called before each action is processed with this middleware.
    // level = 'log': 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
    // colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
    // titleFormatter, // Format the title used when logging actions.
    // stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
    // actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
    // errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.
    // logger = console: LoggerObject, // implementation of the `console` API.
    // logErrors = true: Boolean, // should the logger catch, log, and re-throw errors?
    // diff = false: Boolean, // (alpha) show diff between states?
    // diffPredicate // (alpha) filter function for showing states diff, similar to `predicate`
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
