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
                        <p>The Telios team is simply outstanding. They understood what we wanted to do even though they aren't experts in our field. They helped us to finetune our product idea, this helped us realize we needed funding to build it. We will definitely turn to them to help us build the product after we raise funds. I highly recommend them.</p>
                        <span>Anthony Johnston</span>
                        <p>cofounder FFinery Technologies LLC</p>
                    </div>
                    <div className="testimonial-1 testimonial-bg">
                        <p>Telios helped define a cloud migration plan for all our onprem software products. They built the AWS cloud infrastructure, trained our tech team and led a successful migration. This project saved us hundreds of dollars in monthly bills and helped us to scale an important product for on of our main clients. Telios team is top notch.</p>
                        <span>Mike Owokade</span>
                        <p>COO Enov8 Solutions LTD</p>
                    </div>
                    <div className="testimonial-3 testimonial-bg">
                        <p>When we first met the Telios team we were a bit skeptical, they were relatively unkown and we weren't sure they could pull off the DevOps project. The kickoff meeting quickly put us at ease, we were deeply impressed by the depth of their technical understading and ability to communicate clearly. The project was a success and we look forward to more engagements. Telios is the best.</p>
                        <span>Agang Magaji</span>
                        <p>Infrastructure Lead Polaris Bank LTD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;