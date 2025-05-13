import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'
import Footer from '../Footer'

const LayoutVertical = () => {
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
                <li class="breadcrumb-item"><a href="javascript: void(0)">Layout</a></li>
                <li class="breadcrumb-item" aria-current="page">Vertical Layout</li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">Vertical Layout</h2>
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
            <div class="card-header">
              <h5>Hello card</h5>
            </div>
            <div class="card-body">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
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

export default LayoutVertical