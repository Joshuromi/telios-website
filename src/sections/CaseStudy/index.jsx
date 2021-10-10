import casestudyCartoon from "../../assets/images/casestudy-cartoon.png";
import "./styles.css";

const CaseStudy = () => {
    return (
        <div className="case-study-div">
            <div className="case-study-cartoon">
                <img src={casestudyCartoon} alt="cartoon" />
            </div>
            <section id="case-study">
                <div className="case-study-info">
                    <h1>DevOps for leading Nigerian Bank</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
            </section>
            <div className="testimonials">
                <div className="testimonials-text">
                    <h1>Testimonials</h1>
                    <p>These are what people have said about us</p>
                </div>
                <div className="testimonials-div">
                    <div className="testimonial-2 testimonial-bg">
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will.</p>
                        <span>Demilade Balogun</span>
                        <p>UI/UX Designer at The Bulb Africa</p>
                    </div>
                    <div className="testimonial-1 testimonial-bg">
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will.</p>
                        <span>Demilade Balogun</span>
                        <p>UI/UX Designer at The Bulb Africa</p>
                    </div>
                    <div className="testimonial-3 testimonial-bg">
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will.</p>
                        <span>Demilade Balogun</span>
                        <p>UI/UX Designer at The Bulb Africa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;