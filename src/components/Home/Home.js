import React from 'react';
import useReviews from '../../hooks/UseReviews';
import './Home.css'
import img from '../../images/drone.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home-container'>
            <div className='home'>
                <div>
                    <h1>Capture It All</h1>
                    <p>Featuring a 1-inch CMOS sensor, powerful autonomous functions, and a compact body weighing less than 600 g, DJI Air 2S is the ultimate drone for creators on the move. Take this all-in-one aerial powerhouse along anywhere to experience and record your world in stunning detail.</p>
                </div>
                <div>
                    <img src={img} alt="img" />
                    <h4>DJI Air 2S</h4>
                </div>
            </div>
                <h2 className='customer-says'>Customer Says</h2>
            <div className='reviews-container'>
                {
                reviews.slice(0, 3).map(review => 
                <div className='reviews'>
                    <h5>{review.name}</h5> 
                    <p>{review.review}</p> 
                    <p>Ratings: {review.ratings} star</p>
                </div>)
                }
            </div>
                <Link  to='/reviews'><button className='review-btn'>See All Reviews</button></Link>
        </div>
    );
};

export default Home;