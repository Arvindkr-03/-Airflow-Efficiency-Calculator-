import React, { useState } from 'react';

const RoomInputForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    window1: 'none',
    window2: 'none',
    wind: 'north',
    speed: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 grid gap-3">
      <input type="number" id="length" placeholder="Room Length (m)" onChange={handleChange} />
      <input type="number" id="width" placeholder="Room Width (m)" onChange={handleChange} />

      <select id="window1" onChange={handleChange}>
        <option value="none">Window 1</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <select id="window2" onChange={handleChange}>
        <option value="none">Window 2</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <select id="wind" onChange={handleChange}>
        <option value="north">Wind Direction: North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>

      <input type="range" id="speed" min="0" max="100" onChange={handleChange} />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default RoomInputForm;
