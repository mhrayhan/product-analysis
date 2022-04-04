import React from 'react';
import useReviews from '../../hooks/UseReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2>Reviews</h2>
            {
                reviews.map(review => <div>
                    <h2>Name: {review.name}</h2> <p>{review.review}</p> <p>Ratings: {review.ratings}</p>
                </div>)
            }
        </div>
    );
};

export default Reviews;