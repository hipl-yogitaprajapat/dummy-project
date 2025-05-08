// import React from 'react'
// import Header from './Header'

// const Chart = () => {
//   return (
//   <Header/>
//   )
// }

// export default Chart

import React, { useEffect, useState } from 'react';
// import ClipboardJS from 'clipboard';

const icon_list = [
  'ti-2fa',
  'ti-3d-cube-sphere',
  'ti-a-b',
  // ... add more icons
];

const Icons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

//   useEffect(() => {
//     const clipboard = new ClipboardJS('.i-block');

//     clipboard.on('success', (e) => {
//       const index = e.trigger.getAttribute('data-index');
//       setCopiedIndex(index);
//       setTimeout(() => setCopiedIndex(null), 3000);
//     });

//     clipboard.on('error', (e) => {
//       console.error('Clipboard error:', e);
//     });

//     return () => clipboard.destroy();
//   }, []);

  const filteredIcons = icon_list.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h5 className="m-b-10">Tabler Icons</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Icons</a></li>
                  <li className="breadcrumb-item" aria-current="page">Tabler Icons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Tabler</h5>
                <p>Use icon with <code>&lt;i class="&lt;&lt; Copied code &gt;&gt;"&gt;</code> in your HTML code</p>
              </div>
              <div className="card-body text-center">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="icon-search"
                      className="form-control mb-4"
                      placeholder="search . . "
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="i-main d-flex flex-wrap justify-content-center gap-3" id="icon-wrapper">
                  {filteredIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="i-block d-flex flex-column align-items-center p-2"
                      data-clipboard-text={`ti ${icon}`}
                      data-index={index}
                      title={`ti ${icon}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className={`ti ${icon}`} style={{ fontSize: '24px' }}></i>
                      {copiedIndex == index && (
                        <span className="ic-badge badge bg-success mt-2">Copied</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Icons;
