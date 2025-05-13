import React, { useEffect } from 'react'
import Footer from '../Footer'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'

const EcommerceProductDetails = () => {
      useEffect(() => {
            feather.replace();
          }, []);
  return (
    <>
    <Sidebar/>
    <Header/>
    {/* <!-- [ Main Content ] start --> */}
  <div class="pc-container">
    <div class="pc-content">
      {/* <!-- [ breadcrumb ] start --> */}
      <div class="page-header">
        <div class="page-block">
          <div class="row align-items-center">
            <div class="col-md-12">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="javascript: void(0)">E-commerce</a></li>
                <li class="breadcrumb-item" aria-current="page">Products</li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- [ breadcrumb ] end --> */}

      {/* <!-- [ Main Content ] start --> */}
      <div class="row">
        {/* <!-- [ sample-page ] start --> */}
        <div class="col-sm-12">  
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="sticky-md-top product-sticky">
                    <div id="carouselExampleCaptions" class="carousel slide ecomm-prod-slider"
                      data-bs-ride="carousel">
                      <div class="carousel-inner bg-light rounded">
                        <div class="float-end p-3">
                          <div class="form-check prod-likes">
                            <input type="checkbox" class="form-check-input"/>
                            <i data-feather="heart" class="prod-likes-icon"></i>
                          </div>
                        </div>
                        <div class="carousel-item active">
                          <img src="../src/assets/images/application/prod-img-1.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-2.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-3.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-4.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-5.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-6.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-7.png" class="d-block"
                            alt="Product images"/>
                        </div>
                        <div class="carousel-item">
                          <img src="../src/assets/images/application/prod-img-8.png" class="d-block"
                            alt="Product images"/>
                        </div>
                      </div>
                      <ol class="carousel-indicators position-relative product-carousel-indicators my-sm-3 mx-0">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                          class="w-25 h-auto active">
                          <img src="../src/assets/images/application/prod-img-1.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-2.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-3.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-4.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-5.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-6.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-7.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" class="w-25 h-auto">
                          <img src="../src/assets/images/application/prod-img-8.png" class="d-block wid-50 rounded"
                            alt="Product images"/>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="star f-18 mb-3">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="far fa-star text-muted"></i>
                    <span class="text-sm text-muted">(350+)</span>
                  </div>
                  <h3 class="my-3">Cornelia Porter <span
                      class="badge bg-light-primary rounded-pill f-14 px-2">New</span></h3>
                  <span class="badge bg-light-success f-14">In stock</span>
                  <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation.</p>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Colors <span
                        class="text-danger">*</span></label>
                    <div class="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                      <div class="form-check form-check-inline color-checkbox mb-0">
                        <input class="form-check-input" type="radio" name="product_color" checked/>
                        <i class="fas fa-circle text-primary"></i>
                      </div>
                      <div class="form-check form-check-inline color-checkbox mb-0">
                        <input class="form-check-input" type="radio" name="product_color"/>
                        <i class="fas fa-circle text-secondary"></i>
                      </div>
                      <div class="form-check form-check-inline color-checkbox mb-0">
                        <input class="form-check-input" type="radio" name="product_color"/>
                        <i class="fas fa-circle text-danger"></i>
                      </div>
                      <div class="form-check form-check-inline color-checkbox mb-0">
                        <input class="form-check-input" type="radio" name="product_color"/>
                        <i class="fas fa-circle text-dark"></i>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Quantity <span
                        class="text-danger">*</span></label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="btn-group btn-group-sm mb-2 border" role="group">
                        <button type="button" id="decrease" onclick="decreaseValue('number')"
                          class="btn btn-link-dark"><i class="ti ti-minus"></i></button>
                        <input class="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                          type="text" id="number" value="0"/>
                        <button type="button" id="increase" onclick="increaseValue('number')"
                          class="btn btn-link-dark"><i class="ti ti-plus"></i></button>
                      </div>
                    </div>
                  </div>
                  <h2 class="mb-4"><b>$275</b><span
                      class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="d-grid">
                        <button type="button" class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-grid">
                        <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="card">
                <div class="card-header pb-0">
                  <ul class="nav nav-tabs profile-tabs mb-0" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="ecomtab-tab-1" data-bs-toggle="tab" href="#ecomtab-1"
                        role="tab" aria-controls="ecomtab-1" aria-selected="true">Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="ecomtab-tab-2" data-bs-toggle="tab" href="#ecomtab-2" role="tab"
                        aria-controls="ecomtab-2" aria-selected="true">Specifications
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="ecomtab-tab-3" data-bs-toggle="tab" href="#ecomtab-3" role="tab"
                        aria-controls="ecomtab-3" aria-selected="true">Overview
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="ecomtab-tab-4" data-bs-toggle="tab" href="#ecomtab-4" role="tab"
                        aria-controls="ecomtab-4" aria-selected="true">Reviews<span
                          class="badge bg-light-secondary rounded-pill px-2 ms-2">275</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane show active" id="ecomtab-1" role="tabpanel"
                      aria-labelledby="ecomtab-tab-1">
                      <div class="table-responsive">
                        <table class="table table-borderless">
                          <tbody>
                            <tr>
                              <td class="text-muted text-sm py-1">Band :</td>
                              <td class="py-1">Smart Band</td>
                            </tr>
                            <tr>
                              <td class="text-muted text-sm py-1">Compatible Devices :</td>
                              <td class="py-1">Smartphones</td>
                            </tr>
                            <tr>
                              <td class="text-muted text-sm py-1">Ideal For :</td>
                              <td class="py-1">Unisex</td>
                            </tr>
                            <tr>
                              <td class="text-muted text-sm py-1">Lifestyle :</td>
                              <td class="py-1">Fitness | Indoor | Sports | Swimming | Outdoor</td>
                            </tr>
                            <tr>
                              <td class="text-muted text-sm py-1">Basic Features :</td>
                              <td class="py-1">Calendar | Date & Time | Timer/Stop Watch</td>
                            </tr>
                            <tr>
                              <td class="text-muted text-sm py-1">Health Tracker :</td>
                              <td class="py-1">Heart Rate | Exercise Tracker</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane" id="ecomtab-2" role="tabpanel" aria-labelledby="ecomtab-tab-2">
                        <div class="row">
                          <div class="col-md-6">
                            <h5>Product Category</h5>
                            <hr class="my-3"/>
                            <div class="table-responsive">
                              <table class="table table-borderless">
                                <tbody>
                                  <tr>
                                    <td class="text-muted text-sm py-1">Wearable Device Type:</td>
                                    <td class="py-1">Smart Band</td>
                                  </tr>
                                  <tr>
                                    <td class="text-muted text-sm py-1">Compatible Devices :</td>
                                    <td class="py-1">Smartphones</td>
                                  </tr>
                                  <tr>
                                    <td class="text-muted text-sm py-1">Ideal For :</td>
                                    <td class="py-1">Unisex</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <h5>Manufacturer Details</h5>
                            <hr class="my-3"/>
                            <div class="table-responsive">
                              <table class="table table-borderless">
                                <tbody>
                                  <tr>
                                    <td class="text-muted text-sm py-1">Brand :</td>
                                    <td class="py-1">Apple</td>
                                  </tr>
                                  <tr>
                                    <td class="text-muted text-sm py-1">Model Series :</td>
                                    <td class="py-1">Watch SE</td>
                                  </tr>
                                  <tr>
                                    <td class="text-muted text-sm py-1">Model Number :</td>
                                    <td class="py-1">MYDT2HN/A</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="ecomtab-3" role="tabpanel" aria-labelledby="ecomtab-tab-3">
                      <div class="table-responsive">
                        <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          <strong class="text-body">“When an unknown printer took a galley of type and scrambled it
                            to make a type specimen book.”</strong> It has survived not only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged. It was
                          popularized in the 1960s with the release of Lestrade sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing software like PageMaker
                          including versions of Lorem Ipsum.
                        </p>
                        <p class="text-muted">It was popularized in the 1960s with the release of Learjet sheets
                          containing Lorem Ipsum passages, and more recently with desktop publishing software like
                         PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                    <div class="tab-pane" id="ecomtab-4" role="tabpanel" aria-labelledby="ecomtab-tab-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-xl-5">
                              <h2 class="mb-3"><b>4<small class="text-muted">/5</small></b></h2>
                              <p class="mb-2 text-muted">Based on 275 reviews</p>
                              <div class="star mb-3 f-20">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                                <i class="far fa-star text-muted"></i>
                              </div>
                            </div>
                            <div class="col-xl-7">
                              <div class="d-flex align-items-center">
                                <div class="w-100">
                                  <div class="row align-items-center my-2">
                                    <div class="col">
                                      <div class="progress" style={{height: "4px"}}>
                                        <div class="progress-bar bg-warning" style={{width: "30%"}}></div>
                                      </div>
                                    </div>
                                    <div class="col-auto">
                                      <p class="mb-0 text-muted">5 Stars</p>
                                    </div>
                                  </div>
                                  <div class="row align-items-center my-2">
                                    <div class="col">
                                      <div class="progress" style={{height: "4px"}}>
                                        <div class="progress-bar bg-warning" style={{width: "60%"}}></div>
                                      </div>
                                    </div>
                                    <div class="col-auto">
                                      <p class="mb-0 text-muted">4 Stars</p>
                                    </div>
                                  </div>
                                  <div class="row align-items-center my-2">
                                    <div class="col">
                                      <div class="progress" style={{height: "4px"}}>
                                        <div class="progress-bar bg-warning" style={{width: "75%"}}></div>
                                      </div>
                                    </div>
                                    <div class="col-auto">
                                      <p class="mb-0 text-muted">3 Stars</p>
                                    </div>
                                  </div>
                                  <div class="row align-items-center my-2">
                                    <div class="col">
                                      <div class="progress" style={{height: "4px"}}>
                                        <div class="progress-bar bg-warning" style={{width: "40%"}}></div>
                                      </div>
                                    </div>
                                    <div class="col-auto">
                                      <p class="mb-0 text-muted">2 Stars</p>
                                    </div>
                                  </div>
                                  <div class="row align-items-center">
                                    <div class="col">
                                      <div class="progress" style={{height: "4px"}}>
                                        <div class="progress-bar bg-warning" style={{width: "55%"}}></div>
                                      </div>
                                    </div>
                                    <div class="col-auto">
                                      <p class="mb-0 text-muted">1 Stars</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body">
                          <div class="media align-items-start">
                            <img class="img-radius img-fluid wid-40" src="../src/assets/images/user/avatar-1.jpg"
                              alt="User image"/>
                            <div class="media-body ms-3">
                              <h6 class="mb-1">Harriet Wilson</h6>
                              <p class="text-muted text-sm mb-1">2 hour ago</p>
                              <div class="star ">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                                <i class="far fa-star text-muted"></i>
                              </div>
                              <p class="mb-0 text-muted text-sm mt-1">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body">
                          <div class="media align-items-start">
                            <img class="img-radius img-fluid wid-40" src="../src/assets/images/user/avatar-2.jpg"
                              alt="User image"/>
                            <div class="media-body ms-3">
                              <h6 class="mb-1">Lou Olson</h6>
                              <p class="text-muted text-sm mb-1">2 hour ago</p>
                              <div class="star ">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                                <i class="far fa-star text-muted"></i>
                                <i class="far fa-star text-muted"></i>
                              </div>
                              <p class="mb-0 text-muted text-sm mt-1">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body">
                          <div class="media align-items-start">
                            <img class="img-radius img-fluid wid-40" src="../src/assets/images/user/avatar-3.jpg"
                              alt="User image"/>
                            <div class="media-body ms-3">
                              <h6 class="mb-1">Emilie Wheeler</h6>
                              <p class="text-muted text-sm mb-1">2 hour ago</p>
                              <div class="star ">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="far fa-star text-muted"></i>
                                <i class="far fa-star text-muted"></i>
                              </div>
                              <p class="mb-0 text-muted text-sm mt-1">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-3">
                        <button class="btn btn-link-primary">View more comments</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 position-relative">
              <div class="card rel-prod-card">
                <div class="card-header">
                  <h5>Related Products</h5>
                </div>
                <div class="card-body rel-prod-list">
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-1.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-2.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-3.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-4.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-5.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-6.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-1.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-2.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-3.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-4.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-5.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                  <div class="media align-items-start mb-3">
                    <img class="bg-light rounded img-fluid wid-60" src="../src/assets/images/application/prod-img-6.png"
                      alt="User image"/>
                    <div class="media-body mx-2">
                      <h5 class="mb-1">Canon EOS 1500D 24.1 Digital SLR</h5>
                      <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with</p>
                      <h5 class="mb-1"><b>$275</b><span class="mx-2 f-16 text-muted f-w-400 text-decoration-line-through">$350</span></h5>
                      <div class="star f-12">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <i class="far fa-star text-muted"></i>
                      </div>
                    </div>
                    <div class="form-check prod-likes">
                      <input type="checkbox" class="form-check-input"/>
                      <i data-feather="heart" class="prod-likes-icon"></i>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="d-grid">
                    <button class="btn btn-outline-secondary">View all Products</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- [ sample-page ] end --> */}
      </div>
      {/* <!-- [ Main Content ] end --> */}
    </div>
  </div>
  {/* <!-- [ Main Content ] end --> */}
    <Footer/>
    </>
  )
}

export default EcommerceProductDetails