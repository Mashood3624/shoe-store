import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {shoe} from '../Context/Shoe';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';



export const Products = () => {
console.log(shoe);
    return (
        <>
            <Outlet />
            <div >
            <Grid container spacing={6}  >
                {Object.entries(shoe).map(([slug, { name, img }]) => (
                     
                     <Grid item xs={3}>
                         <Link className="product-link" to={`/Products/${slug}`}>
                          <Card className="cardcontent">
                                <CardActionArea>
                                    
                                    <CardContent>
                                        <h2>{name}</h2>
                                        <img className="product-img" src={img} alt={name} />
                                    </CardContent>
                                    
                                </CardActionArea>
                            </Card>
                            </Link>
                        </Grid>                  
                ))}
            </Grid>
            </div>
        </>
    )
}

export default Products;