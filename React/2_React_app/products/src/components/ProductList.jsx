import React from 'react'

function ProductList(props) {
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
                            </div>
                        </>
                    ))
                }</>}
        </>
    )
}

export default ProductList