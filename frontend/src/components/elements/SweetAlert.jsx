import React from 'react'
import ElementHeader from './ElementHeader'
import ElementFooter from './ElementFooter'
import ElementSidebar from './ElementSidebar'

const SweetAlert = () => {
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
              <h2>Sweet alert</h2>
              <p class="text-muted">A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScripts popup boxes</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://sweetalert2.github.io/">
                  <i class="ti ti-external-link me-1"></i>
                  Reference
                </a>
              </div>
            </div>

          </div>
          {/* <!-- [ Main Content ] start --> */}
          <div class="row">
            {/* <!-- [ sweetalert ] start --> */}
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Sweetalert 2</h5>
                </div>
                <div class="card-body btn-page">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Basic message</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-message">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Title with a text under</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-tit-txt">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Title with a error icon</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-danger bs-error-icon">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Long content inside</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-long-content">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Custom HTML</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-cust-html">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">dialog with three buttons</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-tre-button">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">custom positioned</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-cust-position">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Custom animation</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-cust-anim">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">By passing a parameter, you can execute
                      something</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-pass-para">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Message with a custom image</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-cust-img">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Auto close timer</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-auto-close">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">RTL Languages</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-rtl-lang">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">AJAX request</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-ajex-req">Try me!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Mixin</h5>
                </div>
                <div class="card-body btn-page">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Mixin example</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-mixin-exp">Try me!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>ICONS</h5>
                </div>
                <div class="card-body btn-page">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Success icons</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-success bs-success-ico">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Error icons</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-danger bs-error-ico">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Warning icons</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-warning bs-warning-ico">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Info icons</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-info bs-info-ico">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Question icons</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-question-ico">Try me!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Input types</h5>
                </div>
                <div class="card-body btn-page">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Text</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-text-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Email</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-email-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Url</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-url-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Password</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-password-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Textarea</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-textarea-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Select</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-select-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Radio</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-radio-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Checkbox</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-checkbox-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">File</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-file-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Range</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-range-input">Try me!</button>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-5 col-sm-12 text-lg-end">Multiple inputs</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <button class="btn btn-light-primary bs-multiple-input">Try me!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- [ sweetalert ] end --> */}
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

export default SweetAlert