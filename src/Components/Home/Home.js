import React from 'react';
import "./Home.css";
import home from '../../assets/images/home-pic.jpg';

const Home = ({greetingHome}) => {
    return (
        <div className="container-fluid body-bg body-home">
            <h3 className="home-title">{greetingHome}</h3>
            <img src={home} alt="Cuadros - Puerto Meraki" className="home-img" />
        </div>
    )
}

export default Home;
