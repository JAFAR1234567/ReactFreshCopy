import React, { useEffect, useState } from 'react'
import { Singleproducts } from '../Singleproducts/Singleproducts';
import './Allproducts.css'
export const Allproducts = ({addFunc}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            {
                products.map((pd) => <Singleproducts pd={pd} key={pd.id} addFunc = {addFunc}></Singleproducts>)
            }
        </div>
    )
}
