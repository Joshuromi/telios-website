import teliosLogo from "../../assets/images/telios-logo.png";
import facebook from "../../assets/icons/facebook-icon.svg";
import twitter from "../../assets/icons/tiwitter-icon.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import linkedin from "../../assets/icons/linkedIn-icon.svg";
import youtube from "../../assets/icons/youtube-icon.svg";
import "./styles.css";

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-contact" id="contact-us">
                <img className="footer-logo" src={teliosLogo} alt="telios logo" onClick={() => window.location.replace("/")} />
                <p>
                    144, Kudirat Abiola way,<br />
                    Ikeja, Lagos. <br />
                    Nigeria.
                </p>
                <p>09034906171, 07067521064</p>
                <div className="footer-socials">
                    <a href="#about-us">
                        <img src={facebook} alt="social icon" />                    
                    </a>
                    <a href="#about-us">
                        <img src={twitter} alt="social icon" />                    
                    </a>
                    <a href="#about-us">
                        <img src={instagram} alt="social icon" />                    
                    </a>
                    <a href="#about-us">
                        <img src={linkedin} alt="social icon" />                    
                    </a>
                    <a href="#about-us">
                        <img src={youtube} alt="social icon" />                    
                    </a>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-link-group">
                    <h4>About</h4>
                    <p onClick={() => window.location.replace("/#about-us")}>About Us</p>
                    <p onClick={() => window.location.replace("/#brochure")}>Meet the team</p>
                    <p onClick={() => window.location.replace("/#tech-stack")}>Tech Stack</p>
                </div>
                <div className="footer-link-group">
                    <h4>Services</h4>
                    <p>DevOps</p>
                    <p>Cybersecurity</p>
                    <p>Cloud Engineering</p>
                    <p>Business Strategy</p>
                    <p>Marketing Strategy</p>
                </div>
                <div className="footer-link-group">
                    <h4>Legals</h4>
                    <p>Term of use</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;