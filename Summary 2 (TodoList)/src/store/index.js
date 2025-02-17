import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todosSlice';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
    todos : todosReducer
})
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist : []
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer
})

const persistor = persistStore(store)

export { store, persistor };
