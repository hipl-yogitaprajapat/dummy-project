import React from 'react'
import ElementHeader from '../ElementHeader'
import ElementFooter from '../ElementFooter'
import ElementSidebar from '../ElementSidebar'

const DatePicker = () => {
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
              <h2>DatePicker</h2>
              <p class="text-muted">Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style.</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://bootstrap-datepicker.readthedocs.io/en/latest/">
                  <i class="ti ti-external-link me-1"></i>
                  Reference
                </a>
              </div>
            </div>

          </div>
          {/* <!-- [ Main Content ] start --> */}
          <div class="row">
            {/* <!-- [ bootstrap-datetimepicker ] start --> */}
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Days of Week Disabled</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_week" />
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Days of Week Highlighted</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_highlight" />
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>AutoClose</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_auto" />
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>DatesDisabled</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_disable" />
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Today Highlight</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_today" />
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Calendar Weeks</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="disp_week" />
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Date Range</h5>
                </div>
                <div class="card-body">
                  <div class="input-daterange input-group" id="datepicker_range">
                    <input type="text" class="form-control text-left" placeholder="Start date" name="range-start" />
                    <input type="text" class="form-control text-end" placeholder="End date" name="range-end" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- [ bootstrap-datetimepicker ] End --> */}
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

export default DatePicker