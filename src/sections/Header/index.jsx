import { CustomButton } from "../../components/Buttons";
import introCartoon from "../../assets/images/intro-catoon.png";
import "./styles.css";

const Header = ({ setIsOpen }) => {
    return (
        <div className="header-div">
            <section id="header">
                <div className="intro">
                    <main className="intro-text">World class<br />software in 90 days, <span>guaranteed!</span></main>
                    <div className="intro-buttons">
                        <button className="intro-consult-button" onClick={()=>setIsOpen(true)}>Book Consultation</button>
                        <CustomButton color="#FD8A1D" action={() => window.location.replace("/#brochure")}>Download our brochure</CustomButton>
                    </div>
                </div>
                <div className="intro-img-div">
                    <img src={introCartoon} alt="intro cartoon" />
                </div>
            </section>
        </div>
    )
}

export default Header;