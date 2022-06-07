import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/* const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running shoes.',
        price: '$5',
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000"
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple macbook.',
        price: '$5',
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brooks-ghost-14-13966-1629825494.jpg?crop=0.681xw:0.680xh;0.156xw,0.164xh&resize=980:*"
    },
]; */
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>

        </main>
    );
}

export default Products;