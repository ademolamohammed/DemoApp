import React from 'react';

import { Container } from "react-bootstrap";
import Footer from "./footer/footer";
import Header from './header/headerNav'


const Layout:React.FC<{children:React.ReactNode}>  = ( {children} ) => {
  return (
    <div className="row g-0">
        <Header />
            {children}
        <Footer/>
    </div>
  );
};

export default Layout;