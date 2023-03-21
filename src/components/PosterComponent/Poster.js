import React from 'react'
import { Link } from 'react-router-dom';

const Poster = (props) => {
  const {isDark,id,poster_path,title}=props;
  return (
    <Link to={`/movie/${id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} 
                alt="poster"
                className="w-full h-full rounded-md"
                />
            </div>
            <h3 className={`text-sm font-medium ${isDark? "text-white" : "text-gray-700" }
            `}>{title}</h3>

            {/* <p className={`text-lg font-bold ${props.isDark? "text-white" : "text-gray-700" }
            `}>{props.subtitle}</p> */}
        </div>
    </Link>
  )
}

export default Poster