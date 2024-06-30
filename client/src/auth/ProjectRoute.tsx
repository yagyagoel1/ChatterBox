import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProjectRoute = ({ children, user, redirect = "/login" }: { children: React.ReactNode, user: boolean, redirect: string | undefined }) => {

    if (!user) {
        return <Navigate to={redirect} />
    }
    else {
        return <>{children ? children : <Outlet />}</>;
    }

}

export default ProjectRoute