import { api } from './api.js'

export const postsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        allUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
        }),
        userById: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
        }),
        addUser: builder.mutation({
            query: (postData) => ({
                url: `/users/add`,
                method: 'POST',
                body: postData,
            }),
        }),
        deleteUser: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const {
    useAllUsersQuery,
    useUserByIdQuery,
    useAddUserMutation,
    useAddUserQuery,
} = postsApi

export const {
    endpoints: { allUsers, userById, addUser, deleteUser },
} = postsApi
