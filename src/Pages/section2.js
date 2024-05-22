import React, { useState, useEffect } from 'react';
import styles from "../Styles/section2.module.css";

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('feedbackData')) || [];
    setFeedbackData(data);
    setFilteredData(data);
  }, []);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    const filtered = feedbackData.filter((feedback) =>
      feedback.customerName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleRefresh = () => {
    setSearchItem('');
    setFilteredData(feedbackData);
  };

  const handleDelete = () => {
    // console.log("##: ", feedbackData);
    const updatedData = feedbackData.filter((feedback, index) => !selectedRows.includes(feedback.customerName));
    // console.log("@@: ", updatedData);
    setFeedbackData(updatedData);
    setFilteredData(updatedData);
    setSelectedRows([]);
    localStorage.setItem('feedbackData', JSON.stringify(updatedData));
  };

  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) => {
      const checkboxData = !filteredData ? feedbackData[index].customerName : filteredData[index].customerName;
      if (prevSelectedRows.includes(checkboxData)) {
        return prevSelectedRows.filter((item) => item !== checkboxData);
      } 
      else {
        return [...prevSelectedRows, checkboxData];
      }
    });
    console.log("@@: ",selectedRows);
  };

  return (
    <div>
      <div className={styles.table_header}>
        <div>
          <h2>Aromatic Bar</h2>
          <p>{feedbackData.length} records found. {filteredData.length ? `${filteredData.length} filters applied` : null}</p>
        </div>
        
        <div className={styles.actions}>
          <input
            type="text"
            placeholder="Search by name"
            value={searchItem}
            onChange={handleSearch}
          />
          <button onClick={handleRefresh}>Refresh</button>
          <button className={styles.add_button}>Add New</button>
        </div>
      </div>
      
      <table className={styles.feedback_table}>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Form details</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Please rate the quality of the service you received from your host</th>
            <th>Please rate the quality of your beverage</th>
            <th>Was our restaurant clean</th>
            <th>Please rate your overall dining experience</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((feedback, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td className={styles.form_details}>View details</td>
              <td>{feedback.customerName}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.serviceQuality}</td>
              <td>{feedback.beverageQuality}</td>
              <td>{feedback.restaurantCleanliness}</td>
              <td>{feedback.diningExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.delete_button} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FeedbackTable;
