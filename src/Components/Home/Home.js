import React from 'react';
import './Home.css';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-title">
                    <h3 className="home-title-text">Bienvenidos a Puerto Meraki</h3>
                    <p className="home-title-container-icon"><HiOutlineChevronDoubleDown className="home-title-icon animate__animated animate__fadeInDown animate__infinite infinite" /></p>
                </div>
            </div>
        </div>
    )
}

export default Home
