import React from 'react'
import Footer from '../Footer'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header'

const UserCard = () => {
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
                <li class="breadcrumb-item"><a href="javascript: void(0)">Profile</a></li>
                <li class="breadcrumb-item" aria-current="page">User Card</li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">User Card</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- [ breadcrumb ] end --> */}

      {/* <!-- [ Main Content ] start --> */}
      <div class="row">
        {/* <!-- [ sample-page ] start --> */}
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-1.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Marc Hubbard</h6>
                  <p class="text-muted text-sm mb-0">Airline Pilot</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-2.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Glen Schneider</h6>
                  <p class="text-muted text-sm mb-0">Business Manager</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-3.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Cora Fowler</h6>
                  <p class="text-muted text-sm mb-0">Dietitian</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                  App</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-4.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Evan Kelly</h6>
                  <p class="text-muted text-sm mb-0">Freelance Writer</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                  App</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Wireframing</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-5.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Marc Hubbard</h6>
                  <p class="text-muted text-sm mb-0">Airline Pilot</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-6.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Glen Schneider</h6>
                  <p class="text-muted text-sm mb-0">Business Manager</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-7.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Cora Fowler</h6>
                  <p class="text-muted text-sm mb-0">Dietitian</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                  App</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-8.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Evan Kelly</h6>
                  <p class="text-muted text-sm mb-0">Freelance Writer</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                  App</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Wireframing</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-9.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Marc Hubbard</h6>
                  <p class="text-muted text-sm mb-0">Airline Pilot</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">UX</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Backend</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-10.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Glen Schneider</h6>
                  <p class="text-muted text-sm mb-0">Business Manager</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-1.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Cora Fowler</h6>
                  <p class="text-muted text-sm mb-0">Dietitian</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                  App</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card">
            <div class="card-header">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="../src/assets/images/user/avatar-2.jpg" alt="user-image" class="wid-40 rounded-circle"/>
                </div>
                <div class="flex-grow-1 mx-3">
                  <h6 class="mb-1">Evan Kelly</h6>
                  <p class="text-muted text-sm mb-0">Freelance Writer</p>
                </div>
                <div class="dropdown">
                  <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ti ti-dots-vertical f-18"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Preview</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">Hello, Mo cebu eroul fuh omigita uf wo zuzpoza urdovwak guwmofce etsonot fufne do lecwez
                arepolet.</p>
              <div class="row g-2">
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-mail"></i>
                    <p class="mb-0 ms-2 text-truncate">bo@gmail.com</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-phone"></i>
                    <p class="mb-0 ms-2 text-truncate">+1 (247) 849-6968</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-map-pin"></i>
                    <p class="mb-0 ms-2 text-truncate">Lesotho</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-inline-flex align-items-center justify-content-start w-100">
                    <i class="ti ti-link"></i>
                    <a href="#" class="link-primary text-truncate">
                      <p class="mb-0 ms-2 text-truncate">https://anshan.dh.url</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                  App</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Wire
                  framing</span>
                <span
                  class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 text-muted">Updated in 2 min ago</p>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#user-modal">Preview</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- [ sample-page ] end --> */}
      </div>
      {/* <!-- [ Main Content ] end --> */}
    </div>
  </div>
  <div class="modal fade" id="user-modal" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex w-100 align-items-center">
            <div class="flex-shrink-0">
              <img src="../src/assets/images/user/avatar-1.jpg" alt="user-image" class="wid-50 rounded-circle"/>
            </div>
            <div class="flex-grow-1 mx-3">
              <h6 class="mb-1">Marc Hubbard</h6>
              <p class="text-muted text-sm mb-0">Airline Pilot</p>
            </div>
            <div class="dropdown">
              <a class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ti ti-dots-vertical f-18"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Share</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8">
              <div class="card">
                <div class="card-header">
                  <h5>About me</h5>
                </div>
                <div class="card-body">
                  <p class="mb-0">Hello, I’m Aaron Poole Manufacturing Director based in international company, Void
                    jiidki me na fep juih ced gihhiwi launke cu mig tujum peodpo.</p>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Personal Details</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item px-0 pt-0">
                      <div class="row">
                        <div class="col-md-6">
                          <p class="mb-1 text-muted">Full Name</p>
                          <h6 class="mb-0">Aaron Poole</h6>
                        </div>
                        <div class="col-md-6">
                          <p class="mb-1 text-muted">Father Name</p>
                          <h6 class="mb-0">Mr. Ralph Sabatini</h6>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item px-0">
                      <div class="row">
                        <div class="col-md-6">
                          <p class="mb-1 text-muted">Country</p>
                          <h6 class="mb-0">Lesotho</h6>
                        </div>
                        <div class="col-md-6">
                          <p class="mb-1 text-muted">Zip Code</p>
                          <h6 class="mb-0">247 849</h6>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item px-0 pb-0">
                      <p class="mb-1 text-muted">Address</p>
                      <h6 class="mb-0">647 Punam Center, Ulabifgu, Myanmar (Burma) - 41487</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Skills</h5>
                </div>
                <div class="card-body">
                  <span class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Web
                    App</span>
                  <span
                    class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Figma</span>
                  <span
                    class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">Javascript</span>
                  <span
                    class="badge bg-light-secondary border border-secondary bg-transparent f-14 me-1 mt-1">ES6</span>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <p class="mb-1 text-muted">Father Name</p>
                  <h6 class="mb-4">Mr. Iva Mancini</h6>
                  <p class="mb-1 text-muted">Father Name</p>
                  <h6 class="mb-4">tawguffim@gmail.com</h6>
                  <p class="mb-1 text-muted">Father Name</p>
                  <h6 class="mb-4">+1 (668) 503-4328</h6>
                  <p class="mb-1 text-muted">Father Name</p>
                  <h6 class="mb-4">British Indian Ocean Territory</h6>
                  <p class="mb-1 text-muted">Father Name</p>
                  <a href="#" class="link-primary text-truncate">
                    <span class="f-16 f-w-600 mb-0 text-truncate">https://anshan.dh.url</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- [ Main Content ] end --> */}
     <Footer/>
    </>
  )
}

export default UserCard