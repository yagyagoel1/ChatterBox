import { Grid } from "@mui/material"
import Title from "../shared/Title"
import Header from "./Header"


const AppLayout = () => (WrappedComponent: any) => {
    return (props: any) => {
        return (
            <>
                <Title ></Title>
                <Header></Header>
                <Grid container height={"calc(100vh - 4rem"}>
                    <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }}
                        height={"100%"} >First</Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} bgcolor="primary.main"><WrappedComponent {...props} /></Grid>
                    <Grid item xs={4} lg={3} height={"100%"} sx={{
                        display: { xs: "none", md: "block" },
                        padding: "2rem",
                        bgcolor: "rgba(0,0,0,0,85)"
                    }}>third</Grid>

                </Grid>


            </>
        )
    }
}

export default AppLayout