import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Props = {
  scrollY: number
}

const initialState: Props = {
  scrollY: 0
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setScrollY: (state, action: PayloadAction<number>) => {
      state.scrollY = action.payload
    }
  }
})

export const { setScrollY } = sidebarSlice.actions
export default sidebarSlice.reducer
