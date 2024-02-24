import {combineReducers, applyMiddleware, legacy_createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {multiClientMiddleware} from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import student from '@redux/reducers/StudentReducer';
import lecture from '@redux/reducers/LectureReducer';
import {defaultApi, studentApi, lectureApi} from "@api/index";


const appReducer = combineReducers({
    student,
    lecture
});

const rootReducer = (state, action) => {
    if (action.type === 'DATA_TRANSFER') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['toolPage'],
    // blacklist: ['toolPage'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const axiosMiddlewareClients = {
    default: {
        client: defaultApi,
    },
    student: {
        client: studentApi,
    },
    lecture: {
        client: lectureApi,
    }

};

export const store = legacy_createStore(
    persistedReducer,
    applyMiddleware(
        thunk.withExtraArgument({demo: 'demo'}),
        multiClientMiddleware(axiosMiddlewareClients, {returnRejectedPromiseOnError: true})
    )
);

export const persistedStore = persistStore(store);
