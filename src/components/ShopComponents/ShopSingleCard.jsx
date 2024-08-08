import React from 'react'

const ShopSingleCard = ({ id, image, title, text, category, price, quantity, alldata }) => {
    return (
        <div className='shop-single-card'>
            <div class="col">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..."  />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">This is a longer card with supporting text.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSingleCard