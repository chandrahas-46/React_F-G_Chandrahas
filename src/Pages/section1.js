import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from "../Styles/section1.module.css";
import image from "../Styles/success.jpg";

const AromaticBarFeedbackForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: '',
        serviceQuality: '',
        beverageQuality: '',
        restaurantCleanliness: '',
        diningExperience: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleClose = () => {
        setSubmitted(false);
        setFormData({
            customerName: '',
            email: '',
            phone: '',
            serviceQuality: '',
            beverageQuality: '',
            restaurantCleanliness: '',
            diningExperience: ''
        });
        setErrors({});
    };

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!formData.customerName) {
            formErrors.customerName = "Please enter the value of the above field";
            valid = false;
        }
        if (!formData.email) {
            formErrors.email = "Please enter the value of the above field";
            valid = false;
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Please enter the valid email address";
            valid = false;
        }
        if (!formData.phone) {
            formErrors.phone = "Please enter the value of the above field";
            valid = false;
        }
        // else if (!/^\d{10}$/.test(formData.phone)) 
        else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
            formErrors.phone = "Please enter the valid phone number";
            valid = false;
        }
        if (!formData.serviceQuality) {
            formErrors.serviceQuality = "Please enter the value of the above field";
            valid = false;
        }
        if (!formData.beverageQuality) {
            formErrors.beverageQuality = "Please enter the value of the above field";
            valid = false;
        }
        if (!formData.restaurantCleanliness) {
            formErrors.restaurantCleanliness = "Please enter the value of the above field";
            valid = false;
        }
        if (!formData.diningExperience) {
            formErrors.diningExperience = "Please enter the value of the above field";
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];
            feedbackData.push(formData);
            localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
            setSubmitted(true);
        }
    };

    return (
        <>
        {submitted ? (
            <div className={styles.thank_you_message}>
                <img src={image} alt='success' className={styles.success_image} />
                <p><b>Thank you for completing the information</b></p>
                <p>We will work towards improving your experience</p>
                <button onClick={handleClose} className={styles.close_button}>Close</button>
            </div>
        ) : (
        <div className={styles.form_container}>
            <div className={styles.part1}>
                {submitted ? (
                    null
                ) : (
                    <>
                    <h2>Aromatic Bar</h2>
                    <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
                </>)}
            </div>
            
            <div className={styles.part2}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_left}>
                            <div className={styles.form_group}>
                                <label>Customer Name<span className={styles.required}>*</span></label>
                                <input
                                    type="text"
                                    name="customerName"
                                    placeholder="E.g. Jon Snow"
                                    value={formData.customerName}
                                    onChange={handleChange}
                                />
                                {errors.customerName && <span className={styles.error}>{errors.customerName}</span>}
                            </div>
                            <div className={styles.form_group}>
                                <label>Phone<span className={styles.required}>*</span></label>
                                <PhoneInput
                                    className={styles.phone_input}
                                    country={'in'}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    inputStyle={{ width: '100%', paddingLeft: '50px' }}
                                    containerStyle={{ marginBottom: '15px' }}
                                    placeholder="9999999999"
                                />
                                {/* <label>Phone<span className={styles.required}>*</span></label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="9999999999"
                                    value={formData.phone}
                                    onChange={handleChange}
                                /> */}

                                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                            </div>
                        </div>

                        <div className={styles.form_right}>
                            <div className={styles.form_group}>
                                <label>Email<span className={styles.required}>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E.g. abc@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                            </div>
                        </div>

                        <div className={styles.form_left}>
                            <div className={styles.form_group}>
                                <label>Please rate the quality of the service you received from your host:<span className={styles.required}>*</span></label>
                                <div className={styles.options}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="serviceQuality"
                                            value="Excellent"
                                            checked={formData.serviceQuality === 'Excellent'}
                                            onChange={handleChange}
                                        /> Excellent
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="serviceQuality"
                                            value="Good"
                                            checked={formData.serviceQuality === 'Good'}
                                            onChange={handleChange}
                                        /> Good
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="serviceQuality"
                                            value="Fair"
                                            checked={formData.serviceQuality === 'Fair'}
                                            onChange={handleChange}
                                        /> Fair
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="serviceQuality"
                                            value="Bad"
                                            checked={formData.serviceQuality === 'Bad'}
                                            onChange={handleChange}
                                        /> Bad
                                    </label>
                                </div>
                                {errors.serviceQuality && <span className={styles.error}>{errors.serviceQuality}</span>}
                            </div>
                            <div className={styles.form_group}>
                                <label>Was our restaurant clean?<span className={styles.required}>*</span></label>
                                <div className={styles.options}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="restaurantCleanliness"
                                            value="Excellent"
                                            checked={formData.restaurantCleanliness === 'Excellent'}
                                            onChange={handleChange}
                                        /> Excellent
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="restaurantCleanliness"
                                            value="Good"
                                            checked={formData.restaurantCleanliness === 'Good'}
                                            onChange={handleChange}
                                        /> Good
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="restaurantCleanliness"
                                            value="Fair"
                                            checked={formData.restaurantCleanliness === 'Fair'}
                                            onChange={handleChange}
                                        /> Fair
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="restaurantCleanliness"
                                            value="Bad"
                                            checked={formData.restaurantCleanliness === 'Bad'}
                                            onChange={handleChange}
                                        /> Bad
                                    </label>
                                </div>
                                {errors.restaurantCleanliness && <span className={styles.error}>{errors.restaurantCleanliness}</span>}
                            </div>
                        </div>

                        <div className={styles.form_right}>
                            
                            <div className={styles.form_group}>
                                <label>Please rate the quality of your beverage:<span className={styles.required}>*</span></label>
                                <div className={styles.options}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="beverageQuality"
                                            value="Excellent"
                                            checked={formData.beverageQuality === 'Excellent'}
                                            onChange={handleChange}
                                        /> Excellent
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="beverageQuality"
                                            value="Good"
                                            checked={formData.beverageQuality === 'Good'}
                                            onChange={handleChange}
                                        /> Good
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="beverageQuality"
                                            value="Fair"
                                            checked={formData.beverageQuality === 'Fair'}
                                            onChange={handleChange}
                                        /> Fair
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="beverageQuality"
                                            value="Bad"
                                            checked={formData.beverageQuality === 'Bad'}
                                            onChange={handleChange}
                                        /> Bad
                                    </label>
                                </div>
                                {errors.beverageQuality && <span className={styles.error}>{errors.beverageQuality}</span>}
                            </div>
                            <div className={styles.form_group}>
                                <label>Please rate your overall dining experience:<span className={styles.required}>*</span></label>
                                <div className={styles.options}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="diningExperience"
                                            value="Excellent"
                                            checked={formData.diningExperience === 'Excellent'}
                                            onChange={handleChange}
                                        /> Excellent
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="diningExperience"
                                            value="Good"
                                            checked={formData.diningExperience === 'Good'}
                                            onChange={handleChange}
                                        /> Good
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="diningExperience"
                                            value="Fair"
                                            checked={formData.diningExperience === 'Fair'}
                                            onChange={handleChange}
                                        /> Fair
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="diningExperience"
                                            value="Bad"
                                            checked={formData.diningExperience === 'Bad'}
                                            onChange={handleChange}
                                        /> Bad
                                    </label>
                                </div>
                                {errors.diningExperience && <span className={styles.error}>{errors.diningExperience}</span>}
                            </div>
                        </div>
                        <button type="submit" className={styles.submit_button}>Submit Review</button>
                    </form>
                
            </div>
        </div>
        )}
        </>
    );
};

export default AromaticBarFeedbackForm;
