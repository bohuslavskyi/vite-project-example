import { api } from "./api.js";

export const postsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
        query: () => ({
            url: "/",
            method: "GET",
        }),
    }),
        addPost: builder.mutation({
        query: (postData) => ({
            url: "/add",
            method: "POST",
            body: postData,
        }),
    }),
        deletePost: builder.query({
        query: (id) => ({
            url: `/${id}`,
            method: "DELETE",
        }),
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostQuery } =
    postsApi;

export const {
    endpoints: { getPosts, addPost, deletePost },
} = postsApi;
