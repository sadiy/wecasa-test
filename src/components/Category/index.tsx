import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './index.scss';

const Category = () => {
    return (
        <Link to="/" className="category--card__link">
            <Box className="category--card">
                <Typography variant="h5" fontFamily={"Londrina Solid"}>
                    Coiffure
                    <Box className="category--card__span">
                        Femme
                    </Box>
                </Typography>
            </Box>
        </Link>
    )
}

export default Category;