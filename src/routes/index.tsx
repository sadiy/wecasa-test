import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Container } from "@mui/material";
import Categories from "../pages/Categories";
import Prestations from "../pages/Prestations";

const Router = () => {
    return (
        <BrowserRouter>
            <Container id="home__container">
                <Routes>
                    <Route path="/">
                        <Route path=":categoryId" element={<Prestations />} />
                        <Route index element={<Categories />} />
                    </Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Router;