import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = React.useState(true)
    const toggleLogin = () => {
        setIsLogin(login => !login)
    }

    return (
        <Container component={"main"} maxWidth={"xs"}
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                {isLogin ? <>
                    <Typography variant='h5'>Login</Typography>
                    <form
                        style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}>
                        <TextField required fullWidth label="Username" margin="normal" variant="outlined"></TextField>
                        <TextField required fullWidth label="password" type="password" margin="normal" variant="outlined"></TextField>
                        <Button sx={{ marginTop: "1rem" }} fullWidth variant="contained" color="primary" type="submit">
                            Login</Button>
                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button
                            sx={{ marginTop: "1rem" }}
                            fullWidth
                            variant="text"

                            onClick={toggleLogin}
                        >Sign up Instead</Button>
                    </form></> : <>
                    <Typography variant='h5'>Signup</Typography>
                    <form
                        style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}>
                        <Stack position={"relative"} width={"10rem"}
                            margin={"auto"} marginTop={"1rem"}
                            sx={{
                                width: "10rem",
                                height: "10rem",
                                objectFit: "contain",
                            }}></Stack>
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                backgroundColor: "white",
                            }}>
                            <CameraAltIcon />
                            <VisuallyHidden>
                                <input
                                    accept="image/*"
                                    id="icon-button-file"
                                    type="file"
                                />
                        </IconButton>
                        <TextField required fullWidth label="Name" margin="normal" variant="outlined"></TextField>
                        <TextField required fullWidth label="Bio" margin="normal" variant="outlined"></TextField>
                        <TextField required fullWidth label="Username" margin="normal" variant="outlined"></TextField>
                        <TextField required fullWidth label="password" type="password" margin="normal" variant="outlined"></TextField>
                        <Button sx={{ marginTop: "1rem" }} fullWidth variant="contained" color="primary" type="submit">
                            Sign up</Button>
                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button
                            sx={{ marginTop: "1rem" }}
                            fullWidth
                            variant="text"

                            onClick={toggleLogin}
                        >Login Instead</Button>
                    </form></>}
            </Paper>
        </Container>
    )
}

export default Login