import React, { useEffect } from 'react'
import Footer from '../Footer'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'

const MapVector = () => {
    useEffect(() => {
        const loadScript = (src) =>
          new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
    
        // Load scripts in order
        async function loadAllScripts() {
          try {
            await loadScript('/src/assets/js/plugins/jsvectormap.min.js');
            await loadScript('/src/assets/js/plugins/world.js');
            await loadScript('/src/assets/js/plugins/world-merc.js');
            await loadScript('/src/assets/js/pages/canada.js');
            await loadScript('/src/assets/js/pages/iraq.js');
            await loadScript('/src/assets/js/pages/italy.js');
            await loadScript('/src/assets/js/pages/russia.js');
            await loadScript('/src/assets/js/pages/spain.js');
            await loadScript('/src/assets/js/pages/us-aea-en.js');
            await loadScript('/src/assets/js/pages/us-lcc-en.js');
            await loadScript('/src/assets/js/pages/us-merc-en.js');
            await loadScript('/src/assets/js/pages/us-mill-en.js');
            await loadScript('/src/assets/js/pages/map-vector.js'); // initializer
          } catch (error) {
            console.error('Script load error:', error);
          }
        }
    
        loadAllScripts();
      }, []);
      
  return (
   <>
   <Sidebar/>
   <Header/>
   <div class="pc-container">
      <div class="pc-content">
        {/* <!-- [ breadcrumb ] start --> */}
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
                  <li class="breadcrumb-item"><a href="javascript: void(0)">Maps</a></li>
                  <li class="breadcrumb-item" aria-current="page">Vector Map</li>
                </ul>
              </div>
              <div class="col-md-12">
                <div class="page-header-title">
                  <h2 class="mb-0">Vector Map</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- [ breadcrumb ] end --> */}

        {/* <!-- [ Main Content ] start --> */}
        <div class="row">
          {/* <!-- [ Basic-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>Basic Map With Markers</h5>
                  </div>
                  <div class="card-body">
                      <div id="world-map-markers" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ Basic-Map ] end --> */}
          {/* <!-- [ world-merc-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>world [merc] Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="world-merc" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ world-merc-Map ] end --> */}
          {/* <!-- [ Canada-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>Canada Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="canada" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ Canada-Map ] end --> */}
          {/* <!-- [ iraq-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>iraq Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="iraq" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ iraq-Map ] end --> */}
          {/* <!-- [ italy-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>italy Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="italy" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ italy-Map ] end --> */}
          {/* <!-- [ russia-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>russia Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="russia" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ russia-Map ] end --> */}
          {/* <!-- [ spain-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>spain Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="spain" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ spain-Map ] end --> */}
          {/* <!-- [ us-aea-en-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-aea-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-aea-en" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ us-aea-en-Map ] end --> */}
          {/* <!-- [ us-lcc-en-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-lcc-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-lcc-en" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ us-lcc-en-Map ] end --> */}
          {/* <!-- [ us-merc-en ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-merc-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-merc-en" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ us-merc-en-Map ] end --> */}
          {/* <!-- [ us-mill-en-Map ] start --> */}
          <div class="col-md-6 col-sm-12">
              <div class="card">
                  <div class="card-header">
                      <h5>us-mill-en Map</h5>
                  </div>
                  <div class="card-body">
                      <div id="us-mill-en" class="set-map" style={{height:"400px"}}></div>
                  </div>
              </div>
          </div>
          {/* <!-- [ us-mill-en-Map ] end --> */}
        </div>
        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default MapVector