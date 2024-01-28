import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer  from './User/userSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

const rootRedcer=combineReducers({user:userReducer})
const PersistConfig = {
  key:'root',
  storage,
  version : 1,
}
const persistedReducer=persistReducer(PersistConfig,rootRedcer)



export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>  getDefaultMiddleware({
  
        serializablecheck:false,
  }),
})
export const persistStor =persistStore(store);

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch