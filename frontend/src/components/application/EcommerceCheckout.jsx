import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'
import Footer from '../Footer'

const EcommerceCheckout = () => {
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
                <li class="breadcrumb-item" aria-current="page">Checkout</li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">Checkout</h2>
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
            <div class="card-body p-0">
              <ul class="nav nav-tabs checkout-tabs mb-0" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="ecomtab-tab-1" data-bs-toggle="tab" href="#ecomtab-1" role="tab"
                    aria-controls="ecomtab-1" aria-selected="true">
                    <div class="media align-items-center">
                      <div class="avtar avtar-xs">
                        <i class="ti ti-shopping-cart"></i>
                      </div>
                      <div class="media-body ms-3">
                        <h5 class="mb-0">Cart Details</h5>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="ecomtab-tab-2" data-bs-toggle="tab" href="#ecomtab-2" role="tab"
                    aria-controls="ecomtab-2" aria-selected="true">
                    <div class="media align-items-center">
                      <div class="avtar avtar-xs">
                        <i class="ti ti-building-skyscraper"></i>
                      </div>
                      <div class="media-body ms-3">
                        <h5 class="mb-0">Shipping Information</h5>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="ecomtab-tab-3" data-bs-toggle="tab" href="#ecomtab-3" role="tab"
                    aria-controls="ecomtab-3" aria-selected="true">
                    <div class="media align-items-center">
                      <div class="avtar avtar-xs">
                        <i class="ti ti-credit-card"></i>
                      </div>
                      <div class="media-body ms-3">
                        <h5 class="mb-0">Payment</h5>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane show active" id="ecomtab-1" role="tabpanel" aria-labelledby="ecomtab-tab-1">
              <div class="row">
                <div class="col-xl-8">
                  <div class="card table-card">
                    <div class="card-header">
                      <h5>Cart Item <span class="ms-2 f-14 px-2 badge bg-light-secondary rounded-pill">1</span></h5>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table" id="pc-dt-simple">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th class="text-end">Price</th>
                              <th class="text-center">Quantity</th>
                              <th class="text-end">Total</th>
                              <th class="text-end"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <img src="../src/assets/images/application/prod-img-1.png" alt="image"
                                    class="bg-light wid-50 rounded"/>
                                  <div class="media-body ms-3">
                                    <h5 class="mb-1">Apple MacBook Pro</h5>
                                    <p class="text-sm text-muted mb-0">Dark Red</p>
                                  </div>
                                </div>
                              </td>
                              <td class="text-end">
                                <h5 class="mb-0">$100.00</h5>
                                <span class="text-sm text-muted text-decoration-line-through">$129.99</span>
                              </td>
                              <td class="text-center">
                                <div class="btn-group btn-group-sm mb-2 border" role="group">
                                  <button type="button" id="decrease" onclick="decreaseValue('number')"
                                    class="btn btn-link-dark"><i class="ti ti-minus"></i></button>
                                  <input class="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                                    type="text" id="number" value="0"/>
                                  <button type="button" id="increase" onclick="increaseValue('number')"
                                    class="btn btn-link-dark"><i class="ti ti-plus"></i></button>
                                </div>
                              </td>
                              <td class="text-end">
                                <h5 class="mb-0">$100.00</h5>
                              </td>
                              <td class="text-end">
                                <a href="#" class="avtar avtar-s btn-link-danger">
                                  <i class="ti ti-trash f-18"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="text-end">
                    <a href="../application/ecom_product.html"
                      class="btn btn-link-secondary d-inline-flex align-items-center"><i
                        class="ti ti-chevron-left me-2"></i> Back to Shopping</a>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-body">
                      <button type="button" class="btn btn-sm btn-link-secondary" data-bs-toggle="modal"
                        data-bs-target="#couponModal">
                        Have a coupon code?
                      </button>
                      <div class="input-group my-2">
                        <input type="text" class="form-control" placeholder="Discount Coupon"/>
                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body py-2">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                          <h5 class="mb-0">Order Summary</h5>
                        </li>
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">$300.00</h5>
                          </div><span class="text-muted">Sub Total</span>
                        </li>
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">-</h5>
                          </div><span class="text-muted">Estimated Delivery</span>
                        </li>
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">-</h5>
                          </div><span class="text-muted">Voucher</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body py-2">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">$300.00</h5>
                          </div>
                          <h5 class="mb-0 d-inline-block">Total</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-grid mb-3">
                    <button class="btn btn-primary">Process to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="ecomtab-2" role="tabpanel" aria-labelledby="ecomtab-tab-2">
              <div class="row">
                <div class="col-xl-8">
                  <div class="card">
                    <div class="card-header">
                      <h5>Shipping information</h5>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="card border">
                            <div class="card-body">
                              <h5 class="mb-3">Billing Address <small class="text-muted me-2">(Home)</small><span
                                  class="badge bg-light-primary rounded-pill f-12">Default</span></h5>
                              <p>17 Sujun Pass, 1682 Kudbe Key, Ijuorouri, Colorado, Antigua & Barbuda -
                                EC1 8GV</p>
                              <p class="text-secondary mb-0">(366) 715-6265</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card border">
                            <div class="card-body">
                              <h5 class="mb-3">Chester Gomez <small class="text-muted">(Office)</small></h5>
                              <p>1541 Acolol Pt, 886 Kiog Ridge, Gufupam, New York, Caribbean Netherlands -
                                CF6 0OV</p>
                              <p class="text-secondary mb-0">(438) 305-5884</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label">First Name :<small class="text-muted d-block">Enter
                                your first name</small></label>
                            <div class="col-lg-8">
                              <input type="text" class="form-control"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label">Last Name :<small class="text-muted d-block">Enter
                                your last name</small></label>
                            <div class="col-lg-8">
                              <input type="text" class="form-control"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label">Email Id :<small class="text-muted d-block">Enter
                                Email id</small></label>
                            <div class="col-lg-8">
                              <input type="email" class="form-control"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label">Date of Birth :<small
                                class="text-muted d-block">Enter
                                the date of birth</small></label>
                            <div class="col-lg-8">
                              <input type="date" class="form-control"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label">Phone number :<small class="text-muted d-block">Enter
                                Phone number</small></label>
                            <div class="col-lg-8">
                              <input type="text" class="form-control"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label">City :<small class="text-muted d-block">Enter
                                City name</small></label>
                            <div class="col-lg-8">
                              <input type="text" class="form-control"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="checkaddres" checked/>
                              <label class="form-check-label" for="checkaddres">
                                Save this new address for future shipping
                              </label>
                            </div>
                          </div>
                          <div class="text-end btn-page mb-0 mt-4">
                            <button class="btn btn-outline-secondary">Cancel</button>
                            <button class="btn btn-primary">Save</button>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="d-flex justify-content-end mb-3">
                    <button class="btn btn-link-primary"><i
                        class="ti ti-arrow-narrow-left align-text-bottom me-2"></i>Back to Cart</button>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-body">
                      <button type="button" class="btn btn-sm btn-link-secondary" data-bs-toggle="modal"
                        data-bs-target="#couponModal">
                        Have a coupon code?
                      </button>
                      <div class="input-group my-2">
                        <input type="text" class="form-control" placeholder="Discount Coupon"/>
                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h5>Order Summary</h5>
                    </div>
                    <div class="card-body py-2">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                          <div class="media align-items-start">
                            <img class="bg-light rounded img-fluid wid-60"
                              src="../src/assets/images/application/prod-img-1.png" alt="User image"/>
                            <div class="media-body mx-2">
                              <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                              <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                              <h5 class="mb-1"><b>$275</b><span class="mx-2 f-14 text-muted f-w-400">1 Item</span></h5>
                            </div>
                            <a href="#" class="avtar avtar-s btn-link-danger">
                              <i class="ti ti-trash f-20"></i>
                            </a>
                          </div>
                        </li>
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">$300.00</h5>
                          </div><span class="text-muted">Sub Total</span>
                        </li>
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">-</h5>
                          </div><span class="text-muted">Estimated Delivery</span>
                        </li>
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">-</h5>
                          </div><span class="text-muted">Voucher</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body py-2">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                          <div class="float-end">
                            <h5 class="mb-0">$300.00</h5>
                          </div>
                          <h5 class="mb-0 d-inline-block">Total</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-grid mb-3">
                    <button class="btn btn-primary">Process to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="ecomtab-3" role="tabpanel" aria-labelledby="ecomtab-tab-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-8">
                    <div class="card">
                      <div class="card-header">
                        <h5>Payment Method</h5>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-12">
                            <div class="card border">
                              <div class="card-body">
                                <div class="float-end">
                                  <button class="btn btn-light-secondary" data-bs-toggle="modal"
                                    data-bs-target="#addressModal"><i
                                      class="ti ti-edit-circle align-text-bottom me-1"></i>Change</button>
                                </div>
                                <h5 class="mb-3">Billing Address <small class="text-muted me-2">(Home)</small><span
                                    class="badge bg-light-primary rounded-pill mx-2 f-12">Default</span></h5>
                                <p>17 Sujun Pass, 1682 Kudbe Key, Ijuorouri, Colorado, Antigua & Barbuda -
                                  EC1 8GV</p>
                                <p class="text-secondary mb-0">(366) 715-6265</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-lg-4">
                                <div class="card border p-3">
                                  <div class="form-check">
                                    <input type="radio" name="radio11" class="form-check-input input-primary"
                                      id="customCheckdef12"/>
                                    <label class="form-check-label d-block" for="customCheckdef12">
                                      <span class="d-flex align-items-center">
                                        <span>
                                          <span class="h5 mb-0 d-block">Credit / Debit Card</span>
                                          <span class="f-12 text-muted">10% off with master card</span>
                                        </span>
                                        <img src="../src/assets/images/application/card.png" alt="img"
                                          class="img-fluid ms-1"/>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="card border p-3">
                                  <div class="form-check">
                                    <input type="radio" name="radio11" class="form-check-input input-primary"
                                      id="customCheckdef11" checked/>
                                    <label class="form-check-label d-block" for="customCheckdef11">
                                      <span class="d-flex align-items-center">
                                        <span>
                                          <span class="h5 mb-0 d-block">Pay with PayPal</span>
                                          <span class="f-12 text-muted">5% off on first payment</span>
                                        </span>
                                        <img src="../src/assets/images/application/paypal.png" alt="img"
                                          class="img-fluid ms-1"/>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="card border p-3">
                                  <div class="form-check">
                                    <input type="radio" name="radio11" class="form-check-input input-primary"
                                      id="customCheckdef13"/>
                                    <label class="form-check-label d-block" for="customCheckdef13">
                                      <span class="d-flex align-items-center">
                                        <span>
                                          <span class="h5 mb-0 d-block">Cash on Delivery</span>
                                          <span class="f-12 text-muted">When you use this payment</span>
                                        </span>
                                        <img src="../src/assets/images/application/cod.png" alt="img"
                                          class="img-fluid ms-1"/>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-lg-4 col-form-label">Card Number :<small
                                  class="text-muted d-block">Enter
                                  the 16 digit card number on the card</small></label>
                              <div class="col-lg-8">
                                <input type="text" class="form-control"/>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-lg-4 col-form-label">Expiry Date :<small
                                  class="text-muted d-block">Enter
                                  the expiration on the card</small></label>
                              <div class="col-lg-8">
                                <div class="row">
                                  <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Month"/>
                                  </div>
                                  <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Year"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-lg-4 col-form-label">CVV Number :<small class="text-muted d-block">Enter
                                  the 3 or 4 digit number on the card</small></label>
                              <div class="col-lg-8">
                                <input type="text" class="form-control"/>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-lg-4 col-form-label">Password :<small class="text-muted d-block">Enter
                                  your dynamic password</small></label>
                              <div class="col-lg-8">
                                <input type="password" class="form-control"/>
                              </div>
                            </div>
                            <div class="text-end btn-page mb-0 mt-4">
                              <button class="btn btn-outline-secondary">Cancel</button>
                              <button class="btn btn-primary">Save</button>
                            </div>
                            <hr class="my-4"/>
                            <div class="row">
                              <div class="col-md-6 col-lg-4">
                                <div class="card paycard">
                                  <div class="card-body p-3">
                                    <div class="d-flex align-items-start justify-content-between">
                                      <h5>John Smith</h5>
                                      <img src="../src/assets/images/application/mastercard.png" alt="images"
                                        class="img-fluid"/>
                                    </div>
                                    <div class="row g-2 align-items-center justify-content-between my-2">
                                      <div class="col">
                                        <h5 class="mb-0">****</h5>
                                      </div>
                                      <div class="col">
                                        <h5 class="mb-0">****</h5>
                                      </div>
                                      <div class="col">
                                        <h5 class="mb-0">****</h5>
                                      </div>
                                      <div class="col">
                                        <h5 class="mb-0">2599</h5>
                                      </div>
                                    </div>
                                    <div class="row  align-items-center justify-content-between">
                                      <div class="col-auto">
                                        <p class="mb-0"><span class="text-sm opacity-50">CVV</span> 085</p>
                                      </div>
                                      <div class="col-auto">
                                        <p class="mb-0"><span class="text-sm opacity-50">Expire Date</span> 05/24</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 col-lg-4">
                                <div class="card paycard">
                                  <div class="card-body p-3">
                                    <div class="d-flex align-items-start justify-content-between">
                                      <h5>Jennifer winget</h5>
                                      <img src="../src/assets/images/application/visa.png" alt="images" class="img-fluid"/>
                                    </div>
                                    <div class="row g-2 align-items-center justify-content-between my-2">
                                      <div class="col">
                                        <h5 class="mb-0">****</h5>
                                      </div>
                                      <div class="col">
                                        <h5 class="mb-0">****</h5>
                                      </div>
                                      <div class="col">
                                        <h5 class="mb-0">****</h5>
                                      </div>
                                      <div class="col">
                                        <h5 class="mb-0">2599</h5>
                                      </div>
                                    </div>
                                    <div class="row  align-items-center justify-content-between">
                                      <div class="col-auto">
                                        <p class="mb-0"><span class="text-sm opacity-50">CVV</span> 085</p>
                                      </div>
                                      <div class="col-auto">
                                        <p class="mb-0"><span class="text-sm opacity-50">Expire Date</span> 05/24</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-3">
                      <button class="btn btn-link-primary"><i
                          class="ti ti-arrow-narrow-left align-text-bottom me-2"></i>Back to Shipping
                        Information</button>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card">
                      <div class="card-body">
                        <button type="button" class="btn btn-sm btn-link-secondary" data-bs-toggle="modal"
                          data-bs-target="#couponModal">
                          Have a coupon code?
                        </button>
                        <div class="input-group my-2">
                          <input type="text" class="form-control" placeholder="Discount Coupon"/>
                          <button class="btn btn-outline-secondary" type="button">Apply</button>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <h5>Order Summary</h5>
                      </div>
                      <div class="card-body py-2">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item px-0">
                            <div class="media align-items-start">
                              <img class="bg-light rounded img-fluid wid-60"
                                src="../src/assets/images/application/prod-img-1.png" alt="User image"/>
                              <div class="media-body mx-2">
                                <h5 class="mb-1">Canon EOS 1500D 24.1</h5>
                                <p class="text-truncate text-muted text-sm mb-2">SLR Camera (Black) with EF</p>
                                <h5 class="mb-1"><b>$275</b><span class="mx-2 f-14 text-muted f-w-400">1 Item</span>
                                </h5>
                              </div>
                              <a href="#" class="avtar avtar-s btn-link-danger">
                                <i class="ti ti-trash f-20"></i>
                              </a>
                            </div>
                          </li>
                          <li class="list-group-item px-0">
                            <div class="float-end">
                              <h5 class="mb-0">$300.00</h5>
                            </div><span class="text-muted">Sub Total</span>
                          </li>
                          <li class="list-group-item px-0">
                            <div class="float-end">
                              <h5 class="mb-0">-</h5>
                            </div><span class="text-muted">Estimated Delivery</span>
                          </li>
                          <li class="list-group-item px-0">
                            <div class="float-end">
                              <h5 class="mb-0">-</h5>
                            </div><span class="text-muted">Voucher</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body py-2">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item px-0">
                            <div class="float-end">
                              <h5 class="mb-0">$300.00</h5>
                            </div>
                            <h5 class="mb-0 d-inline-block">Total</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="d-grid mb-3">
                      <button class="btn btn-primary">Process to Checkout</button>
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

      {/* <!-- Modal --> */}
      <div class="modal fade" id="couponModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="calendar-modal-title f-w-600 text-truncate">Festival gift for your</h4>
          <a href="#" class="avtar avtar-s btn-link-danger" data-bs-dismiss="modal">
            <i class="ti ti-x f-20"></i>
          </a>
        </div>
        <div class="modal-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item px-0">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card my-2 coupon-card border border-secondary"
                    // style={{backgroundImage: url('../assets/images/application/discount.png')}}
                    >
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <h4 class="mb-0">Up to 50% Off</h4>
                        <button class="btn coupon-btn btn-light-secondary">BERRY50</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card my-2 coupon-card border border-danger"
                    // style={{backgroundImage: url('../assets/images/application/discount.png')}}
                    >
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <h4 class="mb-0">Festival Fires</h4>
                        <button class="btn coupon-btn btn-light-danger">FLAT05</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item px-0">
              <div class="media align-items-center mb-3">
                <div class="avtar bg-primary text-white">
                  <i class="ti ti-gift f-22"></i>
                </div>
                <div class="media-body mx-3">
                  <h5 class="mb-1">Get $150 off on your subscription</h5>
                  <p class="mb-0 text-sm text-muted">When you subscribe to the unlimited consultation plan on berry.</p>
                </div>
                <button class="btn coupon-btn btn-light-primary">SUB150</button>
              </div>
            </li>
            <li class="list-group-item px-0">
              <div class="media align-items-center mb-3">
                <div class="avtar bg-warning text-white">
                  <i class="ti ti-trophy f-22"></i>
                </div>
                <div class="media-body mx-3">
                  <h5 class="mb-1">Save up to $200</h5>
                  <p class="mb-0 text-sm text-muted">Make 4 play store recharge code purchases & save up to $200</p>
                </div>
                <button class="btn coupon-btn btn-light-warning">UPTO200</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      <div class="modal fade" id="addressModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header align-items-center">
          <h4 class="calendar-modal-title f-w-600 text-truncate mb-0">Add Billing Address</h4>
          <a href="#" class="avtar avtar-s btn-link-danger" data-bs-dismiss="modal">
            <i class="ti ti-x f-20"></i>
          </a>
        </div>
        <div class="modal-body">
          <div class="row align-items-end">
            <div class="col-sm-12">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Enter Name"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="radio_address" id="radio_address1"/>
                    <label class="form-check-label" for="radio_address1">Home</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="radio_address" id="radio_address2" checked/>
                    <label class="form-check-label" for="radio_address2">Office</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">Building No./Name</label>
                <input type="text" class="form-control" placeholder="Enter Building No./Name"/>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">Street</label>
                <input type="text" class="form-control" placeholder="Enter Street"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="form-label">City</label>
                <input type="text" class="form-control" placeholder="Enter City"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="form-label">City</label>
                <input type="text" class="form-control" placeholder="Enter City"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="form-label">Country</label>
                <input type="text" class="form-control" placeholder="Enter Country"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="form-label">Area Code</label>
                <input type="text" class="form-control" placeholder="Enter Area Code"/>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">Contact</label>
                <input type="text" class="form-control" placeholder="Enter Contact"/>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-between">
          <div class="me-auto">
            <div class="form-check form-switch">
              <input type="checkbox" class="form-check-input input-secondary" id="customCheckc2" checked/>
              <label class="form-check-label" for="customCheckc2">Set as Default</label>
            </div>
          </div>
          <div class="flex-grow-1 text-end">
            <button type="button" class="btn btn-link-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="cardModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header align-items-center">
          <h4 class="calendar-modal-title f-w-600 text-truncate mb-0">Add Payment Card</h4>
          <a href="#" class="avtar avtar-s btn-link-danger" data-bs-dismiss="modal">
            <i class="ti ti-x f-20"></i>
          </a>
        </div>
        <div class="modal-body">
          <div class="row align-items-end">
            <div class="col-sm-12">
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="radio_address" id="radio_address111"/>
                  <label class="form-check-label" for="radio_address111">Home</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="radio_address" id="radio_address21" checked/>
                  <label class="form-check-label" for="radio_address21">Office</label>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">Bank</label>
                <input type="text" class="form-control" placeholder="Enter Bank"/>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">Card Number</label>
                <input type="text" class="form-control" placeholder="Enter Card Number"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="form-label">Expiry Date</label>
                <input type="text" class="form-control" placeholder="Enter Expiry Date"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label class="form-label">CVV</label>
                <input type="text" class="form-control" placeholder="Enter CVV"/>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_address" id="radio_address11"/>
                <label class="form-check-label" for="radio_address11">Credit Card</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_address" id="radio_address12"/>
                <label class="form-check-label" for="radio_address12">debit</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radio_address" id="radio_address13" checked/>
                <label class="form-check-label" for="radio_address13">Net Banking</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-link-danger" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
      </div>
    </div>
  </div>
    <Footer/>
   </>
  )
}

export default EcommerceCheckout