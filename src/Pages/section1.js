import React, { useState } from 'react';
import styles from "../Styles/section1.module.css";

const AromaticBarFeedbackForm = () => {
    const [formData, setFormData] = useState([{
        customerName: '',
        email: '',
        phone: '',
        serviceQuality: '',
        beverageQuality: '',
        restaurantCleanliness: '',
        diningExperience: ''
    }]);

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!formData.customerName) {
            formErrors.customerName = "Customer Name is required";
            valid = false;
        }
        if (!formData.email) {
            formErrors.email = "Email is required";
            valid = false;
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
            valid = false;
        }
        if (!formData.phone) {
            formErrors.phone = "Phone number is required";
            valid = false;
        }
        else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Phone number is invalid";
            valid = false;
        }
        if (!formData.serviceQuality) {
            formErrors.serviceQuality = "Rating is required";
            valid = false;
        }
        if (!formData.beverageQuality) {
            formErrors.beverageQuality = "Rating is required";
            valid = false;
        }
        if (!formData.restaurantCleanliness) {
            formErrors.restaurantCleanliness = "Rating is required";
            valid = false;
        }
        if (!formData.diningExperience) {
            formErrors.diningExperience = "Rating is required";
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // localStorage.setItem('feedbackData', JSON.stringify(formData));
            let feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];
            feedbackData.push(formData);
            localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
            setSubmitted(true);
        }
    };

    return (
        <div className={styles.form_container}>
            <h1>Aromatic Bar</h1>
            <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
            {submitted ? (
                <div className={styles.thank_you_message}>Thank you for completing the information</div>
            ) : (
                <form onSubmit={handleSubmit}>
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
                    <div className={styles.form_group}>
                        <label>Phone<span className={styles.required}>*</span></label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="9999999999"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                    </div>
                    <div className={styles.form_group}>
                        <label>Please rate the quality of the service you received from your host:<span className={styles.required}>*</span></label>
                        <div className={styles.options}>
                            <label>
                                <input
                                    type="radio"
                                    name="serviceQuality"
                                    value="Excellent"
                                    checked={formData.serviceQuality === 'Excellent'}
                                    onChange={handleChange}
                                /> Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="serviceQuality"
                                    value="Good"
                                    checked={formData.serviceQuality === 'Good'}
                                    onChange={handleChange}
                                /> Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="serviceQuality"
                                    value="Fair"
                                    checked={formData.serviceQuality === 'Fair'}
                                    onChange={handleChange}
                                /> Fair
                            </label>
                            <label>
                                <input
                                    type="radio"
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
                        <label>Please rate the quality of your beverage:<span className={styles.required}>*</span></label>
                        <div className={styles.options}>
                            <label>
                                <input
                                    type="radio"
                                    name="beverageQuality"
                                    value="Excellent"
                                    checked={formData.beverageQuality === 'Excellent'}
                                    onChange={handleChange}
                                /> Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="beverageQuality"
                                    value="Good"
                                    checked={formData.beverageQuality === 'Good'}
                                    onChange={handleChange}
                                /> Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="beverageQuality"
                                    value="Fair"
                                    checked={formData.beverageQuality === 'Fair'}
                                    onChange={handleChange}
                                /> Fair
                            </label>
                            <label>
                                <input
                                    type="radio"
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
                        <label>Was our restaurant clean?<span className={styles.required}>*</span></label>
                        <div className={styles.options}>
                            <label>
                                <input
                                    type="radio"
                                    name="restaurantCleanliness"
                                    value="Excellent"
                                    checked={formData.restaurantCleanliness === 'Excellent'}
                                    onChange={handleChange}
                                /> Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="restaurantCleanliness"
                                    value="Good"
                                    checked={formData.restaurantCleanliness === 'Good'}
                                    onChange={handleChange}
                                /> Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="restaurantCleanliness"
                                    value="Fair"
                                    checked={formData.restaurantCleanliness === 'Fair'}
                                    onChange={handleChange}
                                /> Fair
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="restaurantCleanliness"
                                    value="Bad"
                                    checked={formData.restaurantCleanliness === 'Bad'}
                                    onChange={handleChange}
                                /> Bad
                            </label>
                        </div>
                        {errors.restaurantCleanliness && <span className={styles.error}>{errors.restaurantCleanliness}</span>}
                    </div>
                    <div className={styles.form_group}>
                        <label>Please rate your overall dining experience:<span className={styles.required}>*</span></label>
                        <div className={styles.options}>
                            <label>
                                <input
                                    type="radio"
                                    name="diningExperience"
                                    value="Excellent"
                                    checked={formData.diningExperience === 'Excellent'}
                                    onChange={handleChange}
                                /> Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="diningExperience"
                                    value="Good"
                                    checked={formData.diningExperience === 'Good'}
                                    onChange={handleChange}
                                /> Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="diningExperience"
                                    value="Fair"
                                    checked={formData.diningExperience === 'Fair'}
                                    onChange={handleChange}
                                /> Fair
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="diningExperience"
                                    value="Bad"
                                    checked={formData.diningExperience === 'Bad'}
                                    onChange={handleChange}
                                /> Bad
                            </label>
                        </div>
                        {errors.diningExperience && <span className={styles.error}>{errors.diningExperience}</span>}
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            )}
        </div>
    );
};

export default AromaticBarFeedbackForm;
