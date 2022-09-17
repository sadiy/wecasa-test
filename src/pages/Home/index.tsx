import { Container, Grid } from "@mui/material";
import Category from "../../components/Category";
import './index.scss';

const Home = () => {
    return (
        <Container id="home__container">
            <Grid container spacing={2}>
                <Grid item sm={3} xs={12}>
                    <Category />
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Category />
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Category />
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Category />
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Category />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;