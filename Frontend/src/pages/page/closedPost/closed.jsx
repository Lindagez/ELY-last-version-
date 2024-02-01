import React from 'react'
import Sidenav from '../../landingNew/sidenav'
import Nav from '../../landingNew/nav'

const Closed = () => {
  return (
    <section style={{backgroundColor: "#fffffff"}}>
    <Nav />
    <br/>
    <div class="container  py-5">
   
<Sidenav />

      <div class="row postmargin justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>T shirts</h5>
                  <div class="d-flex flex-row">
                    <div class="text-danger mb-1 me-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <span></span>
                  </div>
                  <div class="mt-1 mb-0 text-muted small">
                    <span></span>
                    <span class="text-primary"> </span>
                    <span></span>
                    <span class="text-primary">  </span>
                    <span><br /></span>
                  </div>
                  <div class="mb-2 text-muted small">
                
                  </div>
                  <p class="text-truncate mb-4 mb-md-0">
                  description ...
                    
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                    <h4 class="mb-1 me-1">130 birr</h4>
                    <span class="text-danger"><s></s></span>
                  </div>
                  <h6 class="text-success"></h6>
                  <div class="d-flex flex-column mt-4">
                    {/* <button class="btn btn-primary btn-sm" type="button">Edit</button> */}
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
               publish
                    </button>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
               Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    {/* <div class="container py-5">
      <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>Quant trident shirts</h5>
                  <div class="d-flex flex-row">
                    <div class="text-danger mb-1 me-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <span></span>
                  </div>
                  <div class="mt-1 mb-0 text-muted small">
                    <span></span>
                    <span class="text-primary"> </span>
                    <span></span>
                    <span class="text-primary">  </span>
                    <span><br /></span>
                  </div>
                  <div class="mb-2 text-muted small">
                
                  </div>
                  <p class="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum available, but the
                    
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                    <h4 class="mb-1 me-1">130 birr</h4>
                    <span class="text-danger"><s></s></span>
                  </div>
                  <h6 class="text-success"></h6>
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-primary btn-sm" type="button">Edit</button>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                 Repost
                    </button>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
               Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
 </div> */}
  </section>
  )
}

export default Closed