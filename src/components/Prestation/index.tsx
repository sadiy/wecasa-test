import { Box } from "@mui/system";
import { Typography, IconButton } from "@mui/material";
import { Prestation } from "../../types";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './index.scss';

const PrestationCard = ({ reference, title, duration, price }: Prestation) => {

    const addToBasket = () => {

    }

    return (
        <Box className="prestation--card">
            <Typography variant="h5" fontFamily={"Londrina Solid"}>
                {title}
            </Typography>
            <IconButton aria-label="addToBasket" color="secondary" onClick={addToBasket}>
                <AddShoppingCartIcon />
            </IconButton>
        </Box>
    )
}

export default PrestationCard;