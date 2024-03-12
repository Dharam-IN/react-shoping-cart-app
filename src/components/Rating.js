import React from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Rating = ({rating, style, onClick}) => {
  return (
    <>
        {[...Array(5)].map((_, i) => (
            <span key={i} onClick={() => onClick(i + 1)} style={style}>
                {
                    rating > i ? <FaStar /> : <CiStar />
                }
            </span>
        ))}
        
    </>
  )
}

export default Rating