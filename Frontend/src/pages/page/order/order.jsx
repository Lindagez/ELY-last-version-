import React, { useEffect, useState } from 'react'
import './order.css'
import Nav from '../../Landing/nav'
import Sidenav from '../../Landing/sidenav';
import useAuth from '../../../components/hooks/useAuth';
import Status from '../../../components/Status/Status';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import CustomSelect from './CustomSelect';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = () => {
  // useEffect(() => {

  //   $("#wizard").steps({
  //     headerTag: "h4",
  //     bodyTag: "section",
  //     transitionEffect: "fade",
  //     enableAllSteps: true,
  //     transitionEffectSpeed: 500,
  //     onStepChanging: function (event, currentIndex, newIndex) {

  //       return true;
  //     },
  //     labels: {
  //       // finish: "Home",
  //       next: "Next",
  //       previous: "Previous"
  //     }
  //   });


  //   $('.wizard > .steps li a').click(function () {
  //     $(this).parent().addClass('checked');
  //     $(this).parent().prevAll().addClass('checked');
  //     $(this).parent().nextAll().removeClass('checked');
  //   });


  //   $('.forward').click(function () {
  //     $("#wizard").steps('next');
  //   })
  //   $('.backward').click(function () {
  //     $("#wizard").steps('previous');
  //   })


  //   $('.checkbox-circle label').click(function () {
  //     $('.checkbox-circle label').removeClass('active');
  //     $(this).addClass('active');
  //   })
  // }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const [stepStatuses, setStepStatuses] = useState([false, false, false]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [file, setfile] = useState([]);
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deliverable, setDeliverable] = useState("false");
  const [negotiable, setNegotiable] = useState("false");
  const [validated, setValidated] = useState(false);

  const authenticated = useAuth();


  useEffect(() => {
    if (name && price && phoneNo && city && description && file && category) {
      setValidated(true);
    }
  }, [name, price, phoneNo, city, description, file, category]);

  const handleDeliverableChange = (event) => {
    setDeliverable(event.target.value);
  };

  const handleNegotiableChange = (event) => {
    setNegotiable(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setfile(filesArray);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleKeyPress = (event) => {
    if (event.key === '-' || event.key === '+' || event.key === 'e') {
      event.preventDefault();
    }
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const postData = new FormData();
    postData.append("name", name);
    postData.append("unitPrice", price);
    postData.append("dateAdded", new Date().toLocaleDateString());
    postData.append("description", description);
    for (let i = 0; i < file.length; i++) {
      postData.append("images", file[i]);
    }
    postData.append("category", category);
    postData.append("delivery", deliverable);
    postData.append("negotiable", negotiable);
    postData.append("phone", phoneNo);
    postData.append("city", city);


    const token = localStorage.getItem('Token');

    try {
      await axios.post("http://localhost:5000/api/products/add", postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setName("");
      setPrice("");
      setDescription("");
      setfile("");
      setCategory("");
      handleSuccess();

      window.location = "/dashboard";
    } catch (error) {

      console.error("Error posting item:", error.message);
      handleError();
    }

    setValidated(true);
  };

  const handleSuccess = () => {
    setSuccessMessage('Item posted successfully.');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleError = (text = 'Something went wrong. Please try again.') => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const handleNextClick = () => {


    const updatedStepStatuses = [...stepStatuses];
    updatedStepStatuses[currentStep] = true;
    setStepStatuses(updatedStepStatuses);

    setCurrentStep(currentStep + 1);



  };

  const handlePreviousClick = () => {
    const updatedStepStatuses = [...stepStatuses];
    updatedStepStatuses[currentStep] = false;
    setStepStatuses(updatedStepStatuses);

    setCurrentStep(currentStep - 1);
  };

  const handleStepClick = (stepIndex) => {
    // const updatedStepStatuses = [...stepStatuses];
    // updatedStepStatuses[stepIndex] = true;
    setCurrentStep(stepIndex);
  };



  return (
    <>
      {successMessage && <Status message={successMessage} type="success" />}
      {errorMessage && <Status message={errorMessage} type="error" />}
      <Nav />
      <Sidenav />
      <div>
        <div class="wrapper ">
          <Form noValidate validated={validated} id="order-form" onSubmit={handleSubmit}>
            {/* <div className="ordershadow" id="wizard"> */}
            <Form.Group className="ordershadow" id="wizard" controlId="formName">
              <h3>Post Item</h3>
              <ul className="steps">
                {["", "", "", ""].map((step, index) => (
                  <li key={index} className={`${stepStatuses[index] ? "completed" : ""
                    } ${currentStep === index ? "checked" : ""}`}>
                    <a className='' onClick={() => handleStepClick(index)}>{step}</a>
                  </li>
                ))}
              </ul>
              <h4></h4>
              {currentStep === 0 && (
                <section>
                  {validated && (
                    <p className="error-message">Please fill in all required fields.</p>
                  )}
                  <span class="required-indicator">*</span>
                  <div class="form-row">
                    <input
                      required
                      type="text"
                      class="form-control-lg"
                      placeholder="Item Name"
                      value={name}
                      onChange={handleNameChange} />
                  </div>
                  <span class="required-indicator">*</span>
                  <div class="form-row">
                    <input
                      required
                      type="number"
                      class="form-control-lg"
                      value={price}
                      min={1}
                      onKeyDown={handleKeyPress}
                      onChange={handlePriceChange}
                      placeholder="price" />
                  </div>
                  <span class="required-indicator">*</span>
                  <div class="form-row">
                    <input required
                      type="file"
                      class="form-control-"
                      onChange={handleFileChange}
                      multiple={true}
                      placeholder="Add Photo"
                    />
                  </div>
                  <button className='btn btn-primary' onClick={handleNextClick}><FontAwesomeIcon   icon={faArrowRight} /></button>
                </section>
              )}
              <h4></h4>
              {currentStep === 1 && (
                <section>
                  {validated && (
                    <p className="error-message">Please fill in all required fields.</p>
                  )}
                  <span class="required-indicator">*</span>
                  <div class="form-row">
                    <input
                      required
                      type="tel"
                      value={phoneNo}
                      class="form-control-lg"
                      onChange={handlePhoneNoChange}
                      placeholder="phone number" />
                  </div>
                  <span class="required-indicator">*</span>
                  <div class="form-row">
                    <select class="form-control-lg" required value={city} onChange={handleCityChange}>
                      <option value="" disabled selected>City</option>
                      <option value="Addis Ababa">Addis Ababa</option>
                      <option value="Adama">Adama</option>
                      <option value="Assosa">Assosa</option>
                      <option value="Bahir Dar">Bahir Dar</option>
                      <option value="Dire Dawa">Dire Dawa</option>
                      <option value="Gondar">Gondar</option>
                      <option value="Hawassa">Hawassa</option>
                      <option value="Jijiga">Jijiga</option>
                      <option value="Mekelle">Mekelle</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="deliverable" className="font-weight-bold">
                      Deliverable?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="deliverable"
                        value="true"
                        checked={deliverable === "true"}
                        id="yes-radio-input"
                        onChange={handleDeliverableChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="yes-radio-input">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="deliverable"
                        value="false"
                        checked={deliverable === "false"}
                        id="no-radio-input"
                        onChange={handleDeliverableChange}
                      />
                      <label className="form-check-label" htmlFor="no-radio-input">
                        No
                      </label>
                    </div>
                  </div>
                  {/* <div class="form-row">
                    <input
                      type="text"
                      class="form-control-lg"
                      placeholder="subcity" />
                  </div> */}
                  <button className='btn btn-light' onClick={handlePreviousClick}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                  <button className='btn btn-primary' onClick={handleNextClick}><FontAwesomeIcon icon={faArrowRight} /></button>
                </section>

              )}
              <h4></h4>
              {currentStep === 2 && (
                <section>
                  {validated && (
                    <p className="error-message">Please fill in all required fields.</p>
                  )}
                  <div class='form-control-l'>
                    <span class="required-indicator">*</span>
                    <CustomSelect
                      category={category}
                      handleCategoryChange={handleCategoryChange}
                    />

                  </div>
                  <br />
                  <br />
                  <div class="form-row" style={{ marginBottom: "18px" }}>
                    <span class="required-indicator">*</span>
                    <textarea
                      class="form-control-lg"
                      placeholder="Discription"
                      value={description}
                      onChange={handleDescriptionChange}
                      style={{ Height: "108px" }}>
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="negotiable" className="font-weight-bold">
                      Negotiable?
                    </label>
                    <span class="required-indicator">*</span>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="negotiable"
                        value="true"
                        id="yes-radio-input"
                        onChange={handleNegotiableChange}
                        required
                        checked={negotiable === "true"}
                      />
                      <label className="form-check-label" htmlFor="yes-radio-input">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="negotiable"
                        value="false"
                        checked={negotiable === "false"}
                        id="no-radio-input"
                        onChange={handleNegotiableChange}
                      />
                      <label className="form-check-label" htmlFor="no-radio-input">
                        No
                      </label>
                    </div>
                  </div>
                  <button className='btn btn-light' onClick={handlePreviousClick}> <FontAwesomeIcon  icon={faArrowLeft} /> </button>
                  <button className='btn btn-primary' onClick={handleNextClick}><FontAwesomeIcon   icon={faArrowRight} /></button>
                </section>
              )}

              <h4></h4>
              {currentStep === 3 && (
                <>
                  {validated ? (
                    <section className='svg'>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <circle class="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                        <polyline class="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                      </svg>
                      <p>Ready to Post </p>
                      <button type="submit" className='btn-lg btn-success'>Post</button>
                      {/* <button className='btn btn-primary' onClick={handlePreviousClick}>Previous</button> */}
                    </section>
                  ) : (
                    <section>
                      <p className="error-message">Please fill in all required fields.</p>
                      <button className='btn btn-outline-danger' onClick={handlePreviousClick}>Go Back</button>
                    </section>
                  )}

                </>
              )}
              {/* </div> */}
            </Form.Group>
          </Form>
        </div>
      </div>

    </>
  )
}


export default Order;
