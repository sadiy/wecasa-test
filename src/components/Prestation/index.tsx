import { Box } from "@mui/system";
import { Typography, IconButton, Stack } from "@mui/material";
import { Prestation } from "../../types";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/slices/shoppingBasket";
import './index.scss';

const PrestationCard = ({ reference, title, duration, price }: Prestation) => {
    const dispatch = useAppDispatch();

    const addToBasket = () => {
        dispatch(addItem({ reference, title, duration, price }))
    }

    const fixPrice = (price: number) => {
        return (price / 100).toFixed(2);
    }

    function timeConvert(time: number) {
        const hours = (time / 60);
        const rhours = Math.floor(time / 60);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);

        return `${rhours}h${rminutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}`;
    }

    return (
        <Box className="prestation--card">
            <Typography variant="h6" fontFamily={"Londrina Solid"}>
                {title}
            </Typography>
            <Stack direction="row">
                <Typography color="grey">
                    {fixPrice(price)}€
                </Typography>
                <IconButton aria-label="addToBasket" color="secondary" onClick={addToBasket}>
                    <AddShoppingCartIcon />
                </IconButton>
                <Typography color="grey">
                    {timeConvert(duration)}
                </Typography>
            </Stack>
        </Box>
    )
}

export default PrestationCard;