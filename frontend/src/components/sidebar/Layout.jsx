// components/Layout.js
import React, { useState } from 'react';
// import Sidebar from './sidebar/Sidebar';
// import Header from './Header';
// import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className={`app-container ${isSidebarVisible ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <Sidebar isVisible={isSidebarVisible} />
                <Header onToggleSidebar={toggleSidebar} />
                <div className="pc-container">
                    <div className="pc-content">
                        {children}
                    </div>
                </div>
                <Footer />
        </div>
    );
};

export default Layout;
