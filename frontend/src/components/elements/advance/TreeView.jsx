import React from 'react'
import ElementHeader from '../ElementHeader'
import ElementFooter from '../ElementFooter'
import ElementSidebar from '../ElementSidebar'

const TreeView = () => {
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
              <h2>Tree View</h2>
              <p class="text-muted">Standalone tree view library</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://github.com/finom/vanillatree">
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
              <div class="card">
                <div class="card-header">
                  <h5>HTML Demo</h5>
                </div>
                <div class="card-body">
                  <div id="tree-demo"> </div>
                  <p id="tree-msg"></p>
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

export default TreeView