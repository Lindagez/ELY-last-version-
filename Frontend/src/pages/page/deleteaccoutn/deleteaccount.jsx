import React from 'react'
import Nav from '../../Landing/nav'
import Sidenav from '../../Landing/sidenav'
import './deleteacount.css'
export const Deleteaccount = () => {
  return (
<>
<Nav />
<Sidenav />
<div class="container deletebody p-0">
    {/* <h1 class="h3 mb-3">Settings</h1> */}
    <div class="row">
      

      
                    
              
                    <div class="card">
                        <div class="card-header">
                            <div class="card-actions float-right">
                                <div class="dropdown show">
                                    <a href="#" data-toggle="dropdown" data-display="static">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-Width="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-more-horizontal align-middle">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <h5 class="card-title mb-0">Delete account</h5>
                        </div>
                        <div class="card-body">
                            <form>
                       <p>
                       Account deactivation means to delete your account:<br/>

You will not be able to log in to your profile anymore and all your account history will be deleted without the possibility to restore 
                       </p>     <div class="form-group col-md-4">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected="">Why do you leave?</option>
                                            <option>I’ve already sold my items.</option>
                                            <option>I haven`t found anything interesting on Jiji.com.et</option>
                                            <option>I have a duplicate account.</option>
                                         
                                            <option>other reason</option>
                                        </select>
                                    </div>
                                    {/* <!-- zButton trigger modal --> */}

<br/><button type="submit" class="btn btn-primary">Delete account permanently</button>
                            </form>

                        </div>
                    </div>

                </div>
              
            </div>
           
 

   
  
</>
  )
}
