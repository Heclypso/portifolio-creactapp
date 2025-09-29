import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './reducers/sidebar'

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
