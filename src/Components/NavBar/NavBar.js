import './NavBar.css';
import logopm from '../../assets/images/logo-pm.png';

const NavBar = () => {
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="../../../../public/index.html">
                <img src={logopm} className="logo-pm" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="../../../../public/index.html">Quienes Somos</a>
                    <a className="nav-item nav-link" href="../../../../public/index.html">Productos</a>
                    <a className="nav-item nav-link" href="../../../../public/index.html">Como comprar</a>
                    <a className="nav-item nav-link" href="../../../../public/index.html">Contacto</a>
                </div>
            </div>
        </nav>
    );  
};

export default NavBar;