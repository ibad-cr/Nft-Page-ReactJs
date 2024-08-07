import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShopSingleCard from '../components/ShopComponents/ShopSingleCard';
import ShopLeftSide from '../components/ShopComponents/ShopLeftSIde';

const Shop = () => {
    const shop = useSelector(state => state.shop);

    const [filterShop, setFilterShop] = useState([]);

    useEffect(() => {
        setFilterShop(shop);
    }, [shop]);


    useEffect(() => {
        console.log('FilterShop data:', filterShop);
    }, [filterShop]);

    return (
        <div className="shop-container container mt-5">
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-3' style={{ width: '50% !important' }}>
                    <ShopLeftSide />
                </div>
                <div className='col-12 col-sm-12 col-md-9'>
                    <div>
                        <div className='row row-cols-2 row-cols-md-3 g-4'>
                            {filterShop.map((item, index) => (
                                <div className='' key={index}>
                                    <ShopSingleCard
                                        image={item.image}
                                        title={item.title}
                                        text={item.text}
                                        category={item.category}
                                        price={item.price}
                                        quantity={item.quantity}
                                        alldata={item}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
