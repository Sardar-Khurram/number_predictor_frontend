import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-gray-400">
              This is an AI-powered numbers predictor app designed to help you analyze and predict numerical patterns. Use the editor, drag-and-drop, or upload features to get started.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/editor" className="hover:text-white transition-colors duration-200">
                  Editor
                </Link>
              </li>
              <li>
                <Link to="/drag-drop" className="hover:text-white transition-colors duration-200">
                  Drag & Drop
                </Link>
              </li>
              <li>
                <Link to="/upload" className="hover:text-white transition-colors duration-200">
                  Upload
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: sardarkhurramfarman@gmail.com</li>
              <li>Phone: +923426346489</li>
              <li>Address: Mapple Solutions JDH-Muzaffarabad </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2025 Numbers Predictor. All rights reserved.
          </p>
          <p className="mt-2">
            Submitted to <span className="font-bold">Engr. Muhammad Awais</span> By <span className="font-bold">Khurram Farman (2022-SE-01)</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;