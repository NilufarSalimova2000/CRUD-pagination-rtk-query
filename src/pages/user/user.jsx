import React from "react";
import { useGetUsersQuery } from "../../redux/service/servise";
import { Card } from "../../components/card";
import { Form } from "../../components/form";
import { Box, IconButton, Skeleton, Stack } from "@mui/material";

export const User = () => {
    const [page, setPage] = React.useState(1);
    const { data, isLoading, isFetching } = useGetUsersQuery(page);

    const changePage = (newPage) => {
        setPage(newPage);
    };
    return (
        <div>
            <Form />
            {isLoading || isFetching ? (
                <Box>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"42px"} width={"250px"} />
                        <Skeleton height={"32px"} width={"250px"} />
                        <Skeleton height={"37px"} width={"250px"} />
                    </Stack>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"42px"} width={"250px"} />
                        <Skeleton height={"32px"} width={"250px"} />
                        <Skeleton height={"37px"} width={"250px"} />
                    </Stack>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"42px"} width={"250px"} />
                        <Skeleton height={"32px"} width={"250px"} />
                        <Skeleton height={"37px"} width={"250px"} />
                    </Stack>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"42px"} width={"250px"} />
                        <Skeleton height={"32px"} width={"250px"} />
                        <Skeleton height={"37px"} width={"250px"} />
                    </Stack>
                </Box>
            ) : (
                data?.data?.map((item) => <Card key={item.id} {...item} />)
            )}
            {Array(data?.pageSize)
                ?.fill(null)
                ?.map((_, index) => (
                    <IconButton
                        key={index}
                        sx={{
                            bgcolor: `${page == index + 1 ? "blue" : ""}`,
                        }}
                        onClick={() => changePage(index + 1)}
                    >
                        {index + 1}
                    </IconButton>
                ))}
        </div>
    )
}