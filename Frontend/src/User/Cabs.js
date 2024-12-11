import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "./Unav";
import backgroundImage from './pexels-vincent-ma-janssen-1310781.jpg';

function Cabs() {
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

  const handleSortPrice = () => {
    setSortPriceAscending(!sortPriceAscending);
  };

  const sortedCars = [...cars].sort((a, b) => {
    return sortPriceAscending ? a.price - b.price : b.price - a.price;
  });

  const filteredCars = sortedCars.filter((car) => {
    const carNameMatches = car.carname.toLowerCase().includes(searchCarName.toLowerCase());
    const carTypeMatches = car.cartype.toLowerCase().includes(searchCarType.toLowerCase());
    const priceMatches = car.price.toString().includes(searchPrice);
    
    return carNameMatches && carTypeMatches && priceMatches;
  });

  return (
    <div 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundColor: '#ADD8E6'
      }}
    >
      <Navbar />
      <div className="car-list">
        <h1 style={{ color: 'white' }}>Car List</h1>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "20px" 
        }}>
          <div className="search-container" style={{ display: "flex" }}>
            <input
              // style={{
              //   marginRight: "20px",
              //   padding: "10px",
              //   borderRadius: "5px",
              //   border: "1px solid #ccc"
              // }}
              type="text"
              placeholder="Search by car name"
              value={searchCarName}
              onChange={(e) => setSearchCarName(e.target.value)}
            />
            <input
              // style={{
              //   marginRight: "20px",
              //   padding: "10px",
              //   borderRadius: "5px",
              //   border: "1px solid #ccc"
              // }}
              type="text"
              placeholder="Search by car type"
              value={searchCarType}
              onChange={(e) => setSearchCarType(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleSortPrice}
            style={{ 
              backgroundColor: "orangered", 
              width: "250px" 
            }}
          >
            Sort Price ↓↑ {sortPriceAscending ? 'Low to High' : 'High to Low'}
          </Button>
        </div>
        <div className="car-container">
          {filteredCars.map((car) => (
            <div className="car-card" key={car._id} id='pop'>
              <img src={`http://localhost:8000/${car?.carImage}`} alt={`${car.carname} Image`} />
              <p>Driver Name: {car.drivername}</p>
              <p>Car Model: {car.carname}</p>
              <p>Car Type: {car.cartype}</p>
              <p>Car No: {car.carno}</p>
              <p>Price: {car.price}/Km</p>
              <div className='ml-auto'>
                <Button style={{ backgroundColor: "orangered", border: "none" }}>
                  <Link to={`/bookcab/${car._id}`} style={{ color: "white", textDecoration: "none" }}>
                    Book Cab
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cabs;