import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDeleteUserMutation, useEditUserMutation } from "../../redux/service/servise";
import { Link } from "react-router-dom";

export const Card = ({ id, title, description }) => {
    const [deleteUser] = useDeleteUserMutation();
    const [editUser] = useEditUserMutation();

    const [open, setOpen] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState(title);
    const [newDescription, setNewDescription] = React.useState(description);

    const handleDelete = async () => {
        try {
            await deleteUser(id).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = async () => {
        try {
            await editUser({ id, title: newTitle, description: newDescription }).unwrap();
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box mb={"20px"} width={"250px"}>
            <Link to={`/user-detail/${id}`} style={{textDecoration: "none"}}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h5">{description}</Typography>
            </Link>
            <Stack direction={"row"} gap={"15px"}>
                <Button onClick={handleDelete} variant="contained">Delete</Button>
                <Button onClick={() => setOpen(true)} variant="contained">Edit</Button>
            </Stack>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    p={4}
                    bgcolor="background.paper"
                    borderRadius={2}
                    width={"300px"}
                    mx="auto"
                    mt="15vh"
                >
                    <Typography variant="h6" mb={2}>Edit Task</Typography>
                    <Stack gap={2}>
                        <TextField
                            label="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <TextField
                            label="Description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleEdit}>Save Changes</Button>
                    </Stack>
                </Box>
            </Modal>

        </Box>
    )
}