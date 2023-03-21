import React from 'react'
import FooterComponent from '../components/footer/FooterComponent'
import MovieNavbarComponent from '../components/Navbar/MovieNavbarComponent'

const MovieLayout = 
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    <MovieNavbarComponent/>
                    <Component {...props} />
                    <FooterComponent/>
                </>
            )
        }

export default MovieLayout