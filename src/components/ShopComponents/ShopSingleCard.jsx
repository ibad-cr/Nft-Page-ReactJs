import React from 'react'

const ShopSingleCard = ({ id, image, title, text, category, price, quantity, alldata }) => {
    return (
        <div className=''>
            <div class="col">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..." style={{width: '100%', height: '300px' , objectFit: 'cover'}} />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSingleCard