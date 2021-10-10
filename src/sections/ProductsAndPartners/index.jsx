import webIcon from "../../assets/icons/web-icon.svg";
import mobileIcon from "../../assets/icons/mobile-icon.svg";
import desktopIcon from "../../assets/icons/desktop-icon.svg";
import cloudEngrIcon from "../../assets/icons/cloud-engr-icon.svg";
import devopsIcon from "../../assets/icons/devops-icon.svg";
import cloudSecurityIcon from "../../assets/icons/cloud-security-icon.svg";
import businessIcon from "../../assets/icons/business-icon.svg";
import marketingIcon from "../../assets/icons/marketing-icon.svg";
import customIcon from "../../assets/icons/customer-icon.svg";
import polaris from "../../assets/images/Polaris.png";
import enov8 from "../../assets/images/enov8.png";
import comercio from "../../assets/images/Comercio.png";
import bulb from "../../assets/images/bulb.png";

import "./styles.css";

const ProductsAndPartners = () => {
    return (
        <>
            <div className="products-div">
                <section id="products">
                    <div className="product-icon">
                        <img src={webIcon} alt="icon" />
                        <span>Web Apps</span>
                    </div>
                    <div className="product-icon">
                        <img src={mobileIcon} alt="icon" />
                        <span>Mobile Apps</span>
                    </div>
                    <div className="product-icon">
                        <img src={desktopIcon} alt="icon" />
                        <span>Desktop Apps</span>
                    </div>
                    <div className="product-icon">
                        <img src={cloudEngrIcon} alt="icon" />
                        <span>Cloud Engr</span>
                    </div>
                    <div className="product-icon">
                        <img src={devopsIcon} alt="icon" />
                        <span>DevOps Engr</span>
                    </div>
                    <div className="product-icon">
                        <img src={cloudSecurityIcon} alt="icon" />
                        <span>Cybersecurity</span>
                    </div>
                    <div className="product-icon">
                        <img src={businessIcon} alt="icon" />
                        <span>Business Strategy</span>
                    </div>
                    <div className="product-icon">
                        <img src={marketingIcon} alt="icon" />
                        <span>Marketing Strategy</span>
                    </div>
                    <div className="product-icon">
                        <img src={customIcon} alt="icon" />
                        <span>Customer Acquisition Strategy</span>
                    </div>
                </section>
            </div>
            <section className="trusted-partners">
                <p className="trusted-partners-title">Trusted by the best in the business</p>
                <div className="trusted-partners-logos">
                    <div className="trusted-partners-logo">
                        <img src={polaris} alt="logo"/>
                    </div>
                    <div className="trusted-partners-logo">
                        <img src={enov8} alt="logo"/>
                    </div>
                    <div className="trusted-partners-logo">
                        <img src={comercio} alt="logo"/>
                    </div>
                    <div className="trusted-partners-logo">
                        <img src={bulb} alt="logo"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductsAndPartners;