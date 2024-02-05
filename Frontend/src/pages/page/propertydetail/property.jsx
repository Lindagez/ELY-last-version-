import React, { useState, useEffect, state } from 'react';
import { useLocation } from 'react-router-dom';
import './property.css';
// import { getPropertyById, sendForm } from '../../../api/request';
// import { api } from '../../../config';
// import { showError, showLoading, showSuccess } from '../../../components/messages'

export default function PropertyId() {
  const [pricingItem, setPricingItem] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const { pathname } = useLocation();
  const pathList = pathname.split('/');
  const id = pathList[pathList.length - 1];

  const Ely_phone = '090000'



  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    sendForm(formData)
      .then(data => { 
        setError(false);
        setSuccess(false);
        setSending(false);
        if (data !== undefined) {
          const { error, success, message } = data;
          if (error) {
            setTimeout(() => {
              setError(false);
            }, 10000);
            return setError(message);
          }
          if (!success) {
            setTimeout(() => {
              setError(false);
            }, 10000);
            return setError('Something went wrong!')
          }
          if (success) {
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
            });
            setTimeout(() => {
              setSuccess(false);
            }, 10000);
            return setSuccess(message);
          }
        }
      })
  }

//   const handlePhoneCall = (event) => {
//     event.preventDefault();
//     window.open(`tel:${ Ely_phone}`, '_parent'); 
//   }

//   const handleWhatAppCall = (event) => {
//     event.preventDefault();
//     window.open(`whatsapp://send?phone=${ Ely_phone}&text=${formData.message}`, '_blank', 'rel=noopener noreferrer')
//   }

  const PricingPage = () => (
    <div className='container-wrapper'>
      <div className='property-container'>
        <div className='pro-head'>
          <div className='pro-title'>
            <h2>title</h2>
            <h2>ETB 27000birr</h2>
          </div>
          <div className=''>
            <i className='fa-solid  mr-2'></i>
            <h6 className='text-secondary'>
             hgh
            </h6>
          </div>
        </div>
          <div
            id='carouselExampleCaptions'
            className='carousel slide pro-images'
          >
            <div className='carousel-indicators'>
              {/* {pricingItem.images.map((image, index) => ( */}
                <button
                  // key={index}
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  // data-bs-slide-to={}
                  className='active'
                  aria-current='true'
                  // aria-label={`Slide ${index + 1}`}
                ></button>
              {/* ))} */}
            </div>
            <div className='carousel-inner'>
              {/* {pricingItem.images.map((image, index) => ( */}
                <div
                  // key={index}
                //   className={
                // 'carousel-item active' : 'carousel-item'
                //   }
                >
                  <img
                    src={'https://th.bing.com/th/id/R.e446511c64742e02f6216710e75d5391?rik=LqsFLY8fy4TwiQ&pid=ImgRaw&r=0'}
                    className='d-block w-100'
                    alt='...'
                  />
                  
                  <div className='carousel-caption d-none d-md-block'>
                    <h1 className='note note-light text-dark'>subtitle</h1>
                  </div>
                </div>
              {/* ))} */}
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        {/* )} */}

        <div className='pro-other'>
          <div className='pro-scrollable'>
            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Title</h3>
              </div>
              <div className='info-content'>
                <div>
                  <h5 className='fw-semibold'></h5>
                  <p>Property Type</p>
                </div>
                {/* <div>
                  <div className='flex'>
                    <i className='fa-solid fa-bed mr-2'></i>
                    <h5 className='fw-semibold'>jn</h5>
                  </div>
                  <p>Bedroom</p>
                </div> */}
                {/* <div>
                  <div className='flex'>
                    <i className='fa-solid fa-bath mr-2'></i>
                    <h5 className='fw-semibold'>jh</h5>
                  </div>
                  <p>Bathroom</p>
                </div> */}
                {/* <div>
                  <div className='flex'>
                    <i className='fa-solid fa-car mr-2'></i>
                    <h5 className='fw-semibold'>hgb</h5>
                  </div>
                  <p>Garage</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-ruler mr-2'></i>
                    <h5 className='fw-semibold'>7689</h5>
                  </div>
                  <p>Sq meter</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-calendar-days mr-2'></i>
                    <h5 className='fw-semibold'>768</h5>
                  </div>
                  <p>Year Build</p>
                </div>
              </div> */}

            </div></div>

            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Description</h3>
              </div>
              <div className='info-content'>
                <p>ghj</p>
              </div>
            </div>

            {/* <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Details</h3>
              </div>
              <div className='info-content'>
                <div className='row w-100'>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Price</div>
                        </div>
                        <span className=''>ETB 5678</span>
                      </li>

                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bedroom</div>
                        </div>
                        <span className=''>dfghj</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bathroom</div>
                        </div>
                        <span className=''>yghjk</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Garage</div>
                        </div>
                        <span className=''>5678</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Year Build</div>
                        </div>
                        <span className=''>45678</span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Property Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.totalSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Living Room Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.livingroomSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bedroom Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.bedroomSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bathroom Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.bathroomSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Garage Size</div>
                        </div>
                        <span className=''>{pricingItem.garageSize}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Address</h3>
              </div>
              <div className='info-content'>
                <div className='row w-100'>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Address</div>
                        </div>
                        <span className=''>bole</span>
                      </li>
                      {/* <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>City</div>
                        </div>
                        <span className=''>{pricingItem.city}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Sub City</div>
                        </div>
                        <span className=''>{pricingItem.subCity}</span>
                      </li> */}
                    </ul>
                  </div>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      {/* <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>State/Region</div>
                        </div>
                        <span className=''>{pricingItem.state}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Zip/Postal Code</div>
                        </div>
                        <span className=''>{pricingItem.zipCode}</span>
                      </li> */}
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Country</div>
                        </div>
                        <span className=''>ethiopia</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pro-fixed'>
            <div className='pro-form'>
              {/* {showError(error)} */}
              {/* {showSuccess(success)}
              {showLoading(sending)} */}
              <form action='' className='form-group'>
                <h3 className='form-element'> ETB 18000 Negotiable </h3>
               <br/>
                <h5>
               Phone number 0900000 
                </h5>

                <button class="btn btn-outline-primary mt-2 btn-sm" style={{marginRight: "10px"}}type="button">Edit</button>
                    <button class="btn btn-outline-primary btn-sm mt-2" style={{marginRight: "10px"}} type="button">
                 Repost
                    </button>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
               Delete
                    </button>
              
                {/* <button className='btn btn-primary col-12 pt-3 pb-3 mb-2' onClick={handleFormSubmit}>
                  Send Message
                </button> */}
                <div></div>
                <br/>
                <div className='row'>
                  <div className='col-6'>
                    <button className='btn btn-outline-primary w-100' >
                      Call
                    </button>
                  </div>
                  <div className='col-6'>
                    <button className='btn btn-outline-primary w-100'>
                      WhatApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>
    {/* {showLoading(loading)} */}
    { PricingPage()}
  </div>;
}
