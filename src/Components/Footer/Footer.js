import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer-data">
            <p className="footer-title">Puerto Meraki</p>
            <p className="footer-text"><FaWhatsapp /> 15-2222-5555 - ejemplo@mail.com</p>
            <div className="footer-media-container">
                <a href="https://instagram.com/puertomeraki?utm_medium=copy_link" target="blank" title="Facebook" className="footer-icon icon-facebook"><FaFacebookF className="icon" /></a>
                <a href="https://instagram.com/puertomeraki?utm_medium=copy_link" target="blank" title="Instagram" className="footer-icon icon-instagram"><GrInstagram className="icon" /></a>
                <a href="mailto:ejemplo@mail.com" target="blank" title="Email" className="footer-icon icon-mail"><FaRegEnvelope className="icon" /></a>
            </div>
            <p className="footer-copyright"> <MdCopyright /> Copyright 2021 - Puerto Meraki</p>
        </div>
    );  
};

export default Footer;