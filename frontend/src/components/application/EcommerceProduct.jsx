import React, { useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'
import Footer from '../Footer'

const EcommerceProduct = () => {
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
          <div class="ecom-wrapper">
            <div class="offcanvas-xxl offcanvas-start ecom-offcanvas" tabindex="-1" id="offcanvas_mail_filter">
              <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvas_mail_filter" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body p-0 sticky-xxl-top">
              <div id="" class="">
                  <div class="ecom-filter">
                    <div class="card">
                      <div class="card-header">
                        <h5>Filter</h5>
                      </div>
                      <div class="scroll-block">
                        <div class="card-body">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item px-0 py-2">
                              <a class="btn border-0 px-0 text-start w-100" data-bs-toggle="collapse"
                                href="#filtercollapse1">
                                <div class="float-end"><i class="ti ti-chevron-down"></i></div>
                                Gender
                              </a>
                              <div class="collapse show" id="filtercollapse1">
                                <div class="py-3">
                                  <div class="form-check form-check-inline my-2">
                                    <input class="form-check-input" type="checkbox" id="genderfilter1"
                                      value="option1"/>
                                    <label class="form-check-label" for="genderfilter1">Male</label>
                                  </div>
                                  <div class="form-check form-check-inline my-2">
                                    <input class="form-check-input" type="checkbox" id="genderfilter2"
                                      value="option2"/>
                                    <label class="form-check-label" for="genderfilter2">Female</label>
                                  </div>
                                  <div class="form-check form-check-inline my-2">
                                    <input class="form-check-input" type="checkbox" id="genderfilter3"
                                      value="option3"/>
                                    <label class="form-check-label" for="genderfilter3">Kids</label>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item px-0 py-2">
                              <a class="btn border-0 px-0 text-start w-100" data-bs-toggle="collapse"
                                href="#filtercollapse2">
                                <div class="float-end"><i class="ti ti-chevron-down"></i></div>
                                Categories
                              </a>
                              <div class="collapse show" id="filtercollapse2">
                                <div class="row py-3">
                                  <div class="col-6">
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="checkbox" id="categoryfilter1"
                                        value="option1"/>
                                      <label class="form-check-label" for="categoryfilter1">All</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="checkbox" id="categoryfilter2"
                                        value="option2"/>
                                      <label class="form-check-label" for="categoryfilter2">Electronics</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="checkbox" id="categoryfilter3"
                                        value="option3"/>
                                      <label class="form-check-label" for="categoryfilter3">Fashion</label>
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="checkbox" id="categoryfilter4"
                                        value="option1"/>
                                      <label class="form-check-label" for="categoryfilter4">Kitchen</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="checkbox" id="categoryfilter5"
                                        value="option2"/>
                                      <label class="form-check-label" for="categoryfilter5">Books</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="checkbox" id="categoryfilter6"
                                        value="option3"/>
                                      <label class="form-check-label" for="categoryfilter6">Toys</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item px-0 py-2">
                              <a class="btn border-0 px-0 text-start w-100" data-bs-toggle="collapse"
                                href="#filtercollapse3">
                                <div class="float-end"><i class="ti ti-chevron-down"></i></div>
                                Colors
                              </a>
                              <div class="collapse show" id="filtercollapse3">
                                <div class="py-3">
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-primary"></i>
                                  </div>
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-secondary"></i>
                                  </div>
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-danger"></i>
                                  </div>
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-success"></i>
                                  </div>
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-warning"></i>
                                  </div>
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-info"></i>
                                  </div>
                                  <div class="form-check form-check-inline color-checkbox">
                                    <input class="form-check-input" type="checkbox"/>
                                    <i class="fas fa-circle text-dark"></i>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item px-0 py-2">
                              <a class="btn border-0 px-0 text-start w-100" data-bs-toggle="collapse"
                                href="#filtercollapse4">
                                <div class="float-end"><i class="ti ti-chevron-down"></i></div>
                                Price
                              </a>
                              <div class="collapse show" id="filtercollapse4">
                                <div class="row py-3">
                                  <div class="col-6">
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="radio" name="price" id="pricefilter1"
                                        value="option1"/>
                                      <label class="form-check-label" for="pricefilter1">Below $10</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="radio" name="price" id="pricefilter2"
                                        value="option2"/>
                                      <label class="form-check-label" for="pricefilter2">$50 - $100</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="radio" name="price" id="pricefilter3"
                                        value="option3"/>
                                      <label class="form-check-label" for="pricefilter3">$150 - $200</label>
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="radio" name="price" id="pricefilter4"
                                        value="option1"/>
                                      <label class="form-check-label" for="pricefilter4">$10 - $50</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="radio" name="price" id="pricefilter5"
                                        value="option2"/>
                                      <label class="form-check-label" for="pricefilter5">$100 - $150</label>
                                    </div>
                                    <div class="form-check my-2">
                                      <input class="form-check-input" type="radio" name="price" id="pricefilter6"
                                        value="option3"/>
                                      <label class="form-check-label" for="pricefilter6">Over $200</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item px-0 py-2">
                              <a class="btn border-0 px-0 text-start w-100" data-bs-toggle="collapse"
                                href="#filtercollapse5">
                                <div class="float-end"><i class="ti ti-chevron-down"></i></div>
                                Rating
                              </a>
                              <div class="collapse show" id="filtercollapse5">
                                <div class="py-3">
                                  <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="chkratt1"/>
                                    <label class="form-check-label" for="chkratt1">4★ &amp; above</label>
                                  </div>
                                  <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="chkratt2"/>
                                    <label class="form-check-label" for="chkratt2">3★ &amp; above</label>
                                  </div>
                                  <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="chkratt3"/>
                                    <label class="form-check-label" for="chkratt3">2★ &amp; above</label>
                                  </div>
                                  <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="chkratt4"/>
                                    <label class="form-check-label" for="chkratt4">1★ &amp; above</label>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item px-0 py-2">
                              <a href="#" class="btn btn-light-danger w-100">Clear All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ecom-content">
              <div class="card">
                <div class="card-body p-3">
                  <div class="d-sm-flex align-items-center">
                    <ul class="list-inline me-auto my-1">
                      <li class="list-inline-item align-bottom">
                        <a href="#" class="d-xxl-none btn btn-link-secondary" data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_mail_filter">
                          <i class="ti ti-filter f-16"></i> Filter
                        </a>
                        <a href="#" class="d-none d-xxl-inline-flex btn btn-link-secondary"
                          data-bs-toggle="collapse" data-bs-target="#ecom-filter">
                          <i class="ti ti-filter f-16"></i> Filter
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <div class="form-search">
                          <i class="ti ti-search"></i>
                          <input type="search" class="form-control" placeholder="Search Products"/>
                        </div>
                      </li>
                    </ul>
                    <ul class="list-inline ms-auto my-1">
                      <li class="list-inline-item">
                        <select class="form-select">
                          <option>Price: High To Low</option>
                          <option>Price: Low To High</option>
                          <option>Popularity</option>
                          <option>Discount</option>
                          <option>Fresh Arrivals</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-1.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Apple Series 4 GPS A38 MM Space</h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Apple</p>
                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$12.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star-half-alt text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(4.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-2.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                      <div class="card-body position-absolute start-0 top-0">
                        <span class="badge bg-light-success">30%</span>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Boat On-Ear Wireless </h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Boat</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$81.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(3.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-3.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                      <div class="card-body position-absolute start-0 top-0">
                        <span class="badge bg-light-danger">Sold out</span>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Fitbit MX30 Smart Watch</h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Fitbit</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$49.9</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$85</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(3.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-4.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Apple Series 4 GPS A38 MM Space</h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Apple</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$12.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star-half-alt text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(4.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-5.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Apple Series 4 GPS A38 MM Space</h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Apple</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$12.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star-half-alt text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(4.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-6.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                      <div class="card-body position-absolute start-0 top-0">
                        <span class="badge bg-light-success">30%</span>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Boat On-Ear Wireless </h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Boat</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$81.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(3.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-7.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                      <div class="card-body position-absolute start-0 top-0">
                        <span class="badge bg-light-danger">Sold out</span>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Fitbit MX30 Smart Watch</h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Fitbit</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$49.9</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$85</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(3.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-8.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Apple Series 4 GPS A38 MM Space</h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Apple</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$12.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star-half-alt text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(4.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="card product-card">
                    <div class="card-img-top">
                      <img src="../src/assets/images/application/prod-img-9.png" alt="image" class="img-prod"/>
                      <div class="card-body position-absolute end-0 top-0">
                        <div class="form-check prod-likes">
                          <input type="checkbox" class="form-check-input"/>
                          <i data-feather="heart" class="prod-likes-icon"></i>
                        </div>
                      </div>
                      <div class="card-body position-absolute start-0 top-0">
                        <span class="badge bg-light-success">30%</span>
                      </div>
                    </div>
                    <div class="card-body">
                      <a href="../application/ecom_product-details.html">
                        <h5 class="mb-1 text-truncate">Boat On-Ear Wireless </h5>
                      </a>
                      <p class="prod-content mb-3 text-muted">Boat</p>

                      <div class="d-flex align-items-center justify-content-between mt-3">
                        <div class="me-2">
                          <h6 class="mb-1"><b>$81.99</b> <span
                              class="text-sm text-muted f-w-400 text-decoration-line-through">$15.99</span></h6>
                          <div class="star">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="far fa-star text-muted"></i>
                            <i class="far fa-star text-muted"></i>
                            <span class="text-sm text-muted">(3.0)</span>
                          </div>
                        </div>
                        <button class="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
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
      {/* <!-- [ Main Content ] start --> */}
    <Footer/>

   </>
  )
}

export default EcommerceProduct