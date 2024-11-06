import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../../redux/service/servise";

export const Form = () => {
    const { handleSubmit, reset, register } = useForm();
    const [userMutationFn] = useAddUserMutation()

    const submit = (data) => {
        console.log(data);
        userMutationFn(data)
            .unwrap()
            .then((res) => {
                console.log(res);
            });
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Stack mb={"30px"} gap={"15px"} width={"250px"}>
                <TextField placeholder="Enter title" {...register("title")} />
                <TextField placeholder="Enter description" {...register("description")} />
                <Button type="submit" variant="contained">Add</Button>
            </Stack>
        </form>
    )
}