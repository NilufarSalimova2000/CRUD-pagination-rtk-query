import { createApi} from "@reduxjs/toolkit/query/react";
import { createUrl } from "../../config/create-url";

export const ApiUser = createApi({
    reducerPath: "api_user",
    baseQuery: createUrl(),
    tagTypes: ["getusers"],
    endpoints: (build) => ({
        getUsers: build.query({
            query: (page = 1) => {
                return {
                    url: "/todos",
                    params: {
                        _limit: 4,
                        _page: page
                    }
                }
            },
            transformResponse: (data, res) => {
                let lengthData = res?.response.headers.get("X-Total-count");
                if (lengthData % 4 != 0) {
                    return { data, pageSize: Math.round((Number(lengthData) + 1) / 4) };
                }
                return { data, pageSize: Math.round(Number(lengthData) / 4) };
            },
            providesTags: ["getusers"]
        }),
        addUser: build.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["getusers"]
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["getusers"]
        }),
        editUser: build.mutation({
            query: ({ id, title, description }) => ({
                url: `/todos/${id}`,
                method: "PATCH",
                body: { title, description },
            }),
            invalidatesTags: ["getusers"]
        }),
        userDetailId: build.query({
            query: (id) => ({
                url: `/todos/${id}`, 
            }),
            providesTags: ["getusers"]
        }),
    })
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useEditUserMutation, useUserDetailIdQuery } = ApiUser