import React from 'react'
// import Sidebar from '..'
import "./page.css"
import { useState } from 'react';
// import Content from '../../../layout/Content/Content';
import Sidenav from '../Landing/sidenav';
import Nav from '../Landing/nav';

const Page = () => {
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsFileUploadOpen(true);
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Upload the file to the server
  };
  return (

    <>
      <Nav />
      <br />
      <section className='backgroundpage'>

        <Sidenav />

        <div className='profilePicture'>
          <div class="row ">
            <div class="col-md-8 mb-4">
              <div class="card mb-4 profile-margin">
                <div class="card-header py-3">

                  <h5 class="mb-0">Update Profile</h5>
                </div>
                {/* <div class="rounded-top text-white d-flex flex-row" style={{ height:"200px"}}> */}
                <div class="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: " 1" }} />
                  <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                    style={{ zIndex: "1" }}>
                    Edit profile
                  </button>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form6Example1" class="form-control" />
                          <label class="form-label" for="form6Example1">First name</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form6Example2" class="form-control" />
                          <label class="form-label" for="form6Example2">Last name</label>
                        </div>
                      </div>
                    </div>


                    <div class="form-outline mb-4">
                      {/* <input type="text" id="form6Example3" class="form-control" /> */}
                      {/* <label class="form-label" for="form6Example3"></label> */}
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="form6Example4" class="form-control" />
                      <label class="form-label" for="form6Example4">Address</label>
                    </div>


                    <div class="form-outline mb-4">
                      <input type="email" id="form6Example5" class="form-control" />
                      <label class="form-label" for="form6Example5">Email</label>
                    </div>


                    <div class="form-outline mb-4">
                      <input type="tel" id="form6Example6" class="form-control" />
                      <label class="form-label" for="form6Example6">Phone</label>
                    </div>







                    <hr class="my-4" />

                    <div className='profile-tex '><br />
                      <button

                        type='submit'
                        className='btn btn-secondary rounded-2 text-white shadow-1 '

                      >
                        update
                      </button>
                      <button

                        type='submit'
                        className='btn btn-secondary rounded-2 text-white shadow-1 '

                      >
                        cancel
                      </button>

                    </div>




                  </form></div></div></div></div></div>



      </section>
    </>
  )
}

export default Page;