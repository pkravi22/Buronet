import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div className="hidden md:flex flex-col w-60 bg-green-200 h-screen fixed left-0 top-0 border-r border-gray-200 shadow-sm z-10">
        <div className="px-4 py-5 flex items-center justify-center border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img
              src="https://static.readdy.ai/image/fde52c38d7c7a4cc31a1d5255c284c25/85bc10a2f6a4623569dfec1174474176.png"
              alt="Buronet Logo"
              className="h-11 w-11"
            />
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              buronet
            </div>
          </div>
        </div>

        <nav className="flex-1 pt-5">
          <ul>
            <li>
              <Link
                to="/home"
                className={`flex items-center w-full px-4 py-3 text-sm font-medium ${
                  currentPath === "/home"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                } transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                <i
                  className={`fas fa-home mr-3 text-lg ${
                    currentPath === "/home" ? "text-blue-600" : "text-gray-500"
                  }`}
                ></i>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/circle"
                className={`flex items-center w-full px-4 py-3 text-sm font-medium ${
                  currentPath === "/circle"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                } transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                <i
                  className={`fas fa-users mr-3 text-lg ${
                    currentPath === "/circle"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                ></i>
                My Circle
              </Link>
            </li>
            <li>
              <a
                href="/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-briefcase mr-3 text-lg text-gray-500"></i>
                Jobs
              </a>
            </li>
            <li>
              <Link
                to="/bytes"
                className={`flex items-center w-full px-4 py-3 text-sm font-medium ${
                  currentPath === "/bytes"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                } transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                <i
                  className={`fas fa-bolt mr-3 text-lg ${
                    currentPath === "/bytes" ? "text-blue-600" : "text-gray-500"
                  }`}
                ></i>
                Bytes
              </Link>
            </li>
            <li>
              <Link
                to="/messaging"
                className={`flex items-center w-full px-4 py-3 text-sm font-medium ${
                  currentPath === "/messaging"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                } transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                <i
                  className={`fas fa-comment mr-3 text-lg ${
                    currentPath === "/messaging"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                ></i>
                Messaging
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  3
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20person%20with%20neutral%20expression%2C%20high%20quality%2C%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background%2C%20soft%20colors&width=80&height=80&seq=1&orientation=squarish"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">Harsh Singh</p>
              <p className="text-xs text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-200 border-t border-gray-200 flex justify-around items-center py-2 md:hidden z-10">
        <Link
          to="/home"
          className={`p-2 rounded-full ${
            currentPath === "/home" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-home text-xl"></i>
        </Link>
        <Link
          to="/circle"
          className={`p-2 rounded-full ${
            currentPath === "/circle" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-users text-xl"></i>
        </Link>
        <Link
          to="/bytes"
          className={`p-2 rounded-full ${
            currentPath === "/bytes" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-bolt text-xl"></i>
        </Link>
        <a
          href="/jobs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-gray-500"
        >
          <i className="fas fa-briefcase text-xl"></i>
        </a>
        <Link
          to="/messaging"
          className={`p-2 rounded-full relative ${
            currentPath === "/messaging" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <i className="fas fa-comment text-xl"></i>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
