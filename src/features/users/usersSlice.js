import { createSlice } from '@reduxjs/toolkit'

const initialState = { isAddUserModal: false }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsAddUserModal(state, action) {
            state.isAddUserModal = action.payload
        },
    },
})
export const { setIsAddUserModal } = usersSlice.actions
export default usersSlice.reducer
