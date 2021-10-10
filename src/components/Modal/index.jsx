import { useState, Fragment } from "react";
import PhoneInput from 'react-phone-number-input';
import { Dialog, Transition } from "@headlessui/react";
import saly from "../../assets/images/Saly-3.png";
import closeModal from "../../assets/icons/cancel-icon.svg";
import countryList from "../../misc/countryList.json";
import 'react-phone-number-input/style.css';
import "./styles.css";

const Modal = ({ setIsOpen }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [company, setCompany] = useState("");
    const [url, setUrl] = useState("");
    const [noEmployees, setNoEmployees] = useState("");
    const [location, setLocation] = useState();
    const [purpose, setPurpose] = useState("");

    return (
        <Transition appear show={true}>
            <Dialog
                open={true}
                onClose={() => setIsOpen(false)}
                className="modal"
            >
                <Dialog.Overlay className="overlay" />
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="modal-body">
                        <img onClick={() => setIsOpen(false)} className="close-modal" src={closeModal} alt="close" />
                        <div className="modal-info">
                            <h1>Book a meeting<br/>with us <span>today!</span></h1>
                            <img src={saly} alt="saly" />
                        </div>
                        <form className="modal-form">
                            <div className="field-block">
                                <input required type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                                <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            </div>
                            <div className="field-block field-select">
                                <input required type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} defaultCountry="NG" className="phone"/>
                            </div>
                            <div className="field-block">
                                <input required type="text" placeholder="Company Name" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                                <input required type="url" placeholder="Website URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>
                            </div>
                            <div className="field-block field-select">
                                <select value={noEmployees} onChange={(e)=>setNoEmployees(e.target.value)}>
                                    <option>Employees Capacity</option>
                                    <option value="1 - 5">1 - 5</option>
                                    <option value="5 - 10">5 - 10</option>
                                    <option value="10 - 20">10 - 20</option>
                                    <option value="20 - 50">20 - 50</option>
                                    <option value="50 - 100">50 - 100</option>
                                    <option value="100 & above">100 & above</option>
                                </select>
                                <select value={location} onChange={(e)=>setLocation(e.target.value)}>
                                    <option>Company's location</option>
                                    {
                                        countryList.map((country)=>(
                                            <option key={country.code} value={country.name}>{country.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <textarea className="field-textarea" placeholder="What are you looking to accomplish from this call?" value={purpose} onChange={(e)=>setPurpose(e.target.value)}></textarea>
                            <p>We’re committed your privacy. Telios uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time.</p>
                            <div className="modal-buttons">
                                <button className="next-button">Next</button>
                                <button onClick={() => setIsOpen(false)} className="cancel-button">Cancel</button>
                            </div>
                        </form>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

export default Modal;