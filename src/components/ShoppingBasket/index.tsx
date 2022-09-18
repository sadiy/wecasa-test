import { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    List,
    Typography,
    ListItem,
    ListItemText,
    Button,
    ButtonGroup,
    Stack,
    Collapse,
    IconButton,
    IconButtonProps
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { shoppingBasketSelector } from "../../redux/slices/shoppingBasket";
import { addItem, deleteItem, Item } from "../../redux/slices/shoppingBasket";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.scss';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ShoppingBasket = () => {
    const dispatch = useAppDispatch();
    const { items, totalPrice, totalDuration } = useAppSelector(shoppingBasketSelector);

    const [expanded, setExpanded] = useState<boolean>(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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

    const addToBasket = (item: Item) => {
        dispatch(addItem(item));
    }

    const removeFromBasket = (item: Item) => {
        dispatch(deleteItem(item));
    }

    const renderBasket = () => {
        return items.map((item: Item) => (
            (
                <ListItem key={`shopping--basket__${item.reference}`}>
                    <ButtonGroup size="small" aria-label="small button group"
                        sx={{ margin: "10px" }}>
                        <Button color="secondary" onClick={() => removeFromBasket(item)}>-</Button>
                        <Button disabled>{item.quantity}</Button>
                        <Button color="secondary" onClick={() => addToBasket(item)}>+</Button>
                    </ButtonGroup>
                    <ListItemText primary={item.title} />
                    €{fixPrice(item.price)}
                </ListItem>
            )
        ));
    }

    return (
        <Card className="shopping--basket">
            <Stack direction="row">
                <CardHeader title="Panier" />
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Stack>
            <Divider />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <List
                        sx={{ width: '350px', maxHeight: "250px", overflow: 'auto', bgcolor: 'background.paper' }}
                    >
                        {renderBasket()}
                    </List>
                    <Stack direction="row" spacing={2}>
                        <Typography>
                            €{fixPrice(totalPrice)}
                        </Typography>
                        <Typography>
                            {timeConvert(totalDuration)}
                        </Typography>
                    </Stack>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default ShoppingBasket;