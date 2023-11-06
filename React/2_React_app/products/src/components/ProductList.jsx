import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slices/cartSlice';
function ProductList(props) {
    const { cartProducts } = useSelector((store) => { return store.cartReducer })
    const dispatch = useDispatch();
    const handleAddProduct = (product) => {
        dispatch(actions.addToCart(product))
    }

    const handleRemoveProduct = (product) => {
        dispatch(actions.removeFromCart(product))
    }
    return (
        <>
            {props.data == null ? <h1>Loading....</h1> : <>
                {
                    props.data.map(({ id, image, title, price }) => (
                        <>
                            <div key={id} className='product'>
                                <img src={image} className="product-image" />
                                <div className='product-meta'>
                                    <p className='product-title'>{title}</p>
                                    <p className='Price'>$ {price}</p>
                                </div>
                                <div className='add_remove_product'>
                                    <AddIcon className="add_remove_border"
                                        onClick={() => handleAddProduct(
                                            { id, image, title, price }
                                        )}></AddIcon>
                                    <p>{<IndQty cartProducts={cartProducts} id={id}></IndQty>}</p>
                                    <RemoveIcon className="add_remove_border" onClick={() => handleRemoveProduct({ id, image, title, price })}></RemoveIcon>
                                </div>
                            </div>
                        </>
                    ))
                }</>}
        </>
    )
}

function IndQty(props) {
    const { cartProducts, id } = props;
    let qty = 0;
    cartProducts.forEach(product => {
        if (product.id == id) {
            qty = product.indQty;
        }
    })
    return (
        <>{qty}</>
    )
}

export default ProductList