import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useUserDetailIdQuery } from "../../redux/service/servise";

export const UserDetail = () => {
    const {id} = useParams();
    const {data} = useUserDetailIdQuery(id)
    return (
        <Box>
            <Typography variant="h3">Foydalanuvchi ma'lumotlari</Typography>
            <Typography variant="h4">{data?.title}</Typography>
            <Typography variant="h5">{data?.description}</Typography>
        </Box>
    )
}