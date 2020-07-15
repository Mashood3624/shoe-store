import React from 'react';
import {useParams} from 'react-router-dom';
import {shoe} from '../Context/Shoe';
import Grid from '@material-ui/core/Grid';

export const ProductDetail = () => {
    const {slug} = useParams();
    const x = shoe[slug];
    console.log(x.img1);
    return (
        <div className="product-detail">
            <h1>{x.name}</h1>
            <Grid container spacing={2}  >   
                <Grid item xs={6}> <img className="productdetail-img" src={x.img} alt={x.name} /></Grid>
                <Grid item xs={6}> <img className="productdetail-img" src={x.img1} alt={x.name} /></Grid>
                <Grid item xs={6}> <img className="productdetail-img" src={x.img2} alt={x.name} /></Grid>
                <Grid item xs={6}> <img className="productdetail-img" src={x.img3} alt={x.name} /></Grid>
            </Grid>
        </div>
    )
}

export default ProductDetail;