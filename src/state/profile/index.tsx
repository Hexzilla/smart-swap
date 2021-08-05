import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileState } from 'state/types'

const initialState: ProfileState = {
  isInitialized: false,
  isLoading: true,
  hasRegistered: false,
  data: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileFetchStart: (state) => {
      state.isLoading = true
    },
    profileFetchFailed: (state) => {
      state.isLoading = false
      state.isInitialized = true
    },
    profileClear: () => ({
      ...initialState,
      isLoading: false,
    }),
    addPoints: (state, action: PayloadAction<number>) => {
      state.data.points += action.payload
    },
  },
})

// Actions
export const { profileFetchStart, profileFetchFailed, profileClear, addPoints } =
  profileSlice.actions

export default profileSlice.reducer
