import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Anav from './Anav';

function Acabs() {
  const [cars, setCars] = useState([]);
  const [searchCarName, setSearchCarName] = useState('');
  const [searchCarType, setSearchCarType] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [sortPriceAscending, setSortPriceAscending] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get('http://localhost:8000/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars: ', error);
      }
    }
    fetchCars();
  }, []);

  const deletecar = (taskId) => {
    axios.delete(`http://localhost:8000/cardelete/${taskId}`);
    window.location.assign('/acabs');
    alert('Car is deleted');
  };

  const handleSortPrice = () => {
    setSortPriceAscending(!sortPriceAscending);
  };

  const sortedCars = [...cars].sort((a, b) => {
    if (sortPriceAscending) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const filteredCars = sortedCars.filter((car) => {
    const carNameMatches = car.carname.toLowerCase().includes(searchCarName.toLowerCase());
    const carTypeMatches = car.cartype.toLowerCase().includes(searchCarType.toLowerCase());
    const priceMatches = car.price.toString().includes(searchPrice);

    return carNameMatches && carTypeMatches && priceMatches;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <Anav />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Car List</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex space-x-4 w-full">
            <input
              type="text"
              placeholder="Search by car name"
              value={searchCarName}
              onChange={(e) => setSearchCarName(e.target.value)}
              className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Search by car type"
              value={searchCarType}
              onChange={(e) => setSearchCarType(e.target.value)}
              className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSortPrice}
            className="w-full md:w-auto px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            Sort Price {sortPriceAscending ? '↑' : '↓'}
            <span className="ml-2 text-sm">
              {sortPriceAscending ? 'Low to High' : 'High to Low'}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div 
              key={car._id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 w-full">
                <img 
                  src={`http://localhost:8000/${car?.carImage}`} 
                  alt={`${car.carname} Image`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{car.carname}</h3>
                <div className="space-y-1 text-gray-700 mb-4">
                  <p><span className="font-medium">Driver:</span> {car.drivername}</p>
                  <p><span className="font-medium">Type:</span> {car.cartype}</p>
                  <p><span className="font-medium">Car No:</span> {car.carno}</p>
                  <p className="text-blue-600 font-bold">Price: {car.price}/Km</p>
                </div>
                <div className="flex space-x-3">
                  <Link 
                    to={`/acabedit/${car._id}`} 
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => deletecar(car._id)} 
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No cars found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

export default Acabs;