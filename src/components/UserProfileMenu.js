"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux"; // Redux ka useSelector import karna

const UserProfileMenu = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // 🔹 Redux se User Data Load Karna
  const user = useSelector((state) => state.navbar.user); // Redux se user data fetch karna
  // 🔹 Click Outside to Close Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    console.log(user);

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2  p-2 transition-all duration-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="User Menu"
      >
        {/* User's First Name */}
        <span className="hidden md:inline items-center gap-2">
          {/* User Image */}
          <Image
            src={user?.image || "/vipul.jpg"} // User ki image ya default image
            width={100}
            height={100}
            alt="User Avatar"
            className="w-7 h-7 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-150" // round shape ke liye rounded-full
          />
          {/* User's First Name */}
          <span className="text-gray-100 font-medium">
            {/* {user?.user?.split(" ")[0] || "User"} */}
          </span>
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50 animate-fade-in-up"
        >
          {/* User Info Section */}
          <div className="p-4 border-b border-gray-100">
            <h4 className="text-gray-900 font-semibold truncate">
              {user?.user?.split(" ")[0] || "User"}
            </h4>
            <p className="text-gray-500 text-sm mt-1 truncate">
              {user?.email || "user@college.edu"}
            </p>
            <span className="inline-block mt-2 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
              {user?.role ? `${user.role.toUpperCase()}` : "STUDENT"}
            </span>
          </div>

          {/* Menu Items */}
          <div className="p-2 space-y-1">
            <Link
              href="/student"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
            >
              <Image
                src="/svg/user.svg"
                width={20}
                height={20}
                alt="Profile"
                className="mr-3 opacity-60 group-hover:opacity-100 "
              />
              Profile
            </Link>

            <Link
              href="/settings"
              className="w-full flex items-center px-4 py-3 mx-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
            >
              <Image
                src="/svg/settings.svg"
                width={20}
                height={20}
                alt="Settings"
                className="mr-3 opacity-60 group-hover:opacity-100"
              />
              Settings
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("user"); // Local Storage se User Data Remove
                logout(); // Logout function ko call karna
              }}
              className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
            >
              <Image
                src="/svg/signout.svg"
                width={20}
                height={20}
                alt="Logout"
                className="mr-3 opacity-60 group-hover:opacity-100"
              />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
