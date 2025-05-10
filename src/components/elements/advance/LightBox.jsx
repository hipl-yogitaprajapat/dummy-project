import React from 'react'
import ElementHeader from '../ElementHeader'
import ElementFooter from '../ElementFooter'
import ElementSidebar from '../ElementSidebar'

const LightBox = () => {
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
              <h2>Lightbox</h2>
              <p class="text-muted">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://getbootstrap.com/docs/5.3/components/modal/">
                  <i class="ti ti-external-link me-1"></i>
                  Reference
                </a>
              </div>
            </div>

          </div>
          {/* <!-- [ Main Content ] start --> */}
          <div class="row">
            {/* <!-- [ single-light ] start --> */}
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>light box</h5>
                </div>
                <div class="card-body">
                  <p> Add this code <code>data-lightbox="example-set"</code> to see road trip gallery in lightbox popup.</p>
                  <div class="row text-center">
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-xs-12">
                      <a data-lightbox="../assets/images/light-box/l1.jpg"
                        ><img src="../src/assets/images/light-box/sl1.jpg" class="img-fluid m-b-10" alt=""
                      /></a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-xs-12">
                      <a data-lightbox="../assets/images/light-box/l2.jpg"
                        ><img src="../src/assets/images/light-box/sl2.jpg" class="img-fluid m-b-10" alt=""
                      /></a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-xs-12">
                      <a data-lightbox="../assets/images/light-box/l3.jpg"
                        ><img src="../src/assets/images/light-box/sl3.jpg" class="img-fluid m-b-10" alt=""
                      /></a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-xs-12">
                      <a data-lightbox="../assets/images/light-box/l4.jpg"
                        ><img src="../src/assets/images/light-box/sl4.jpg" class="img-fluid m-b-10" alt=""
                      /></a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-xs-12">
                      <a data-lightbox="../assets/images/light-box/l5.jpg"
                        ><img src="../src/assets/images/light-box/sl5.jpg" class="img-fluid m-b-10" alt=""
                      /></a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-xs-12">
                      <a data-lightbox="../assets/images/light-box/l6.jpg"
                        ><img src="../src/assets/images/light-box/sl6.jpg" class="img-fluid m-b-10" alt=""
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- [ multiple-light ] end --> */}
          </div>
          <div class="modal fade modal-lightbox" id="lightboxModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                  <img src="../assets/images/light-box/l1.jpg" alt="images" class="modal-image img-fluid"/>
                </div>
              </div>
            </div>
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

export default LightBox