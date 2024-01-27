import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './User/userSlice';


export const store = configureStore({
  reducer: {user:userReducer},
  middleware:(getDefaultMiddleware)=>  getDefaultMiddleware({
  
        serializablecheck:false,
  }),
})


// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch