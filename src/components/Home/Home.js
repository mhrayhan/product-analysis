import React from 'react';
import useReviews from '../../hooks/UseReviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1>home</h1>
            {
                reviews.slice(0, 3).map(review => <div>
                    <h2>Name: {review.name}</h2> <p>{review.review}</p> <p>Ratings: {review.ratings}</p>
                </div>)
            }
        </div>
    );
};

export default Home;