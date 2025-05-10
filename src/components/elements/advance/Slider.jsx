import React from 'react'
// import { tns } from 'tiny-slider/src/tiny-slider';
// import 'tiny-slider/src/tiny-slider.scss';
import ElementHeader from '../ElementHeader'
import ElementFooter from '../ElementFooter'
import ElementSidebar from '../ElementSidebar'

const Slider = () => {
//     useEffect(() => {
//   const slider = tns({
//     container: '.customize',
//     items: 1,
//     slideBy: 'page',
//     autoplay: true,
//   });
// }, []);
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
              <h2>Slider</h2>
              <p class="text-muted">tiny-slider works with static content and it works in the browser only. If the HTML is loaded dynamically.</p>
              <div>
                <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="http://ganlanyuan.github.io/tiny-slider/demo/">
                  <i class="ti ti-external-link me-1"></i>
                  Reference
                </a>
              </div>
            </div>

          </div>
          {/* <!-- [ Main Content ] start --> */}
          <div class="row">
            {/* <!-- [ rangeslider ] start --> */}
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Slider1</h5>
                </div>
                <div class="card-body">
                  <div class="slider1 owl-carousel owl-theme">
                    <div class="item">
                      <img src="../src/assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid"/>
                    </div>
                    <div class="item">
                      <img src="../src/assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid"/>
                    </div>
                    <div class="item">
                      <img src="../src/assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Vertical</h5>
                </div>
                <div class="card-body">
                  <div class="slider2 owl-carousel owl-theme">
                    <div class="item">
                      <img src="../src/assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid"/>
                    </div>
                    <div class="item">
                      <img src="../src/assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid"/>
                    </div>
                    <div class="item">
                      <img src="../src/assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Customize</h5>
                </div>
                <div class="card-body">
                  <div id="slider3">
                    <div class="customize" id="customize">
                      <div>
                        <div>
                          <img src="../src/assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid"/>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="../src/assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid"/>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="../assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid"/>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="../src/assets/images/slider/img-slide-4.jpg" alt="" class="img-fluid"/>
                        </div>
                      </div>
                    </div>
                    <div class="customize-tools">
                      <ul class="thumbnails" id="customize-thumbnails">
                        <li>
                          <img src="../src/assets/images/slider/img-slide-1.jpg" alt=""/>
                        </li>
                        <li>
                          <img src="../src/assets/images/slider/img-slide-2.jpg" alt=""/>
                        </li>
                        <li>
                          <img src="../src/assets/images/slider/img-slide-3.jpg" alt=""/>
                        </li>
                        <li>
                          <img src="../src/assets/images/slider/img-slide-4.jpg" alt=""/>
                        </li>
                      </ul>
                      <ul class="controls" id="customize-controls">
                        <li class="prev">
                          <i class="feather icon-chevron-left"></i>
                        </li>
                        <li class="next">
                          <i class="feather icon-chevron-right"></i>
                        </li>
                      </ul>
                      <div class="playbutton-wrapper">
                        <button id="customize-toggle">Pause</button>
                      </div>
                    </div>
                  </div>
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
   <ElementFooter/>
   </>
  )
}

export default Slider