import { CustomButton } from "../../components/Buttons";
import howWeWork from "../../assets/images/how-we-work.png";
import whatWeDo from "../../assets/images/what-we-do.png";
import whyUs from "../../assets/images/why-us.png";

import "./styles.css";


const AboutUs = () => {
    return (
        <div id="about-us">
            <div className="how-we-work">
                <div className="how-we-work-details">
                    <h1 className="about-us-title">How we<br />work</h1>
                    <div className="how-we-work-line"></div>
                    <p className="about-us-text">We provide your business with the technologies and insights needed to remain agile and competitive in an increasingly digital world. Regardless of how amazing your idea is, if it takes you too long to deliver to the market and get actionable feedback from your users and customers, it's too little, too late. This is the new reality in the modern world of agile-based, digitally transformed disruptive products, and services.</p>
                    <CustomButton color="#FD8A1D" action={() => window.location.replace("/#brochure")}>Learn more</CustomButton>
                </div>
                <div className="how-we-work-img">
                    <img src={howWeWork} alt="how we work" />
                </div>
            </div>
            <div className="what-we-do">
                <div className="what-we-do-img">
                    <img src={whatWeDo} alt="what we do" />
                </div>
                <div className="what-we-do-details">
                    <h1 className="about-us-title">What we<br />do</h1>
                    <div className="what-we-do-line"></div>
                    <p className="about-us-text">Web, Mobile, Desktop apps — delivered as an MVP in 90 days! At Telios, our mission is simple; we help you innovate and keep you connected to the world with the best technologies! If you can think of it, then we can do it. It is our job to help you innovate. With the deployment of modern software technologies, we ensure that your business gets the edge it needs to catch up with or stay ahead of the competition. By narrowly focusing on a few core technologies, and enhancing this with a proven software development process, we have gained mastery of our craft and are able to back up our word — your MVP in 90 days, guaranteed. Web Apps, Mobile Apps, Desktop Apps, Automation solutions like chatbots, web scrapers, AI / ML - driven solutions, blockchain - based products and services, IoT driven solutions, and ETL / ELT pipelines — we do it all!</p>
                    <CustomButton color="#4A2388" action={() => window.location.replace("/#brochure")}>Learn more</CustomButton>
                </div>
            </div>
            <div className="why-us">
                <div className="why-us-details">
                    <h1 className="about-us-title">Why us?</h1>
                    <div className="how-we-work-line"></div>
                    <p className="about-us-text">Telios Support Services LTD is a leading IT firm with a distributed engineering team operating out of Lagos, Nigeria. We improve businesses across the globe by providing end-to-end IT solutions through our expertise in Cybersecurity, Digital Transformation, Cloud Engineering, MS SharePoint, and DevOps.</p>
                    <CustomButton color="#FD8A1D" action={() => window.location.replace("/#brochure")}>Learn more</CustomButton>
                </div>
                <div className="how-we-work-img">
                    <img src={whyUs} alt="how we work" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;