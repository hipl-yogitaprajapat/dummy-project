import React from 'react'
import ElementHeader from '../ElementHeader'
import ElementFooter from '../ElementFooter'
import ElementSidebar from '../ElementSidebar'

const Tour = () => {
  return (
    <>
    <ElementHeader/>
  {/* <!-- [ Main Content ] start --> */}
     <section class="component-block">
    <div class="container">
      <div class="row">
       <ElementSidebar/>
        <div class="col-xl-9">
          <div class="row">
            <div class="col-md-10 col-xxl-9 mb-4">
              <a href="#" class="d-inline-flex align-items-center d-xl-none btn btn-dark mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_component"
                ><i class="ti ti-menu-2 me-2"></i> Explore Components
              </a>
              <h2>Tour</h2>
              <p class="text-muted">Intro.js is a lightweight JavaScript library for creating step-by-step and powerful customer onboarding tours</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://introjs.com/">
                  <i class="ti ti-external-link me-1"></i>
                  Reference
                </a>
              </div>
            </div>

          </div>
          {/* <!-- [ Main Content ] start --> */}
          <div class="row">
            {/* <!-- [ rangeslider ] start --> */}
            <div class="col-sm-12">
              <div class="card step1">
                <div class="card-header step2">
                  <h5 class="step3">Hello card</h5>
                </div>
                <div class="card-body step4">
                  <h1>H1 Admin Template</h1>
                  <h2>H2 Admin Template</h2>
                  <h3>H3 Admin Template</h3>
                  <h4>H4 Admin Template</h4>
                  <h5>H5 Admin Template</h5>
                  <h6>H6 Admin Template</h6>
                  <p>p Admin Template</p>
                  <strong>p Admin Template</strong>
                </div>
              </div>
            </div>
            {/* <!-- [ rangeslider ] end --> */}
          </div>
          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div>
    </div>
  </section>
  {/* <!-- [ Main Content ] end --> */}
    <ElementFooter/>
    </>
  )
}

export default Tour