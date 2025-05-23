import React from 'react'
import Footer from '../Footer'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'

const EcommerceAddProduct = () => {
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
                <li class="breadcrumb-item" aria-current="page">Add New Product</li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">Add New Product</h2>
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
                  <div class="card">
                    <div class="card-body">
                      <div class="form-group">
                        <label class="form-label">Product Name</label>
                        <input type="text" class="form-control" placeholder="Enter Product Name"/>
                      </div>
                      <div class="form-group">
                        <label class="form-label">Product Description</label>
                        <input type="text" class="form-control" placeholder="Enter Product Description"/>
                      </div>
                      <div class="form-group">
                        <label class="form-label">Category</label>
                        <input type="text" class="form-control" placeholder="Enter Product Category"/>
                      </div>
                      <div class="form-group">
                        <label class="form-label">Price</label>
                        <select class="form-select">
                          <option>$ 100</option>
                          <option>$ 200</option>
                          <option>$ 300</option>
                          <option>$ 400</option>
                          <option>$ 500</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="form-group">
                        <label class="form-label">Qty</label>
                        <select class="form-select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="form-select">
                          <option>In Stock</option>
                          <option>Out of Stock</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <p><span class="text-danger">*</span> Recommended resolution is 640*640 with file size</p>
                        <label class="btn btn-outline-secondary" for="flupld"><i class="ti ti-upload me-2"></i> Click to Upload</label>
                        <input type="file" id="flupld" class="d-none"/>
                      </div>
                      <div class="text-end btn-page mb-0 mt-4">
                        <button class="btn btn-outline-secondary">Cancel</button>
                        <button class="btn btn-primary">Add new Product</button>
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
  {/* <!-- [ Main Content ] end --> */}
<Footer/>
</>
  )
}

export default EcommerceAddProduct