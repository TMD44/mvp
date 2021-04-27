import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mediaReducer } from './reducers/mediaReducer';
import { configReducer } from './reducers/configReducer';

// TODO: find a better name than "media"

const rootReducer = combineReducers({
    config: configReducer,
    media: mediaReducer,
});

const logger = createLogger({
    collapsed: true,
});

// TODO: solve this error: Exported variable 'configureStore' has or is using name
// '$CombinedState' from external module "G:/mvp/node_modules/redux/index" but cannot be named. ts(4023)

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
