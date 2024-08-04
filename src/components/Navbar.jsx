import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { LiaUserSolid } from 'react-icons/lia';
import { TfiLayoutMenuSeparated } from 'react-icons/tfi';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(true);
    const [abc, setAbc] = useState(true);

    return (
        <div className='wrapper-div'>
            <header className='mt-5'>
                <nav>
                    <div className='left-side d-flex align-items-center'>
                        <NavLink to="/" style={{background: 'none'}}>
                            <div className='nft-logo'>
                                <img src="../src/assets/img/pngwing.com.png" alt="NFT Logo" />
                            </div>
                        </NavLink>
                        <div className='navbar-elements'>
                            <ul className={sidebar ? 'menu-links' : `menu-links-mobile active`}>
                                <li className='list-group-item active-effect text-center'>
                                    <div className='nft-logo-mobile'>
                                        <img src="../src/assets/img/pngwing.com.png" alt="NFT Logo" />
                                    </div>
                                </li>
                                <li className='list-group-item active-effect'>
                                    <NavLink to="/rewards" className='link'>
                                        Rewards
                                    </NavLink>
                                </li>
                                <li className='list-group-item active-effect'>
                                    <NavLink to="/drops" className='link'>
                                        Drops
                                    </NavLink>
                                </li>
                                <li className='list-group-item active-effect'>
                                    <NavLink to="/explore" className='link'>
                                        Explore
                                    </NavLink>
                                </li>
                                <li className='list-group-item active-effect'>
                                    <NavLink to="/create" className='link'>
                                        Create
                                    </NavLink>
                                </li>
                                <li className='list-group-item search-list'>
                                    <div className='container-input'>
                                        <input type="text" placeholder="Search" name="text" className="input" />
                                    </div>
                                    <div className='button-and-icon'>
                                        <button className='search-button'>
                                            <CiSearch className='search-button-icon' />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='right-side'>
                        <div className='users-elements'>
                            <ul>
                                <li className='list-group-item wishlist-icon'>
                                    <CiHeart className='user-elements-icon' />
                                    <span className='wishlist-counter'>0</span>
                                </li>
                                <li className='list-group-item basket-icon'>
                                    <PiShoppingCartThin className='user-elements-icon' />
                                    <span className='basket-counter'>0</span>
                                </li>
                                <li className='list-group-item'><LiaUserSolid className='user-elements-icon' /></li>
                                <li className='list-group-item burger-menu'>
                                    <button aria-label="Toggle menu" style={{ border: 'none', background: 'none' }} onClick={() => { setSidebar(!sidebar) }}>
                                        <TfiLayoutMenuSeparated className='user-elements-icon' />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
