import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/',
    }),
    endpoints:(builder)=>({
        getAllpost: builder.query({
            query:()=>({
                url:'api/blog/',
                method:'GET'
            })
        }),
        getPostByID: builder.query({
            query:(id)=>({
                url:`api/blog/${id}`,
                method:'GET'
            })
        }),
        getCommentByID: builder.query({
            query:(id)=>({
                url:`api/blog/comment/${id}`,
                method:'GET'
            })
        }),
    })
})

// creating hook
export const { useGetAllpostQuery, useGetPostByIDQuery, useGetCommentByIDQuery } = postApi 
