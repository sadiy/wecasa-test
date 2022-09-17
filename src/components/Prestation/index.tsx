import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Prestation } from "../../types";
import './index.scss';

const PrestationCard = ({reference, title, duration, price}: Prestation) => {
    return (
        <Link to={`/${reference}`} className="category--card__link">
            <Box className="prestation--card">
                <Typography variant="h5" fontFamily={"Londrina Solid"}>
                    {title}
                </Typography>
            </Box>
        </Link>
    )
}

export default PrestationCard;