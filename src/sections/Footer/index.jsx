import teliosLogo from "../../assets/images/telios-logo.png";
import "./styles.css";

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-contact" id="contact-us">
                <img src={teliosLogo} alt="telios logo" onClick={() => window.location.replace("/")} />
                <address>
                    144, Kudirat Abiola way,<br />
                    Ikeja, Lagos. <br />
                    Nigeria.
                </address>
                <p>09034906171, 07067521064</p>
                <div className="footer-socials">

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