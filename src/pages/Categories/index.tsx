import { Grid } from "@mui/material";
import CategoryCard from "../../components/Category";
import { useAppSelector } from "../../redux/hooks";
import { universeSelector } from "../../redux/slices/universe";
import { Category } from "../../types";
import './index.scss';

const Categories = () => {
    const { error, data } = useAppSelector(universeSelector);

    const renderCategories = () => {
        if (error) return (<strong>Categories not available.. {error}</strong>)

        return data ? data.categories.map((category: Category) => (
            (
                <Grid key={`${category.reference}__card`} item sm={4} xs={12}>
                    <CategoryCard mainTitle={data.title} {...category} />
                </Grid>
            )
        )) : (<strong>Categories not available.. {error}</strong>);
    }

    return (
        <Grid container spacing={2}>
            {renderCategories()}
        </Grid>
    )
}

export default Categories;