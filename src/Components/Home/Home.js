import React from 'react';
import "./Home.css";
import home from '../../assets/images/home-pic.jpg';

const Home = ({greetingHome}) => {
    return (
        <div className="body-home">
            <h3 className="home-title"><span className="home-title-text">{greetingHome}</span></h3>
            <img className="home-img" src={home} alt="Cuadros - Puerto Meraki" />             
        </div>
    )
}

export default Home;
