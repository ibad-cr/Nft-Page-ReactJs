import React from 'react'
import HomeProductsSlice from '../components/HomeComponents/HomeProductsSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {

    const shop = useSelector(state => state.shop);

    const [shopItems, setShopItems] = useState([])

    useEffect(() => {
        setShopItems(shop)
    }, [shop])

    return (
        <div >
            <main>
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className='home-elements mt-4 mb-5'>
                            <div className='opening-part mt-4'>
                                <div className="right-side">
                                    <div className="nft-image">
                                        <div className='gradient-purple'></div>
                                        <div className='gradient-white'></div>
                                        <img className='image' src="../src/assets/img/smaurai.png" alt="NFT Art" />
                                    </div>
                                </div>

                                <div className='left-side'>
                                    <p className='nft-information-text'>
                                        NFTs are notable for their uniqueness and indivisibility.
                                        Each NFT has distinct attributes that differentiate it from others,
                                        making them non-fungible. This uniqueness makes NFTs particularly appealing
                                        for collecting and trading. When someone purchases an NFT, they acquire ownership of a
                                        unique digital item. While copies can be made and shared, the blockchain verifies ownership
                                        and maintains a record of the item’s authenticity and ownership history.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-5 mb-5' style={{ padding: '20px' }}>
                                <div className='row row-cols-1 row-cols-md-4 g-4'>
                                    {shopItems.slice(0, 2).map((item, index) => (
                                        <div>
                                            <HomeProductsSlice alldata={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='decoration'>
                                <div className='decoration-div'></div>
                                <div className='decoration-circle-div'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;