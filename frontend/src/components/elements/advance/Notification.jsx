import React from 'react'
import ElementFooter from '../ElementFooter'
import ElementHeader from '../ElementHeader'
import ElementSidebar from '../ElementSidebar'

const Notification = () => {
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
              <h2>Notifications</h2>
              <p class="text-muted">Beautiful notifications with CSS and Vanilla JavaScript!</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://csilva2810.github.io/notifier/docs/en/index.html">
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
                  <h5>Notification Alert</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-default">Default</button>
                  <button type="button" class="btn btn-info" id="btn-info">Info</button>
                  <button type="button" class="btn btn-success" id="btn-success">Success</button>
                  <button type="button" class="btn btn-warning" id="btn-warning">Warning</button>
                  <button type="button" class="btn btn-danger" id="btn-danger">Danger</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Notification with Icons</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-default-i">Default</button>
                  <button type="button" class="btn btn-info" id="btn-info-i">Info</button>
                  <button type="button" class="btn btn-success" id="btn-success-i">Success</button>
                  <button type="button" class="btn btn-warning" id="btn-warning-i">Warning</button>
                  <button type="button" class="btn btn-danger" id="btn-danger-i">Danger</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Auto Close Notifications</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-default-ac">Default</button>
                  <button type="button" class="btn btn-info" id="btn-info-ac">Info</button>
                  <button type="button" class="btn btn-success" id="btn-success-ac">Success</button>
                  <button type="button" class="btn btn-warning" id="btn-warning-ac">Warning</button>
                  <button type="button" class="btn btn-danger" id="btn-danger-ac">Danger</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Using the notification.hide() method</h5>
                </div>
                <div class="card-body btn-page">
                  <button type="button" class="btn btn-primary" id="btn-nt-show">Show Notification</button>
                  <button type="button" class="btn btn-danger" id="btn-nt-hide">Hide Notification</button>
                </div>
              </div>
            </div>
            {/* <!-- [ single-light ] end --> */}
          </div>
          {/* <!-- [ Main Content ] end --> */}
        </div>
      </div>
    </div>
  </section>
     <ElementFooter/>
   </>
  )
}

export default Notification