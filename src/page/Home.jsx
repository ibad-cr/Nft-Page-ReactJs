import React from 'react'
import HomeProductsSlice from '../components/HomeComponents/HomeProductsSlice';

const Home = () => {
    return (
        <div >
            <main>
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className='home-elements mt-4'>
                            <div className='opening-part'>
                                <div className='left-side'>
                                    <p className='nft-information-text'>
                                        NFTs stand out due to their distinctiveness and indivisibility.
                                        Each token has unique information or attributes that make it different from any other NFT,
                                        which is why they are referred to as non-fungible. This uniqueness makes NFTs particularly
                                        attractive for collecting and trading. When someone buys an NFT, they gain ownership of a
                                        unique digital item, even if copies of the item can be made and shared. The blockchain records
                                        the ownership and ensures that the specific digital item is associated with the buyer, verifying
                                        its authenticity and ownership history.
                                    </p>
                                </div>
                                <div className="right-side">
                                    <div className="nft-image">
                                        <img className='image' src="../src/assets/img/NFT-Art-PNG-removebg.png" alt="NFT Art" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5' style={{padding: '20px'}}>
                                <HomeProductsSlice />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;