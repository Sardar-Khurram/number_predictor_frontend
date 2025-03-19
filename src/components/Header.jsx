import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTopSection, setShowTopSection] = useState(true);
    const navRef = useRef(null);
    const headerRef = useRef(null);
    let lastScrollY = window.scrollY;

    // useEffect(() => {
    //     let isScrolling;
    //     let lastScrollY = window.scrollY;

    //     const scrollHandler = () => {
    //         // Clear the timeout to prevent rapid state updates
    //         clearTimeout(isScrolling);

    //         // Debounce the scroll handler
    //         isScrolling = setTimeout(() => {
    //             if (window.scrollY > 40) {
    //                 // Fix the header to the top
    //                 if (headerRef.current) {
    //                     headerRef.current.style.position = "fixed";
    //                     headerRef.current.style.top = "0";
    //                     headerRef.current.style.left = "0";
    //                     headerRef.current.style.right = "0";
    //                     headerRef.current.style.background = "rgba(255, 255, 255, 0.8)"; // Transparent effect
    //                     headerRef.current.style.transition = "top 0.5s ease-in-out, background 0.5s ease-in-out"; // Slower transition
    //                     headerRef.current.style.boxShadow = "0px 6px 6px rgba(0, 0, 0, 0.1)";
    //                     headerRef.current.style.backdropFilter = "blur(10px)"; // Glass effect
    //                 }

    //                 // Hide the top section when scrolling down
    //                 if (window.scrollY > lastScrollY) {
    //                     setShowTopSection(false);
    //                 }
    //             } else {
    //                 // Reset the header to its original state
    //                 if (headerRef.current) {
    //                     headerRef.current.style.position = "relative";
    //                     headerRef.current.style.background = "white";
    //                     headerRef.current.style.boxShadow = "none";
    //                     headerRef.current.style.backdropFilter = "none";
    //                 }
    //                 // Show the top section only when fully scrolled to the top
    //                 if (window.scrollY <= 5) {
    //                     setShowTopSection(true);
    //                 }
    //             }

    //             // Update lastScrollY for the next scroll event
    //             lastScrollY = window.scrollY;
    //         }, 100); // Adjust debounce delay as needed
    //     };

    //     window.addEventListener("scroll", scrollHandler);

    //     return () => {
    //         window.removeEventListener("scroll", scrollHandler);
    //     };
    // }, []);

    return (
        <header ref={headerRef} className=" bg-white shadow-lg z-50 pt-2">
            {/* Top Section - Shows/Hides on Scroll */}
            {showTopSection && (
                <div className="flex flex-col items-center text-center  transition-opacity duration-300">
                    <div className="flex justify-center items-center w-full max-w-6xl mx-auto px-6 space-x-4">
                        <img src="/logo1.png" alt="University Logo" className="h-16" />
                        <div>
                            <h1 className="text-lg font-bold">The University of Azad Jammu and Kashmir</h1>
                            <h2 className="text-sm">Department of Software Engineering</h2>
                        </div>
                        <img src="/logo2.png" alt="Department Logo" className="h-16" />
                    </div>
                    {/* Compact Table */}
                    <table className="border border-gray-300 mt-2 text-xs w-full max-w-md">
                        <thead>
                            <tr>
                                <th colSpan="2" className="text-center py-1 bg-gray-100">Open Ended Lab</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 py-1">Submitted To</td>
                                <td className="px-2 py-1">Engr. Muhammad Awais</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1">Course</td>
                                <td className="px-2 py-1">Machine Learning (SE-3105)</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1">Submitted by</td>
                                <td className="px-2 py-1">Khurram Farman</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1">Roll No</td>
                                <td className="px-2 py-1">2022-SE-01</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1">Batch</td>
                                <td className="px-2 py-1">2022-26</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Navigation Bar (Sticky on Scroll) */}
            <div ref={navRef} className=" flex items-center justify-between w-full max-w-6xl mx-auto pb-2 px-6">
                {/* App Title */}
                <Link to="/" className="text-xl font-semibold text-gray-900 hover:scale-105 hover:font-bold">
                    Numbers Predictor
                </Link>

                {/* Navigation Links (Hidden below md) */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                    <Link to="/editor" className="hover:scale-105 hover:font-bold">Editor</Link>
                    <Link to="/drag-drop" className="hover:scale-105 hover:font-bold">Drag & Drop</Link>
                    <Link to="/upload" className="hover:scale-105 hover:font-bold">Upload</Link>
                    <Link to="/report" className="hover:scale-105 hover:font-bold">Documentation</Link>
                </nav>

                {/* Hamburger Menu (Only below md) */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <img src="/hamBurger.svg" alt="Menu" className="h-8 w-8" />
                </button>
            </div>

            {/* Sidebar (Only appears when isOpen is true) */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}>
                    <div
                        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col space-y-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end text-gray-900 text-lg focus:outline-none"
                            aria-label="Close menu"
                        >
                            ✖
                        </button>
                        <Link to="/editor" className="hover:scale-105 hover:font-bold" onClick={() => setIsOpen(false)}>
                            Editor
                        </Link>
                        <Link to="/drag-drop" className="hover:scale-105 hover:font-bold" onClick={() => setIsOpen(false)}>
                            Drag & Drop
                        </Link>
                        <Link to="/upload" className="hover:scale-105 hover:font-bold" onClick={() => setIsOpen(false)}>
                            Upload
                        </Link>
                        <Link to="/report" className="hover:scale-105 hover:font-bold" onClick={() => setIsOpen(false)}>
                            Report
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;