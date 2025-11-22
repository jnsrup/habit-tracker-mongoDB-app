import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-950 to-violet-950 text-white pt-12 pb-6">
      {/* Newsletter Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Join Our <span className="text-yellow-300">Toy Club!</span>
        </h2>
        <p className="text-sm md:text-base mb-5">
          Get exclusive offers, fun updates, and new toy arrivals straight to your inbox 🎁
        </p>
        <div className="flex justify-center  ">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-l-full px-4 bg-fuchsia-100 py-2 w-60 md:w-80 text-gray-800 focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-r-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-white/30 pt-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3">
            Kids<span className="text-yellow-300">Toy</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Bringing joy to every kid with fun, educational, and creative toys! ✨
          </p>
          <div className="flex space-x-3 text-lg">
            <a href="#" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-200">All Toys</a></li>
            <li><a href="#" className="hover:text-yellow-200">New Arrivals</a></li>
            <li><a href="#" className="hover:text-yellow-200">Best Sellers</a></li>
            <li><a href="#" className="hover:text-yellow-200">Gift Ideas</a></li>
          </ul>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-200">Our Story</a></li>
            <li><a href="#" className="hover:text-yellow-200">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-200">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-200">Contact</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-200">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-200">Shipping Info</a></li>
            <li><a href="#" className="hover:text-yellow-200">Return Policy</a></li>
            <li><a href="#" className="hover:text-yellow-200">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} KidsToy™ — All rights reserved 
      </div>
    </footer>
  );
};

export default Footer;