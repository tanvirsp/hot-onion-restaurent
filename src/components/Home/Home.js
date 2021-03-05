import React, { useEffect, useState } from 'react';
import backgroundImage from '../../images/bannerbackground.png'
import allFoods from '../fakeData';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Home.css'

const Home = () => {
    const [category, setCategory] = useState('lunch')
    const [food, setFood] = useState([]);
    
    useEffect(()=>{
        const selectedCategory = allFoods.filter(foodItem => foodItem.category === category.toLowerCase());
        setFood(selectedCategory);
    } ,[category])

    


    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} className="heroBanner" >
                <div>
                    <h1>Best food waiting for your belly</h1>
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search food items" id=""/>
                        <button className="search-btn">Search</button>
                    </div>
                </div>

            </div>
            <div className="container">
                
                <div className="row">
                    <div className="col"> 
                        <div className="categoryBtn">
                            <button onClick={() =>setCategory('breakfast')}>Breakfast</button>
                            <button onClick={() =>setCategory('lunch')}>Lunch</button>
                            <button onClick={() =>setCategory('dinner')}>Dinner</button>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    {
                       food.map(food => <SingleProduct food ={food} key ={food.id}></SingleProduct>)
                    }
                    
                </div>
                <div>
                    <button className="btn btn-success">Checkout Your Food</button>
                </div>
               
                
                
            </div>
        </div>
    );
};

export default Home;