import React, { useState, useEffect } from 'react';
import styles from "../Styles/section2.module.css";

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('feedbackData')) || [];
    setFeedbackData(data);
  }, []);

  return (
    <div>
      <h2>Feedback Data</h2>
      <table className={styles.feedback_table}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Beverage Quality</th>
            <th>Dining Experience</th>
            <th>Restaurant Cleanliness</th>
            <th>Service Quality</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.customerName}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.beverageQuality}</td>
              <td>{feedback.diningExperience}</td>
              <td>{feedback.restaurantCleanliness}</td>
              <td>{feedback.serviceQuality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
