import React from 'react'

const AppLayout = (WrappedComponent: React.ReactNode) => {
    return (props) => {
        return (
            <div>
                <div>Header</div>
                <WrappedComponent {...props} />
                <div>footer</div>
            </div>
        )
    }

    export default AppLayout