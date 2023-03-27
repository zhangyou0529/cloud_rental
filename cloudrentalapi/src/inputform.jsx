import React, { useState } from "react";
import axios from "axios";

export defeult function MyForm() {
  const [formData, setFormData] = useState({
    location: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/submit-form", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <select name="name" onChange={handleInputChange}>
        <option value="">Select a name...</option>
        <option value="John">John</option>
        <option value="Mary">Mary</option>
        <option value="Bob">Bob</option>
      </select>

      <label>Email</label>
      <input type="email" name="email" onChange={handleInputChange} />

      <label>Message</label>
      <textarea name="message" onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}