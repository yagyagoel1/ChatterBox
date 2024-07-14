import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/Validators'

const Login = () => {
    const [isLogin, setIsLogin] = React.useState(true)
    const toggleLogin = () => {
        setIsLogin(login => !login)
    }
    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("", usernameValidator)
    const password = useStrongPassword()
    const avatar = useFileHandler("single")
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://wallpapers.com/images/featured-full/beautiful-anime-scenery-6qzf6y1h7awwli1e.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", // This ensures the background image covers the entire div
                height: "100vh"
            }}>
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
                            }}
                            onSubmit={handleLogin}
                        >
                            <TextField required fullWidth label="Username" margin="normal" variant="outlined"></TextField>
                            <TextField required fullWidth label="password" type="password" margin="normal" variant="outlined"></TextField>
                            <Button sx={{ marginTop: "1rem" }} fullWidth variant="contained" color="primary" type="submit" >
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
                            }}
                            onSubmit={handleSignup}>
                            <Stack position={"relative"} width={"10rem"}
                                margin={"auto"} marginTop={"1rem"}
                                sx={{
                                    width: "10rem",
                                    height: "10rem",
                                    objectFit: "contain",
                                }}>
                                <Avatar sx={{
                                    width: "10rem",
                                    height: "10rem",
                                    objectFit: "contain",
                                }}
                                    src={avatar.preview || undefined} />
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.7)"
                                        }
                                    }}
                                    component="label">
                                    <>
                                        <CameraAltIcon />
                                        <VisuallyHiddenInput type='file' accept="image/*" onChange={avatar.changeHandler} />

                                    </>
                                </IconButton>
                            </Stack>
                            {avatar.error && <Typography color="error" m={"1rem auto"}
                                width={"fit-content"} display={"block"} variant="caption">{avatar.error}</Typography>}

                            <TextField required fullWidth label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler}></TextField>
                            <TextField required fullWidth label="Bio" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler} ></TextField>
                            <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} >

                            </TextField>
                            {
                                username.error && <Typography color="error">{username.error}</Typography>

                            }
                            <TextField required fullWidth label="password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} ></TextField>
                            {
                                password.error && <Typography color="error">{password.error}</Typography>

                            }
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
        </div>
    )
}

export default Login