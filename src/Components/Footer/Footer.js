import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer-data">
            <p className="footer-title">Puerto Meraki</p>
            <p className="footer-text"><i class="fab fa-whatsapp"></i> 15-2222-5555 - ejemplo@mail.com</p>
            <div className="footer-media-container">
                <a href="https://instagram.com/puertomeraki?utm_medium=copy_link" target="blank" title="Facebook" className="footer-icon icon-facebook"><i className="fab fa-facebook-f icon"></i></a>
                <a href="https://instagram.com/puertomeraki?utm_medium=copy_link" target="blank" title="Instagram" className="footer-icon icon-instagram"><i className="fab fa-instagram icon"></i></a>
                <a href="mailto:ejemplo@mail.com" target="blank" title="Email" className="footer-icon icon-mail"><i className="far fa-envelope icon"></i></a>
            </div>
            <p className="footer-copyright"><i className="far fa-copyright"></i> Copyright 2021 - Puerto Meraki</p>
        </div>
    );  
};

export default Footer;