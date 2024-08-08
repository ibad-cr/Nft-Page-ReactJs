import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ShopSingleCard from '../components/ShopComponents/ShopSingleCard';
import { RxCaretSort } from 'react-icons/rx';

const Shop = () => {
    const shop = useSelector(state => state.shop);

    const [filterShop, setFilterShop] = useState([]);

    useEffect(() => {
        setFilterShop(shop);
    }, [shop]);


    // ===========================Drop-Down-Menu=========================================

    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const dropdownRefs = useRef([]);

    const toggleDropdown = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const handleClickOutside = (event) => {
        if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
            setOpenDropdownIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // ==========================Filter-Buttons============================================
    const filterData = (cat) => {
        if (cat === 'All') {
            setFilterShop(shop);
        } else if (cat === 'Free') {
            const result = shop.filter(item => item.price === 0);
            setFilterShop(result);
        } else if (cat === 'Paid') {
            const result = shop.filter(item => item.price > 0);
            setFilterShop(result);
        }
    };


    return (
        <div className="shop-container container mt-5">
            <div>
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div className='dropdown-button-list'>
                        <ul className='all-button-list'>
                            <li className='list-group-item'>
                                <div className="dropdown" ref={el => dropdownRefs.current[0] = el}>
                                    <button className="dropdown-btn" onClick={() => toggleDropdown(0)}>
                                        Price
                                    </button>
                                    <div className={`dropdown-content ${openDropdownIndex === 0 ? 'open' : ''}`}>
                                        <ul className='price-list mt-3'>
                                            <li className='list-group-item'>
                                                <button onClick={() => { setOpenDropdownIndex(null); filterData('All') }}>All</button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button onClick={() => { setOpenDropdownIndex(null); filterData('Free') }}>Free</button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button onClick={() => setOpenDropdownIndex(null)}>Paid</button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button onClick={() => setOpenDropdownIndex(null)}>Discount</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='list-group-item'>
                                <div className="dropdown" ref={el => dropdownRefs.current[1] = el}>
                                    <button className="dropdown-btn" onClick={() => toggleDropdown(1)}>
                                        Color
                                    </button>
                                    <div className={`dropdown-content ${openDropdownIndex === 1 ? 'open' : ''}`}>
                                        <ul className='color-list mt-3'>
                                            <div className='first-part'>
                                                <li className='list-group-item'>
                                                    <button className='red' onClick={() => setOpenDropdownIndex(null)}></button>
                                                </li>
                                                <li className='list-group-item'>
                                                    <button className='green' onClick={() => setOpenDropdownIndex(null)}></button>
                                                </li>
                                                <li className='list-group-item'>
                                                    <button className='yellow' onClick={() => setOpenDropdownIndex(null)}></button>
                                                </li>
                                            </div>
                                            <div className='secont-part'>
                                                <li className='list-group-item'>
                                                    <button className='blue' onClick={() => setOpenDropdownIndex(null)}></button>
                                                </li>
                                                <li className='list-group-item'>
                                                    <button className='purple' onClick={() => setOpenDropdownIndex(null)}></button>
                                                </li>
                                                <li className='list-group-item'>
                                                    <button className='fix-color' onClick={() => setOpenDropdownIndex(null)}></button>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='list-group-item'>
                                <div className="dropdown" ref={el => dropdownRefs.current[2] = el}>
                                    <button className="dropdown-btn" onClick={() => toggleDropdown(2)}>
                                        Brand
                                    </button>
                                    <div className={`dropdown-content ${openDropdownIndex === 2 ? 'open' : ''}`}>
                                        <ul>
                                            <li className='list-group-item'>
                                                <button onClick={() => setOpenDropdownIndex(null)}>Brand A</button>
                                                <button onClick={() => setOpenDropdownIndex(null)}>Brand B</button>
                                                <button onClick={() => setOpenDropdownIndex(null)}>Brand C</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='sort-method' ref={el => dropdownRefs.current[3] = el}>
                        <button className="sort-dropdown-btn" onClick={() => toggleDropdown(3)}>
                            <RxCaretSort />
                        </button>
                        <div className={`sort-dropdown-content ${openDropdownIndex === 3 ? 'open' : ''}`}>
                            <ul className='sort-list mt-3' style={{ padding: '0', margin: '0' }}>
                                <li className='list-group-item'>
                                    <button>Price: low to high</button>
                                    <button>Price: low to high</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className='middle-line'></div> */}

                <div className='row row-cols-2 row-cols-md-4 g-4'>
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
    );
};

export default Shop;
