import React from 'react'

const ElementFooter = () => {
  return (
   <>
     {/* <!-- [ footer apps ] start --> */}
  <footer class="footer bg-dark text-white">
      <div class="top-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img src="../src/assets/images/logo-white.svg" alt="image" class="img-fluid mb-3"/>
              <p>Since 2017, More than 50K+ Developers trust the CodedThemes Digital Product. Mantis is Manage under their Experienced Team Players.</p>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-sm-4 my-3 my-sm-0">
                    <h5 class="mb-4 text-white">Company</h5>
                    <ul class="list-unstyled footer-link">
                        <li><a href="#" target="_blank">About</a></li>
                        <li><a href="#" target="_blank">Blog</a></li>
                        <li><a href="#" target="_blank">Team</a></li>
                        <li><a href="#" target="_blank">Free Version</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 my-3 my-sm-0">
                    <h5 class="mb-4 text-white">Help & Support</h5>
                    <ul class="list-unstyled footer-link">
                        <li><a href="#" target="_blank">Documentation</a></li>
                        <li><a href="#" target="_blank">Contact us</a></li>
                        <li><a href="#" target="_blank">Support</a></li>
                        <li><a href="#" target="_blank">RoadMap</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 my-3 my-sm-0">
                    <h5 class="mb-4 text-white">Useful Resources</h5>
                    <ul class="list-unstyled footer-link">
                        <li><a href="#" target="_blank">Terms & Condition</a></li>
                        <li><a href="#" target="_blank">Privacy Policy</a></li>
                        <li><a href="#" target="_blank">Licencse</a></li>
                        <li><a href="#" target="_blank">FAQ</a></li>
                    </ul>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="container">
          <div class="row align-items-center">
            <div class="col my-1">
              <p class="text-white mb-0">© Made with love by Team CodedThemes</p>
            </div>
            <div class="col-auto my-1">
              <ul class="list-inline footer-sos-link mb-0">
                <li class="list-inline-item"><a href="https://fb.com/codedthemes"><i class="ph-duotone ph-facebook-logo f-20"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  {/* <!-- [ footer apps ] End --> */}
   </>
  )
}

export default ElementFooter