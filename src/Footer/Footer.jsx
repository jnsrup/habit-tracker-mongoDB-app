import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 dark:bg-base-300 text-base-content pt-12 pb-6 transition-all">
      
      {/* Newsletter */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Stay Motivated with <span className="text-primary">HabitTrack</span>
        </h2>
        <p className="text-sm md:text-base mb-5">
          Weekly tips, productivity boosts, and habit-building strategies—straight to your inbox.
        </p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-l-full px-4 py-2 w-60 md:w-80 bg-base-100 text-base-content focus:outline-none"
          />
          <button className="bg-primary hover:bg-primary-focus px-6 py-2 rounded-r-full font-semibold text-white">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-base-content/20 pt-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3">
            Habit<span className="text-primary">Track</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Build strong habits. Stay consistent. Become the best version of yourself—one day at a time.
          </p>

          <div className="flex space-x-3 text-lg">
            <a href="#" className="hover:text-primary"><FaFacebookF /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
            <a href="#" className="hover:text-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-primary"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Daily Habits</a></li>
            <li><a href="#" className="hover:text-primary">Streaks</a></li>
            <li><a href="#" className="hover:text-primary">Progress Charts</a></li>
            <li><a href="#" className="hover:text-primary">Motivation Feed</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">How HabitTrack Works</a></li>
            <li><a href="#" className="hover:text-primary">Success Stories</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
            <li><a href="#" className="hover:text-primary">Productivity Tips</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Help Center</a></li>
            <li><a href="#" className="hover:text-primary">Account Settings</a></li>
            <li><a href="#" className="hover:text-primary">FAQ</a></li>
            <li><a href="#" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-base-content/20 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} HabitTrack — Build Better Habits Every Day.
      </div>

    </footer>
  );
};

export default Footer;
