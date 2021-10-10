
import "./styles.css";

const Brochure = () => {
    return (
        <section id="brochure">
            <div className="brochure-div">
                <h1>Download Our Brochure</h1>
                <p>Be a part of us and get more information when you download our brochure</p>
                <form className="brochure-form">
                    <input type="email" placeholder="Enter your email"/>
                    <button>Download</button>
                </form>
            </div>
        </section>
    );
}

export default Brochure;