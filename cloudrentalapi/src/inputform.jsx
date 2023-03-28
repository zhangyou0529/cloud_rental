import React, { useState } from "react";
import axios from "axios";

export default function MyForm() {
  const [formData, setFormData] = useState({
    location: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/ranking-page-store", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      axios.post("/loadingfactors-store", formData)
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

  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "/ranking-page",
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>location</label>
      <select name="location" onChange={handleInputChange}>
        <option value="">Select a location...</option>
        <option value = "Bishan">Bishan</option>
        <option value = "Bukit Merah">Bukit Merah</option>
        <option value = "Bukit Timah">Bukit Timah</option>
        <option value = "Geylang">Geylang</option>
        <option value = "Kallang">Kallang</option>
        <option value = "Marina East">Marina East</option>
        <option value = "Marina South">Marina South</option>
        <option value = "Marine Parade">Marine Parade</option>
        <option value = "Newton">Newton</option>
        <option value = "Novena">Novena</option>
        <option value = "Orchard">Orchard</option>
        <option value = "Outram">Outram</option>
        <option value = "Queenstown">Queenstown</option>
        <option value = "River Valley">River Valley</option>
        <option value = "Rochor">Rochor</option>
        <option value = "Singapore River">Singapore River</option>
        <option value = "Southern Islands">Southern Islands</option>
        <option value = "Straits View">Straits View</option>
        <option value = "Tanglin">Tanglin</option>
        <option value = "Toa Payoh">Toa Payoh</option>
        <option value = "Bedok">Bedok</option>
        <option value = "Changi">Changi</option>
        <option value = "Changi Bay">Changi Bay</option>
        <option value = "Pasir Ris">Pasir Ris</option>
        <option value = "Paya Lebar">Paya Lebar</option>
        <option value = "Tampines">Tampines</option>
        <option value = "Lim Chu Kang">Lim Chu Kang</option>
        <option value = "Mandai">Mandai</option>
        <option value = "Sembawang">Sembawang</option>
        <option value = "Simpang">Simpang</option>
        <option value = "Sungei Kadut">Sungei Kadut</option>
        <option value = "Woodlands">Woodlands</option>
        <option value = "Yishun">Yishun</option>
        <option value = "Ang Mo Kio">Ang Mo Kio</option>
        <option value = "Hougang">Hougang</option>
        <option value = "Punggol">Punggol</option>
        <option value = "Seletar">Seletar</option>
        <option value = "Sengkang">Sengkang</option>
        <option value = "Serangoon">Serangoon</option>
        <option value = "Boon Lay">Boon Lay</option>
        <option value = "Bukit Batok">Bukit Batok</option>
        <option value = "Bukit Panjang">Bukit Panjang</option>
        <option value = "Choa Chu Kang">Choa Chu Kang</option>
        <option value = "Clementi">Clementi</option>
        <option value = "Jurong East">Jurong East</option>
        <option value = "Jurong West">Jurong West</option>
        <option value = "Pioneer">Pioneer</option>
        <option value = "Tengah">Tengah</option>
        <option value = "Tuas">Tuas</option>
      </select>
        
      <label>size</label>
      <select name="size" onChange={handleInputChange}>
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        <option value = "6">6</option>
        <option value = "7">7</option>
        <option value = "8">8</option>
      </select>

      <label>bedrooms</label>
      <select name="bedrooms" onChange={handleInputChange}>
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
      </select>

      <label>bathrooms</label>
      <select name="bathrooms" onChange={handleInputChange}>
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
      </select>

      <button 
        type="submit"
        onClick={() => {
          buttonOnClick();
        }}
      >Submit</button>
    </form>
  );
}