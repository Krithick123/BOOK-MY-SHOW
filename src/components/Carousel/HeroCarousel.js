import React, { useState } from 'react'
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from "./Arrow";
const HeroCarousel = () => {
  const [images,setImages]=useState([ {
    adult: false,
    backdrop_path: "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
    genre_ids: [16, 878, 28],
    id: 610150,
    original_language: "ja",
    original_title: "ドラゴンボール超 スーパーヒーロー",
    overview:
      "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    popularity: 5953.989,
    poster_path: "/yYwKZWeCMluIXgfClxdcg8jqHV6.jpg",
    release_date: "2022-06-11",
    title: "Dragon Ball Super: Super Hero",
    video: false,
    vote_average: 8,
    vote_count: 1426,
  },
  {
    adult: false,
    backdrop_path: "/2E6pIbJien7B9yWpaz8Yd2njzUI.jpg",
    genre_ids: [53],
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
    popularity: 6731.327,
    poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.4,
    vote_count: 346,
  },
{
  backdrop_path:"/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg"
}]);
  const settingsLG ={
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // autoplay: true,
  speed: 2000,
  // autoplaySpeed: 2000,
  cssEase: "linear"
}

const settings ={
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // autoplay: true,
  speed: 2000,
  // autoplaySpeed: 2000,
  cssEase: "linear"
}

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images,index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
        
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images,index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );

}

export default HeroCarousel