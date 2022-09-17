import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Prestation } from "../../types";
import './index.scss';

interface CardProps {
    mainTitle: string;
    reference: string;
    title: string;
    prestations: Prestation[];
}

const CategoryCard = ({mainTitle, reference, title, prestations}: CardProps) => {
    return (
        <Link to={`/${reference}`} className="category--card__link">
            <Box className="category--card">
                <Typography variant="h5" fontFamily={"Londrina Solid"}>
                    {mainTitle}
                    <Box className="category--card__span">
                        {title}
                    </Box>
                </Typography>
            </Box>
        </Link>
    )
}

export default CategoryCard;