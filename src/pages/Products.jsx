import React from 'react';
import {Filters, PaginationContainer, ProductsContainer} from "../components/index.js";
import {customFetch} from "../utils/index.jsx";

export const loader = async ({request}) => {

    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

    const response = await customFetch('/products', {params})
    const products = response.data.data
    const meta = response.data.meta
    return {products, meta, params};
}

const Products = () => {
    return (
        <>
            <Filters/>
            <ProductsContainer/>
            <PaginationContainer/>
        </>
    );
};

export default Products;