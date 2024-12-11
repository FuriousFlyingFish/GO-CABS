import React, { useState } from 'react';
import axios from 'axios';
import Anav from './Anav';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './pexels-life-of-pix-8247.jpg';

function Addcar() {
  const [formData, setFormData] = useState({
    drivername: '',
    carname: '',
    cartype: '',
    carno: '',
    price: '',
    carImage: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'carImage') {
      setFormData({ ...formData, carImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      await axios.post('http://localhost:8000/cars', formDataToSend);
      alert('Car added successfully');
      navigate('/acabs');
    } catch (error) {
      console.error('Error adding car: ', error);
      alert('Error adding car. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundColor: 'rgba(173, 216, 230, 0.7)' // Soft blue overlay
    }}>
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none z-0"></div>
      
      <Anav />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-6 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Add Car</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {['drivername', 'carname', 'cartype', 'carno', 'price'].map((field) => (
              <div key={field}>
                <input
                  type="text"
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-blue-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-medium text-blue-900 mb-1">Car Image</label>
              <input
                type="file"
                name="carImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-1 file:text-blue-700 hover:file:bg-blue-100 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 text-sm"
            >
              Submit Car Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addcar;