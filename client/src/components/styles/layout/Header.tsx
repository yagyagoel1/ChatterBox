import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { orange } from '../../../constants/color'
import { Menu as MenuIcon, Logout as LogoutIcon, Group as GroupIcon, Add as AddIcon, Search as SearchIcon, Notifications } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isNotification, setIsNotification] = useState(false)

    const handleMobile = () => {
        setIsMobile(isMobile => !isMobile)
    }
    const openSearchDilogue = () => {
        setIsSearch(isSearch => !isSearch)
    }
    const openNewGroup = () => {
        setIsNewGroup(isNewGroup => !isNewGroup)
    }
    const navigateToGroup = () => {
        navigate("/groups")
    }
    const logoutHandler = () => {
        console.log("Logout")
    }
    const openNotification = () => {
        setIsNotification(isNotification => !isNotification)
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position='static' sx={{
                    bgcolor: orange,
                    height: "4rem",
                }}>


                    <Toolbar>
                        <Typography
                            variant='h6' sx={{
                                display: { xs: 'none', sm: 'block' },
                            }}>Chattu</Typography>
                        <Box sx={{
                            display: { xs: "block", sm: "none" }
                        }}><IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon></MenuIcon></IconButton></Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box><IconBtn icon={<SearchIcon></SearchIcon>} onClick={openSearchDilogue} title="Search"></IconBtn>
                            <IconBtn icon={<AddIcon></AddIcon>} onClick={openNewGroup} title="New Group"></IconBtn>
                            <IconBtn icon={<GroupIcon></GroupIcon>} onClick={navigateToGroup} title="Groups"></IconBtn>
                            <IconBtn icon={<Notifications></Notifications>} onClick={openNotification} title="Notification"></IconBtn>
                            <IconBtn icon={<LogoutIcon></LogoutIcon>} onClick={() => { logoutHandler }} title="Logout"></IconBtn>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

const IconBtn = ({ icon, onClick, title }: { icon: any, onClick: () => void, title: string }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
export default Header