import { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { universeSelector } from "../../redux/slices/universe";
import { Prestation, Category } from "../../types";
import PrestationCard from "../../components/Prestation";
import { useParams } from "react-router-dom";
import './index.scss';

const Prestations = () => {
    const { categoryId } = useParams();
    const { error, data } = useAppSelector(universeSelector);
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

    const renderPrestations = (prestations: Prestation[]) => {
        if (error) return (<strong>Prestations not available.. {error}</strong>)

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