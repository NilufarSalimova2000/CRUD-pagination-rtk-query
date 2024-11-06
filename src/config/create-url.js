import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createUrl = () => {
    return fetchBaseQuery({
        baseUrl: "http://localhost:3600",
        headers: {Autorization: "Barer token"}
    })
}