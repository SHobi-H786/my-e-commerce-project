// components/Footer.tsx

import React from 'react';

const Footer2: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Company Information</h3>
          <p>Avion</p>
          <p>21 New York Street</p>
          <p>New York City</p>
          <p>United States of America</p>
          <p>432 34</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Social Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Skype</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Pinterest</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul>
            <li><a href="#" className="hover:underline">New arrivals</a></li>
            <li><a href="#" className="hover:underline">Best sellers</a></li>
            <li><a href="#" className="hover:underline">Recently viewed</a></li>
            <li><a href="#" className="hover:underline">Popular this week</a></li>
            <li><a href="#" className="hover:underline">All products</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Categories</h3>
          <ul>
            <li><a href="#" className="hover:underline">Crockery</a></li>
            <li><a href="#" className="hover:underline">Furniture</a></li>
            <li><a href="#" className="hover:underline">Homeware</a></li>
            <li><a href="#" className="hover:underline">Plant pots</a></li>
            <li><a href="#" className="hover:underline">Chairs</a></li>
            <li><a href="#" className="hover:underline">Crockery</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Our Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Vacancies</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Returns policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Copyright 2022 Avion LTD</p>
      </div>
    </footer>
  );
};

export default Footer2;
