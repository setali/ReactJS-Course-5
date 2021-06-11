import { createReducer } from '@reduxjs/toolkit'

export const user = createReducer(
  {},
  {
    USER: (state, { payload }) => payload
  }
)

export const isLoggedIn = createReducer(false, {
  IS_LOGGED_IN: (state, { payload }) => payload
})
