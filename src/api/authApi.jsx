import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl :"https://contact-app.mmsdev.site/api/v1/" }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
      invalidateTags: ["authApi"],
    }),
    login : builder.mutation({
      query : (user) =>({
        url : "login",
        method : "POST",
        body : user,
      }) ,
      invalidatesTags : ["authApi"]
    })
  }),

});

export const {useRegisterMutation,useLoginMutation} = authApi;
