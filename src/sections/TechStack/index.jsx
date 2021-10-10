import aws from "../../assets/icons/AWS.svg";
import angular from "../../assets/icons/angular_icon.svg";
import vs from "../../assets/icons/vs-icon.svg";
import css from "../../assets/icons/css_logo.svg";
import html from "../../assets/icons/html_icon.svg";
import python from "../../assets/icons/python-icon.svg";
import react from "../../assets/icons/react native_icon.svg";
import node from "../../assets/icons/node-js.svg";
import googlePlus from "../../assets/icons/google_plus_social_icon.svg";

import "./styles.css";

const TechStack = () => {
    return (
        <section id="tech-stack">
            <div className="tech-stack-text">
                <h1>Tech <br/>Stack</h1>
                <p>Here are some of the technologies we love.</p>
            </div>
            <div className="tech-stack-icons">
                <div className="tech-stack-icon">
                    <img src={aws} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={angular} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={vs} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={css} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={html} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={python} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={react} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={node} alt="logo" />
                </div>
                <div className="tech-stack-icon">
                    <img src={googlePlus} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default TechStack;