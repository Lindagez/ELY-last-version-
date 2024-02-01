import React, { useEffect, useState } from 'react';
import './post.css'
import Sidenav from '../Landing/sidenav';
import { Link } from 'react-router-dom';
import Nav from '../Landing/nav';
import axios from 'axios';
import Status from '../../components/Status/Status';
import { Modal, Button, Card } from "react-bootstrap";

export const Product = () => {


  const [items, setItems] = useState([]);
  const [user, setCurrentUser] = useState({});
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState([]);
  const [newPhone, setNewPhone] = useState("");




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

  useEffect(() => {
    // Fetch the current user information
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = response.data;
        setCurrentUser(user);
        setUserId(user.__id);
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);



  useEffect(() => {
    const fetchitems = async () => {
      try {

        const token = localStorage.getItem('Token');
        const url = `http://localhost:5000/api/products/owner/${user.__id}`;
        const response = await axios.get(url, {
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
        console.error("Error fetching items:", error.message);
        handleError();

      }
    };
    fetchitems();
  });


  const handleImage = (event) => {

    const files = event.target.files;
    const filesArray = Array.from(files);
    setNewImage(filesArray);

  }

  const handleEdit = async (item) => {
    setSelectedItem(item);
    setNewName(item.name);
    setNewDescription(item.description);
    setNewPrice(item.unitPrice);
    setNewPhone(item.phone);
    setShowEditModal(true);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("Token");
      const url = `http://localhost:5000/api/products/edit/${selectedItem.id}`;
      const updatedItem = {
        name: newName.toUpperCase(),
        description: newDescription,
        unitPrice: newPrice,
        phone: newPhone,

      };
      const response = await axios.put(url, updatedItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setItems(
          items.map((item) =>
            item._id === selectedItem.id ? { ...item, ...updatedItem } : item
          )
        );
        setShowEditModal(false);
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.error("Error editing item:", error.message);
    }
  };



  const handleDelete = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem("Token");
      const url = `http://localhost:5000/api/products/delete/${selectedItemId}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setItems(items.filter((item) => item._id !== selectedItemId));
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }

    setShowModal(false);
  };


  const handleCancelDelete = () => {
    setShowModal(false);
  };


  return (
    <section style={{ backgroundColor: "#fffffff" }}>
      {successMessage && <Status message={successMessage} type="success" />}
      {errorMessage && <Status message={errorMessage} type="error" />}
      <Nav />
      <br />
      <div class="container  py-5">
        <Sidenav />
        {items.length === 0 && (
          <div className="container text-center">
            <h3>You have not posted an item yet</h3>
          </div>
        )}
        <div className="container mt-4">
          {items.length === 0 ? (
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
              <h3 className="mb-3">No items found</h3>
              <Link to="/sell">
                <Button variant="primary">Post an item</Button>
              </Link>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {items.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card h-100">
                    <Card.Img
                      variant="top"
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  
                      src={`../uploads/img/${item.images[0].filename}`}
                      className="card-img-top img-thumbnail"
                      alt={item.name}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">{item.unitPrice} birr</h4>
                        <div>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Modal show={showModal} onHide={handleCancelDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleCancelDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          dialogClassName='custom-modal'
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                min={1}
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                value={newImage}
                multiple
                onChange={handleImage}
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </section>

  )
}