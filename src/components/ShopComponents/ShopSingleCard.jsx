import React from 'react'
import { GoBookmark } from 'react-icons/go'
import { PiShoppingCartThin } from 'react-icons/pi'

const ShopSingleCard = ({ id, image, title, color, price, quantity, quality, alldata }) => {
    return (
        <div className='shop-single-card'>
            <div class="col">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">This is a longer card with supporting text.</p>

                        <div className='price-and-shopping-buttons'>
                            <div class="product-price">$ {price}</div>
                            <div className='market-buttons'>
                                <button className='add-to-card-button'>
                                    <PiShoppingCartThin style={{ background: 'none', fontSize: '25px'}} />
                                </button>

                                <button className='wishlist-button'>
                                    <GoBookmark style={{ background: 'none', fontSize: '25px'}} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSingleCard