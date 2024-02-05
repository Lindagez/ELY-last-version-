import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import dash from './P.module.css'
import Nav from '../../pages/Landing/nav';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Form } from "react-bootstrap";
import {
  faSignOut,
  faTimes,
  faHeart,
  faQuestionCircle,
  faBook,
  faCouch,
  faLaptop,
  faTshirt,
  faSearch,
  faChevronLeft,
  faChevronRight,
  faSortAlphaAsc,
  faSort,
  faClock,
  faArrowLeft,
  faArrowRight,
  faUndoAlt,
  faDollarSign,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import Status from "../Status/Status";
import { getToken } from "../../utils/utils";
import Sidenav from "../../pages/Landing/sidenav";

function Dashboard() {



  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterOption, setFilterOption] = useState([]);
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSort, setShowSort] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");
  const [currenPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowFullDescription = () => {
    setShowFullDescription(true);
  };

  const handleCloseFullDescription = () => {
    setShowFullDescription(false);
  };

  const itemsToDisplay = items.slice(
    (currenPage - 1) * itemsPerPage,
    currenPage * itemsPerPage
  );


  function handlePageChange() {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
      <div className={dash.pagination_container}>
        <button
          className={dash.pagination_button}
          class={currenPage === 1 ? 'btn-sm btn-light' : 'btn-sm btn-primary'}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currenPage === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/* <span>
          Page {currenPage} of {totalPages}
        </span> */}
        <div className={dash.page_numbers}>
          {pageNumbers.map((pageNumber) => (
            <button
              class='btn btn-primary'
              key={pageNumber}
              className={dash.pagination_button}
              disabled={pageNumber === currenPage}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          class={currenPage === totalPages ? 'btn-sm btn-light' : 'btn-sm btn-primary'}
          className={dash.pagination_button} onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currenPage === totalPages}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    );
  }


  useEffect(() => {
    // Fetch the current user information
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = response.data;
        // console.log(token)
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchitems = async () => {
      try {

        const token = getToken();
        const url = `http://localhost:5000/api/products/search?sortOption=${sortOption}&sortOrder=${sortOrder}&category=${filterOption}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log('Success')
          console.log(response.data)
          setItems(response.data);

          console.log(token)
        }
        else {
          console.log('Failed')
        }

      } catch (error) {
        console.error("Error fetching items:", error);
        handleError();

      }
    };
    fetchitems();
  }, [sortOption, sortOrder, filterOption, minPrice, maxPrice]);


  const sortingOptions = [
    { label: 'Default', icon: faSort },
    { label: 'A-Z', icon: faSortAlphaAsc },
    { label: 'Highest Price First', icon: faArrowUp },
    { label: 'Lowest Price First', icon: faArrowDown },
    { label: 'Newest First', icon: faClock },
    { label: 'Oldest First', icon: faClock },
  ];



  const handleFilterOptionChange = (event) => {
    if (event.target.value === "Electronics") {
      setFilterOption("Electronics");
    }
    if (event.target.value === "Clothing") {
      setFilterOption("Clothing");
    }
    if (event.target.value === "Furniture") {
      setFilterOption("Furniture");
    }
    if (event.target.value === "Books") {
      setFilterOption("Books");
    }
    if (event.target.value === "Other") {
      setFilterOption("Other");
    }
  };


  const handleSuccess = () => {
    setSuccessMessage('Logged In successfully.');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleError = () => {
    setErrorMessage('Something went wrong. Please try again.');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const handleKeyPress = (event) => {
    if (event.key === '-' || event.key === '+' || event.key === 'e') {
      event.preventDefault();
    }
  };

  const handleSearchChange = async (event) => {
    const { value } = event.target;
    try {
      const token = getToken();
      const response = await axios.get(
        value ?
          `http://localhost:5000/api/products/search?name=${value}`
          : 'http://localhost:5000/api/products',
        {
          headers: {

            Authorization: `Bearer ${token}`,
          },

        });
      if (response.status === 200) {
        setItems(response.data);
      }
      else {
        console.log('Failed')
      }

    } catch (error) {
      console.error("Error fetching items:", error);
      handleError();

    }
  };


  const openSort = () => {
    setShowSort(!showSort);
  };

  const filteredOptions = sortingOptions.filter((option) => option.label !== selectedOption);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    if (option === "Default") {
      setSortOption("");
      setSortOrder("");
    }
    if (option === "A-Z") {
      setSortOption("name");
      setSortOrder("asc");
    }
    if (option === "Highest Price First") {
      setSortOption("unitPrice");
      setSortOrder("desc");
    }
    if (option === "Lowest Price First") {
      setSortOption("unitPrice");
      setSortOrder("asc");
    }
    if (option === "Newest First") {
      setSortOption("dateAdded");
      setSortOrder("desc");
    }
    if (option === "Oldest First") {
      setSortOption("dateAdded");
      setSortOrder("asc");
    }

    setShowSort(false);
  };


  const openProductDetails = (productId) => {
    const product = items.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <>
      {successMessage && <Status message={successMessage} type="success" />}
      {errorMessage && <Status message={errorMessage} type="error" />}
      <Nav />
      <Sidenav />
      <div className={dash.mainContainer}>
        {/* <button className={dash.logout} onClick={handleLogOut}><FontAwesomeIcon icon={faSignOut} /></button> */}
        <h2>Products</h2>
        <p>Showing {items.length} items</p>
        <br />
        <div className={dash.top}>
          <div class="main">
            <div class="input-group">
              <input
                type="text"
                class="form-control-"
                placeholder="Search Items"
                value={data}
                onChange={handleSearchChange}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-secondary"
                  type="button"
                  style={{ backgroundColor: "#f26522", borderColor: "#f26522 " }}
                // onClick={handleSearchChange()}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
          <div className={dash.toggleDropdown}>
            <p> Sort By:
              <span onClick={() => { openSort() }}> <FontAwesomeIcon icon={faSort} style={{ marginLeft: '10px' }} />  {selectedOption}</span>
            </p>
          </div>
        </div>
        <br />
        {showSort && (
          <div className={dash.sortOptions}>
            <div className={dash.inSortOptions}>
              <ul>
                {filteredOptions.map((option) => (
                  <li key={option.label} onClick={(e) => handleOptionSelect(option.label)}>
                    <FontAwesomeIcon icon={option.icon} style={{ marginRight: '10px' }} />
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}
        <br />
        <div className={dash.container}>
          <div className={dash.sidebar}>
            <div className={dash.inSidebar}>
              {/* <div className={dash.dash_input}>
                <input
                  type='search'
                  placeholder='Search'
                  value={data}
                  onChange={handleSearchChange} />
                <br />

              </div> */}
              <button
                className="clear"
                style={{ marginTop: '10px', marginLeft: '10px', backgroundColor: 'white', color: 'black', border: '2px solid #008CBA', borderRadius: '12px', padding: '5px 15px', fontSize: '16px', width: '50px' }}
                onClick={() => {
                  setMinPrice("");
                  setMaxPrice("");
                  setSearch("");
                  setFilterOption("");
                }}>
                <FontAwesomeIcon icon={faUndoAlt} style={{ marginRight: '10px' }} />
              </button>
              <div className={dash.priceRange}>
                <h3>Price Range</h3>
                <div className={dash.dash_input}>
                  <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '10px' }} /><input type="number" placeholder='Min Price' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} onKeyDown={handleKeyPress} min={0} />
                  <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '15px' }} />
                  <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '10px' }} />
                  <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} onKeyDown={handleKeyPress} min={0} />
                </div>
                <div className={dash.cat}>

                  <h3>Category</h3>
                  <input
                    type="radio"
                    name="cat"
                    value="Books"
                    className="form-check-input"
                    id="radio-input"
                    checked={filterOption === "Books"}
                    onChange={handleFilterOptionChange}
                  >
                  </input>
                  <label>
                    Books &nbsp;<FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="cat"
                    className="form-check-input"
                    id="radio-input"
                    value="Clothing"
                    checked={filterOption === "Clothing"}
                    onChange={handleFilterOptionChange}
                  >
                  </input>
                  <label>
                    Cloths &nbsp; <FontAwesomeIcon icon={faTshirt}></FontAwesomeIcon>
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="cat"
                    id="radio-input"
                    className="form-check-input"
                    value="Electronics"
                    checked={filterOption === "Electronics"}
                    onChange={handleFilterOptionChange}
                  >
                  </input>
                  <label>
                    Electronics &nbsp; <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="cat"
                    id="radio-input"
                    className="form-check-input"
                    value="Furniture"
                    checked={filterOption === "Furniture"}
                    onChange={handleFilterOptionChange}
                  >
                  </input>
                  <label>
                    Furnitures &nbsp; <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon>
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="cat"
                    id="radio-input"
                    className="form-check-input"
                    value="Other"
                    checked={filterOption === "Other"}
                    onChange={handleFilterOptionChange}
                  >
                  </input>
                  <label>
                    Other  &nbsp; <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
                  </label>
                  <br />
                </div>
              </div>
              <br />

            </div>
          </div>

          {/* Main content */}
          <div className={dash.content}>
            {items.length === 0 && <p className={dash.noItem}>No items found.</p>}
            {itemsToDisplay.map((item) => (
              <div key={item.id} className={dash.productItem} onClick={() => openProductDetails(item.id)}>
                <div className={dash.itemCardImage}>
                  <img
                    src={`../uploads/img/${item.images[0].filename}`}
                    alt={"Uploaded" + item.images[0].filename}
                  />
                </div>
                <div >
                </div>
                <h2>{item.name}</h2>
                <b>ETB: {item.unitPrice}</b>

                {/* {console.log('added by : ' + item.addedByUsername + ' User: ' + currentUser.__id)} */}

                {currentUser && currentUser.__id === item.addedBy ? (
                  <p>

                    <i className="created-at">Your Post</i>
                  </p>
                ) : (
                  <p>
                    <i className="created-at">Posted By: </i>
                    <i className="created-at">{item.addedByUsername}</i>
                  </p>
                )
                }
              </div>
            ))}

            {selectedProduct && (

              <div className={dash.productDetailsModal}>
                <div className={dash.productDetails}>
                  <button className={dash.closeButton} onClick={closeProductDetails}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <i>{selectedProduct.images.length}</i> &nbsp;
                  {selectedProduct.images.length > 1 ? (
                    <span>Images</span>
                  ) : (
                    <span>Image</span>
                  )}
                  <div className={dash.productImages}>
                    <button
                      class='btn-sm  btn-outline-grey'
                      // className={dash.prev_button}
                      onClick={handlePrevImage}>
                      <FontAwesomeIcon  icon={faChevronLeft} />
                    </button>
                    <img src={`../uploads/img/${selectedProduct.images[currentImageIndex].filename}`} alt={selectedProduct.name} />
                    <button
                      class='btn-sm btn-outline-grey'
                      // className={dash.next_button}
                      onClick={handleNextImage}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                  <p className="description">
                    Description:{" "}
                    {selectedProduct.description.length > 10
                      ? `${selectedProduct.description.slice(0, 10)}...`
                      : selectedProduct.description}{" "}
                    {selectedProduct.description.length < 100 && (
                      <button className="btn btn-link" onClick={handleShowFullDescription}>
                        See More
                      </button>
                    )}
                  </p>
                  <p className="created-at">Category: {selectedProduct.category}</p>
                  {/* <p className="price">ETB: {selectedProduct.unitPrice}</p> */}
                  <p className="created-at">Posted at: {moment(selectedProduct.dateAdded).format("DD/MM/YYYY")}</p>
                  <p className="created-at">Contact: 0{selectedProduct.phone}</p>
                  <p >Location: {selectedProduct.city}</p>
                  {/* <p>Negotiable: {selectedProduct.deliverable}</p> */}

                  {/* {currentUser && currentUser.__id === selectedProduct.addedBy ? (
                    <button className="delete-button" onClick={closeProductDetails}>
                      <FontAwesomeIcon icon={faTimes} /> 
                      <span>Delete</span>
                    </button>
                  ) : (
                    null )
                  } */}

                </div>
              </div>
            )}
          </div>
        </div>
        {handlePageChange()}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
