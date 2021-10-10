import teliosLogo from "../../assets/images/telios-logo.png";
import "./styles.css";

const Navbar = ({ setIsOpen }) => {
    const mobileMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navbar-links-div");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const closeMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navbar-links-div");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    return (
        <div id="navbar">
            <section className="nav">
                <div className="navbar-logo-div">
                    <img src={teliosLogo} alt="telios logo" onClick={() => window.location.replace("/")} />
                </div>
                <div className="navbar-links-div">
                    <ul className="navbar-links">
                        <li className="navbar-link" onClick={() => {window.location.replace("/#about-us"); closeMenu()}}>About Us</li>
                        <li className="navbar-link" onClick={() => {window.location.replace("/#case-study"); closeMenu()}}>Case Study</li>
                        <li className="navbar-link" onClick={() => {window.location.replace("/#contact-us"); closeMenu()}}>Contact Us</li>
                    </ul>
                    <div className="navbar-consult">
                        <p onClick={() => {setIsOpen(true); closeMenu()}}>Book Consultation</p>
                    </div>
                </div>
                <div className="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </section>
        </div>
    );
}

export default Navbar;