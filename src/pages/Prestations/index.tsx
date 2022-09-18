import { useState, useEffect } from "react";
import { Grid, CircularProgress, IconButton } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { universeSelector } from "../../redux/slices/universe";
import { Prestation, Category } from "../../types";
import PrestationCard from "../../components/Prestation";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './index.scss';

const Prestations = () => {
    const navigate = useNavigate();

    const { categoryId } = useParams();
    const { data } = useAppSelector(universeSelector);
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        if (data) {
            const category = data.categories
                .find((category: Category) => category.reference === categoryId);

            if (category) {
                setCategory(category);
            }
        }
    }, [categoryId, data]);

    const handleBack = () => {
        navigate(-1);
    }

    const renderPrestations = (prestations: Prestation[]) => {
        return prestations.map((prestation: Prestation) => (
            <Grid key={`${prestation.reference}__card`} item sm={3} xs={12}>
                <PrestationCard {...prestation} />
            </Grid>
        ));
    }

    return data ?
        (
            category ?
                <>
                    <IconButton aria-label="back" onClick={handleBack}>
                        <ArrowBackIcon />
                    </IconButton>
                    <h1>{data.title} {category.title}</h1>
                    <Grid container spacing={2}>
                        {renderPrestations(category.prestations)}
                    </Grid>
                </>
                : <strong>Category not found</strong>
        )
        : <CircularProgress />
}

export default Prestations;