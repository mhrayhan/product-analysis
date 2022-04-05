import React from 'react';
import './Review.css'
const Review = (props) => {
    const {name, review, ratings} = props.review;
    return (
        <div>
            <div className='review'>
                    <h3>{name}</h3> 
                    <p>{review}</p> 
                    <p>Ratings: {ratings} star</p>
            </div>
        </div>
    );
};

export default Review;