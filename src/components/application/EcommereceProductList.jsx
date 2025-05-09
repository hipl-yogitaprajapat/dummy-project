import React from 'react'
import Footer from '../Footer'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'
import { Link } from 'react-router-dom'

const EcommereceProductList = () => {
  return (
    <>
    <Sidebar/>
    <Header/>
    {/* <!-- [ Main Content ] start --> */}
  <div class="pc-container">
    <div class="pc-content">
      {/* <!-- [ Main Content ] start --> */}
      <div class="row">
        {/* <!-- [ sample-page ] start --> */}
        <div class="col-sm-12">
          <div class="card table-card">
            <div class="card-body">
              <div class="text-end p-4 pb-0">
                <Link to="/ecom-product-add" class="btn btn-primary">
                  <i class="ti ti-plus f-18"></i> Add Product
                </Link>
              </div>
              <div class="table-responsive">
                <table class="table table-hover" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th></th>
                      <th class="text-end">#</th>
                      <th>Product Detail</th>
                      <th>Categories</th>
                      <th class="text-end">Price</th>
                      <th class="text-end">Qty</th>
                      <th>Status</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-1.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <Link to="/ecom-product-add" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </Link>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-2.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R)</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-3.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-4.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-5.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R)</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-6.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-7.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-8.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R)</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"/>
                        </div>
                      </td>
                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="../src/assets/images/application/prod-img-9.png" alt="user-image"
                              class="wid-40 rounded-circle"/>
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="../application/ecom_product-add.html" class="avtar avtar-xs btn-link-primary">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- [ sample-page ] end --> */}
      </div>
      {/* <!-- [ Main Content ] end --> */}
    </div>
  </div>
  <div class="modal fade" id="cust-modal" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0">
          <h5 class="mb-0">Product Details</h5>
          <a href="#" class="avtar avtar-s btn-link-danger" data-bs-dismiss="modal">
            <i class="ti ti-x f-20"></i>
          </a>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="bg-light rounded position-relative">
                <div class="position-absolute end-0 top-0 p-3">
                  <span class="badge bg-light-success">In Stock</span>
                </div>
                <div class="text-center mt-3">
                  <div class="chat-avtar d-inline-flex mx-auto">
                    <img class="img-fluid" src="../src/assets/images/application/prod-img-5.png"
                      alt="User image"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <h5>Canon EOS 1500D 24.1 Digital</h5>
              <p class="text-muted">Image Enlargement: After shooting, you can enlarge photographs of the objects for clear zoomed view. Change In Aspect Ratio: Boldly crop the subject and save it with a composition that has impact. You can convert it to a 1:1 square format, and after shooting you can create a photo that will be popular on SNS.</p>
              <div class="star f-18 mb-3">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star-half-alt text-warning"></i>
                <i class="far fa-star text-muted"></i>
              </div>
              <div class="table-responsive">
                <table class="table w-auto table-borderless">
                  <tbody>
                    <tr>
                      <td class="text-muted py-1">Categories</td>
                      <td class="py-1">Electronics, Camera</td>
                    </tr>
                    <tr>
                      <td class="text-muted py-1">Qty</td>
                      <td class="py-1">21</td>
                    </tr>
                    <tr>
                      <td class="text-muted py-1">Price</td>
                      <td class="py-1"><h5 class="mb-0">$399</h5></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- [ Main Content ] end --> */}
    <Footer/>
    </>
  )
}

export default EcommereceProductList