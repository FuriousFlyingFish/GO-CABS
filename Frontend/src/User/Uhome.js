import React from 'react';
import Unav from './Unav'; // Make sure the import path is correct
import SimpleMap from '../Components/GoogleMapsComponent';
import "./Uhome.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Uhome = () => {
  const handleBookRide = () => {
    console.log('Navigating to cabs page');
    alert('Redirecting to Cabs Page');
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">
     <Unav />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-2 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Welcome to GoCab
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Your ultimate transportation solution. Convenient, reliable, and always at your service.
        </p>
        
        <div className="flex justify-center mb-16">
          <button 
            onClick={handleBookRide}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            Book Your Ride Now →
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose GoCab?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rides on Demand",
              description: "Request a ride anytime, anywhere with just a few taps.",
              icon: "🚗"
            },
            {
              title: "Budget-Friendly",
              description: "Compare prices and find the most affordable ride option.",
              icon: "💰"
            },
            {
              title: "Easy Transportation",
              description: "Simple, intuitive app that gets you where you need to go.",
              icon: "📍"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Section */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1602280707/assets/ca/8ba51a-ac4a-438d-a62e-776bf6920c1a/original/Reserve_Web-4_Trip.jpg" 
            alt="Ride Reservation" 
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Reserve Your Ride in Advance
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Plan ahead and book your premium ride up to 90 days in advance. Convenience and peace of mind, guaranteed.
          </p>
          <button 
            className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us:</h3>
            <p>📧 Email: gocabs@gmail.com</p>
            <p>📞 Phone: +91 8309694884</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us:</h3>
            <p>
              🌐 Website: <a href="http://www.gocab.com" className="text-blue-400">www.ucab.com</a>
            </p>
            <p>📱 Social Media: [CabFrenzy]</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg font-semibold mb-2">Help & Support:</h3>
            <p>
              📝 <a href="/faqs" className="text-blue-400">FAQs</a>
            </p>
            <p>
              🔒 <a href="/privacy-policy" className="text-blue-400">Privacy Policy</a>
            </p>
            <p>
              📄 <a href="/terms-of-service" className="text-blue-400">Terms of Service</a>
            </p>
          </div>
        </div>
        <p className="text-center mt-6">[ CabFrenzy App ] - Your Trusted Transportation Partner</p>
        <p className="text-center text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Uhome;