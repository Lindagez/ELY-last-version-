import React, { useEffect, useState } from 'react'
// import './slick.css'
import './style.css'
import imgs from '../../assets/images/images/toggle-icon.png';
import Nav from './nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import SideLogin from '../../components/SideLogin/SideLogin';
import Footer from '../../components/Footer/Footer';
import Status from '../../components/Status/Status';
import MainLogin from '../../components/Login/MainLogin';
import MainRegister from '../../components/Register/MainRegister';
import useAuth from '../../components/hooks/useAuth';



const LandingNew = () => {
    const [navWidth, setNavWidth] = useState(0);
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignModal, setShowSignModal] = useState(false);
    const authenticated = useAuth();

    const openNav = () => {
        setNavWidth(250);
    };

    const closeNav = () => {
        setNavWidth(0);
    };


    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const openSignModal = () => {
        setShowSignModal(true);
    }

    const closeSignModal = () => {
        setShowSignModal(false);
    }

    const handleBuy = () => {
        if (authenticated) {
            window.location.href = '/dashboard';
        }
        else {
            handleError();
        }
    }

    const handleSell = () => {
        if (authenticated) {
            window.location.href = '/sell';
        }
        else {
            handleError();
        }
    }

    const handleLogOut = () => {
        const confirm = window.confirm("Are you sure you want to log out?");
        if (confirm) {
            localStorage.removeItem('Token');
            window.location.href = '/';
        }
    };


    const handleSuccess = () => {
        setSuccessMessage('Logged In successfully.');
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const handleError = () => {
        setErrorMessage('You have to Log in');
        setTimeout(() => {
            setErrorMessage('');
        }, 3000);
        openLoginModal();
        // openSignModal();
    };


    const ItemCard = ({ category, name, price, imageUrl }) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card >
                <Card.Img
                    variant="top"
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    src={imageUrl} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "1.3rem" }}>{name}</Card.Title>
                    <Card.Text style={{ fontSize: "1.2rem" }}>ETB: {price}</Card.Text>
                    <Button
                        className="btn btn-sm btn-outline-grey"
                        onClick={handleBuy}
                    >
                        View Details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );


    const it = [
        {
            category: 'Clothes',
            name: 'Vintage Floral Sundress',
            price: 25.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJV4JmSQxnjz0ZD2lq5zz4p2dq4bERYBxtw&usqp=CAU',
        },
       
        {
            category: 'Electronics',
            name: 'DJI Mavic Air 2 Drone',
            price: 799.99,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbs5CgB1gLRfBkMRX0mKAspeJCrSJpQyQkg&usqp=CAU',
        },
        {
            category: 'Furniture',
            name: 'Vintage Wooden Chair',
            price: 300.00,
            imageUrl: 'data:image/jpeg;base64,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',
        },
       
        {
            category: 'Clothes',
            name: 'Designer Leather Jacket',
            price: 120.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xCHsr3aLe9vMmOQqidUDojnuZPBKqtUtVA&usqp=CAU',
        },
        {
            category: 'Furniture',
            name: 'Rustic Wooden Coffee Table',
            price: 120.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQNmEF70O6LqJ6rRxLxNl6sxfWQhYARWy8g&usqp=CAU://via.placeholder.com/150',
        },
       
        {
            category: 'Furniture',
            name: 'Antique Oak Dining Table',
            price: 350.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSceuI7rwH1SILcu-yMnN227tNoi73hz1nVhA&usqp=CAU',
        },
        {
            category: 'Electronics',
            name: 'Sony 65-Inch 4K Smart TV',
            price: 899.99,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LwaZ_6u6QoXzqRD_O-UC_4WgyR5skbLIJQ&usqp=CAU',
        },
        {
            category: 'Electronics',
            name: 'Apple MacBook Pro (2022)',
            price: 1499.99,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZfsLZPrtywXcWQcD6YjM_JXPtVKGVif6ckCxREUgZ9fwYUQMeCc5zsYoIaht4hafCr8&usqp=CAU',
        },
        {
            category: 'Books',
            name: 'To Kill a Mockingbird',
            price: 12.50,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Mb6xfbrEdrz_AdjNfq2rxit9x_65FW9UBg&usqp=CAU',
        },
        {
            category: 'Books',
            name: 'The Great Gatsby',
            price: 10.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCN-WlMxNLrEx-TEkXdGUYD1ZlmBf2MvRa7w&usqp=CAU',
        },
       
        {
            category: 'Electronics',
            name: 'Apple iPhone X',
            price: 350.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTd6xWWnVhSgCnEfW4zvDiWj717RTNNs4Sv-dZtJEH3aO7lrmZKyKaTyV0405AM6X2r4&usqp=CAU',
        },
        {
            category: 'Furniture',
            name: 'Leather Recliner Sofa',
            price: 599.00,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKpe1l9uEBD_UyMYKydRnouTB3fiJFB102g&usqp=CAU://via.placeholder.com/150',
        },

       


    ];


    useEffect(() => {
        const fetchitems = async () => {
            try {

                const token = localStorage.getItem('Token');
                const url = `http://localhost:5000/api/products/`;
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setItems(response.data.slice(0, 3));
                    // console.log(token)
                }
                else {
                    console.log('Failed')
                }

            } catch (error) {
                console.error("Error fetching items:", error.message);
                // handleError();

            }
        };
        fetchitems();
    });


    const getItemsByCategory = (category) => {
        return items.filter((item) => item.category === category);
    };


    return (
        <>
            <div>
                {successMessage && <Status message={successMessage} type="success" />}
                {errorMessage && <Status message={errorMessage} type="error" />}

                <div class="banner_bg_main">
                    {/* <!-- header top section start --> */}
                    <div>
                        <Nav />
                    </div>
                    <div className='side-login'>
                        {<SideLogin />}
                    </div>

                    {authenticated ? (
                        <div class="header_section">
                            <div class="container">
                                <div class="containt_main">
                                    <div id="mySidenav" style={{ width: `${navWidth}px`, height: '300px' }} className="sidenav">
                                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                        {/* <a href="settings">Profile</a> */}
                                        <a href="post"> Your Post</a>
                                        <a href="profile">Profile Update</a>
                                        <a href="ClosedPost">Closed Post</a>
                                        <a>
                                            <button
                                                class='btn btn-yellow'
                                                onClick={handleLogOut} >Sign Out &nbsp; <FontAwesomeIcon icon={faSignOut} /></button></a>
                                    </div>
                                    <span className="toggle_icon" onClick={openNav}><img src={imgs} alt="Toggle Navigation" /></span>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div class="banner_section layout_padding" style={{ marginBottom: '300px' }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h1 class="banner_taital">Resale Realm <br /> Discover a New Way to Buy and Sell</h1>
                                    <br />
                                    <br />
                                    <Container>
                                        <p>
                                            <button onClick={handleBuy} className="btn btn-primary my-5">
                                                Browse Listings
                                            </button>
                                            <button onClick={handleSell} className="btn btn-success my-5">
                                                Sell Your Items
                                            </button>
                                        </p>
                                    </Container>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                {/* <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h3 className="mb-3">Electronics</h3>
                            <div className="row">
                                {getItemsByCategory("Electronics").map((item) => (
                                    <div className="col-md-8 mb-4 " key={item.id}>
                                        <Card className="h-100">
                                            <Card.Img
                                                variant="top"
                                                src={`../uploads/img/${item.images[0].filename}`}
                                            />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>ETB: {item.unitPrice}</Card.Text>
                                                <Link to={'/dashboard'}>
                                                    <Button variant="primary">View Details</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h3 className="mb-3">Cloth</h3>
                            <div className="row">
                                {getItemsByCategory("Electronics").map((item) => (
                                    <div className="col-md-8 mb-4" key={item.id}>
                                        <Card className="h-100">
                                            <Card.Img
                                                variant="top"
                                                src={`../uploads/img/${item.images[0].filename}`}
                                            />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>ETB: {item.unitPrice}</Card.Text>
                                                <Link to={'/dashboard'}>
                                                    <Button variant="primary">View Details</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h3 className="mb-3">Furniture</h3>
                            <div className="row">
                                {getItemsByCategory("Furniture").map((item) => (
                                    <div className="col-md-8 mb-4" key={item.id}>
                                        <Card className="h-100">
                                            <Card.Img
                                                variant="top"
                                                src={`../uploads/img/${item.images[0].filename}`}
                                            />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>ETB: {item.unitPrice}</Card.Text>
                                                <Link to={'/dashboard'}>
                                                    <Button variant="primary">View Details</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>                 */}










                <div className="container">
                    <div className="row">
                        {it.map((item, index) => (
                            <ItemCard
                                key={index}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                            />
                        ))}
                    </div>
                </div>
                {<Footer />}
            </div>

            {showLoginModal && (
                <div className="log-modal">
                    <div className="log-in">
                        <button className="close-button" onClick={closeLoginModal}>
                            Close
                        </button>

                        <MainLogin />

                    </div>
                </div>
            )}


            {showSignModal && (
                <div className="log-modal">
                    <div className="log-in">
                        <button className="close-button" onClick={closeSignModal}>
                            Close
                        </button>
                        <MainRegister />
                    </div>
                </div>
            )}


        </>


    )
}

export default LandingNew