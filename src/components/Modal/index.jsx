import { useState, Fragment } from "react";
import { init, send } from "emailjs-com";
import PhoneInput from 'react-phone-number-input';
import Calendar from 'react-calendar';
import { Dialog, Transition } from "@headlessui/react";
import saly from "../../assets/images/Saly-3.png";
import closeModal from "../../assets/icons/cancel-icon.svg";
import countryList from "../../misc/countryList.json";
import timeZones from "../../misc/timeZones.json";
import 'react-phone-number-input/style.css';
import 'react-calendar/dist/Calendar.css';
import "./styles.css";

const Modal = ({ setIsOpen }) => {
    init("user_xHuBe6ehTbyKxNpfU7gYe");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [url, setUrl] = useState("");
    const [noEmployees, setNoEmployees] = useState("");
    const [location, setLocation] = useState("");
    const [purpose, setPurpose] = useState("");
    const [date, setDate] = useState(new Date());
    const [duration, setDuration] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [time, setTime] = useState("08:30");
    const [screen, setScreen] = useState(1);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (duration.length < 1) {
            setError("How long do you need?");
            return;
        }

        if (timeZone.length < 1) {
            setError("Select a timezone");
            return;
        }

        const payload = {
            firstName,
            lastName,
            email,
            phone,
            company,
            url,
            noEmployees,
            location,
            purpose,
            date: date.toDateString(),
            duration,
            timeZone,
            time
        }

        send('service_21dxzoa', 'template_7pyg4hg', payload, 'user_xHuBe6ehTbyKxNpfU7gYe')
            .then((result) => {
                setScreen(3);
                setIsLoading(false)
            }, (error) => {
                setError("Ops! Something went wrong. Please try again.")
                setIsLoading(false)
                console.log(error.text);
            });
        
    }

    const validateForm = (e) => {
        e.preventDefault();
        setError("");
        if (firstName.length < 1) {
            setError("First name is required.");
            return;
        }

        if (lastName.length < 1) {
            setError("Last name is required.");
            return;
        }

        if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
            setError("Email is invalid");
            return;
        }

        if (!phone) {
            setError("Phone number is required.");
            return;
        }

        if (company.length < 1) {
            setError("Company name is required.");
            return;
        }

        if (!url.match(/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/)) {
            setError("Website url is invalid");
            return;
        }

        if (noEmployees.length < 1) {
            setError("Select Employees capacity");
            return;
        }

        if (location.length < 1) {
            setError("Select companies location");
            return;
        }

        if (purpose.length < 7) {
            setError("What you are looking to accomplish must be more than 6 characters");
            return;
        }
        setScreen(2);
    }


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
                            <h1>Book a meeting<br />with us <span>today!</span></h1>
                            <img src={saly} alt="saly" />
                        </div>

                        <form className="modal-form" onSubmit={submitForm}>
                            {
                                screen === 1 &&
                                <>
                                    <div className="field-block">
                                        <input required type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="field-block field-select">
                                        <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} defaultCountry="NG" className="phone" />
                                    </div>
                                    <div className="field-block">
                                        <input required type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} />
                                        <input required type="url" placeholder="Website URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                                    </div>
                                    <div className="field-block field-select">
                                        <select value={noEmployees} onChange={(e) => setNoEmployees(e.target.value)}>
                                            <option value={0}>Employees Capacity</option>
                                            <option value="1 - 5">1 - 5</option>
                                            <option value="5 - 10">5 - 10</option>
                                            <option value="10 - 20">10 - 20</option>
                                            <option value="20 - 50">20 - 50</option>
                                            <option value="50 - 100">50 - 100</option>
                                            <option value="100 & above">100 & above</option>
                                        </select>
                                        <select value={location} onChange={(e) => setLocation(e.target.value)}>
                                            <option value={0}>Company's location</option>
                                            {
                                                countryList.map((country) => (
                                                    <option key={country.code} value={country.name}>{country.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <textarea className="field-textarea" placeholder="What are you looking to accomplish from this call?" value={purpose} onChange={(e) => setPurpose(e.target.value)}></textarea>
                                    <p>We’re committed your privacy. Telios uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time.</p>
                                    {
                                        error && <p className="error">{`*${error}`}</p>
                                    }
                                    <div className="modal-buttons">
                                        <button onClick={() => setIsOpen(false)} className="cancel-button">Cancel</button>
                                        <button onClick={(e) => validateForm(e)} className="next-button">Next</button>
                                    </div>
                                </>
                            }
                            {
                                screen === 2 &&
                                <>
                                    <h3>Please choose a date.</h3>
                                    <Calendar value={date} onChange={setDate} minDate={new Date()} />
                                    <div className="field-block field-select">
                                        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                                            <option value={0}>How long do you need?</option>
                                            <option value="15 minutes">15 minutes</option>
                                            <option value="30 minutes">30 minutes</option>
                                            <option value="1 hour">1 hour</option>
                                        </select>
                                        <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
                                            <option value={0}>Select a timezone</option>
                                            {
                                                timeZones.map((timezone) => (
                                                    <option key={timezone} value={timezone}>{timezone}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="field-block time-field">
                                        <label>Enter a Time</label>
                                        <input required type="time" placeholder="Enter a time" value={time} onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                    {
                                        error && <p className="error">{`*${error}`}</p>
                                    }
                                    <div className="modal-buttons">
                                        <button onClick={() => setScreen(1)} className="cancel-button">Back</button>
                                        <button type="submit" className="next-button">{isLoading ? "Loading..." : "Confirm"}</button>
                                    </div>
                                </>
                            }
                            {
                                screen === 3 &&
                                <div className="booking-confirmation">
                                    <div className="booking">
                                        <h1>Booking confirmed!</h1>
                                        <p>An invitation has been emailed to you</p>
                                        <h3>Date: {date.toDateString()}</h3>
                                        <h3>Time: {`${time} ${timeZone}`}</h3>
                                    </div>
                                    <div className="modal-buttons" >
                                        <button onClick={() => setIsOpen(false)} className="cancel-button">Close</button>
                                    </div>
                                </div>
                            }
                        </form>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

export default Modal;