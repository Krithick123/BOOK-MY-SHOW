import React from 'react'
import FooterComponent from '../components/footer/FooterComponent'
import NavbarComponent from '../components/Navbar/NavbarComponent'

const DefaultLayout =
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    <NavbarComponent/>
                    <Component {...props} />
                    <FooterComponent/>
                </>
            )
        }



export default DefaultLayout