import React from 'react';
import { FaFacebookF, FaRegEnvelope, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdCopyright } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid footer-data">
            <p className="footer-title"> ~ ~ ~  Puerto Meraki  ~ ~ ~</p>
            <p className="footer-text"><FaWhatsapp /> 15-2222-5555 - ejemplo@mail.com</p>
            <div className="footer-media-container">
                <a href="mailto:victorianastasi@gmail.com" target="blank" title="Email" className="footer-icon icon-mail"><FaRegEnvelope className="icon" /></a>
                <a href="https://github.com/victorianastasi/" target="blank" title="GitHub" className="footer-icon icon-github"><FaGithub className="icon" /></a>
                <a href="https://www.linkedin.com/in/victoria-nastasi-a3452910b/" target="blank" title="LinkedIn" className="footer-icon icon-linkedin"><FaLinkedinIn className="icon" /></a>
                <a href="https://instagram.com/puertomeraki?utm_medium=copy_link" target="blank" title="Facebook" className="footer-icon icon-facebook"><FaFacebookF className="icon" /></a>
                <a href="https://instagram.com/puertomeraki?utm_medium=copy_link" target="blank" title="Instagram" className="footer-icon icon-instagram"><GrInstagram className="icon" /></a>
            </div>
            <p className="footer-copyright"> <MdCopyright /> Copyright 2021 - Puerto Meraki</p>
        </footer>
    );  
};

export default Footer;