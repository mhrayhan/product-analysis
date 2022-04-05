import React from 'react';
import useReviews from '../../hooks/UseReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>Customer Says</h2>
            <div className='review-container'>
                {
                reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;