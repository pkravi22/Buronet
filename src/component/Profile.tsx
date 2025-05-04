// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const Profile: React.FC = () => {
  const [userType, setUserType] = useState<"aspirant" | "professional">(
    "aspirant"
  );
  const [isEditing, setIsEditing] = useState(false);
  const handleUserTypeChange = (type: "aspirant" | "professional") => {
    setUserType(type);
  };
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      {/* Left Sidebar */}

      {/* Main Content */}
      <div className="flex-1">
        {/* Search Bar */}
        <div className="p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-10">
          <div className="relative w-full max-w-xl">
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="ml-4 relative">
            <i className="fas fa-bell text-gray-600 text-xl cursor-pointer"></i>
            <span className="absolute -right-1 -top-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </div>
        </div>
        {/* Profile Banner */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=abstract%2520professional%2520banner%2520with%2520blue%2520gradient%2520and%2520subtle%2520geometric%2520patterns%252C%2520modern%2520corporate%2520design%252C%2520minimal%2520clean%2520style%252C%2520high%2520resolution%2520web%2520header%2520image&width=1440&height=240&seq=3&orientation=landscape"
              alt="Profile Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-16 left-8 flex items-end">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520man%2520with%2520short%2520dark%2520hair%2520wearing%2520a%2520business%2520casual%2520outfit%252C%2520neutral%2520background%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=128&height=128&seq=4&orientation=squarish"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
              <div className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-1 shadow-md cursor-pointer">
                <i className="fas fa-camera"></i>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex space-x-3">
            <button
              onClick={toggleEditMode}
              className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md flex items-center text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-edit mr-2"></i>
              {isEditing ? "Save Profile" : "Edit Profile"}
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md flex items-center text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-share-alt mr-2"></i>
              Share Profile
            </button>
          </div>
        </div>
        {/* Profile Header Info */}
        <div className="mt-20 px-8 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-2">Harsh Singh</h1>
              <div className="bg-blue-500 text-white rounded-full p-1">
                <i className="fas fa-check text-xs"></i>
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              Software Engineer | AI Enthusiast | Problem Solver
            </p>
            <p className="text-gray-500 text-sm mt-1">
              <i className="fas fa-map-marker-alt mr-1"></i> Bangalore, India
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">I am a:</span>
              <div className="flex border rounded-full p-1 bg-gray-50">
                <button
                  onClick={() => handleUserTypeChange("aspirant")}
                  className={`px-4 py-1 text-sm rounded-full transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                    userType === "aspirant"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Indian Gov Job Aspirant
                </button>
                <button
                  onClick={() => handleUserTypeChange("professional")}
                  className={`px-4 py-1 text-sm rounded-full transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                    userType === "professional"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Professional
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Main Profile Content */}
        <div className="px-4 md:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bio Section for Mobile/Tablet */}
            <div className="lg:hidden">
              {/* Bio Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">About Me</h2>
                  {isEditing && (
                    <button className="text-blue-500 text-sm cursor-pointer">
                      <i className="fas fa-pen mr-1"></i> Edit
                    </button>
                  )}
                </div>
                <p className="text-gray-700">
                  {userType === "aspirant"
                    ? "Dedicated UPSC aspirant with a background in Computer Science. Passionate about public service and governance. I believe in consistent preparation and holistic development. Looking to connect with fellow aspirants for group discussions and knowledge sharing."
                    : "Experienced IAS officer dedicated to public service and administrative excellence. Committed to implementing innovative governance solutions and ensuring efficient public service delivery. Passionate about sustainable development and citizen-centric administration."}
                </p>
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {userType === "aspirant" ? (
                      <>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Public Policy
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          International Relations
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Economics
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          History
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Geography
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Public Administration
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Governance
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Policy Making
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Rural Development
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Basic Information</h2>
                  {isEditing && (
                    <button className="text-blue-500 text-sm cursor-pointer">
                      <i className="fas fa-pen mr-1"></i> Edit
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">Harsh Singh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">15 April 1992</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">harsh.singh@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Bangalore, Karnataka, India</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <p className="font-medium">English, Hindi, Kannada</p>
                  </div>
                </div>
              </div>
              {/* Dynamic Content Based on User Type */}
              {userType === "aspirant" ? (
                <>
                  {/* Target Exams */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Target Exams</h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <i className="fas fa-file-alt text-blue-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              UPSC Civil Services Exam
                            </h3>
                            <p className="text-sm text-gray-600">
                              Prelims: June 2025 | Mains: September 2025
                            </p>
                          </div>
                        </div>
                        <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">
                          Primary
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-gray-200 p-2 rounded-full">
                            <i className="fas fa-file-alt text-gray-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              State Civil Services Exam
                            </h3>
                            <p className="text-sm text-gray-600">
                              Prelims: August 2025
                            </p>
                          </div>
                        </div>
                        <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                          Secondary
                        </span>
                      </div>
                    </div>
                    {isEditing && (
                      <button className="mt-4 text-blue-500 flex items-center text-sm cursor-pointer">
                        <i className="fas fa-plus-circle mr-1"></i> Add Another
                        Exam
                      </button>
                    )}
                  </div>
                  {/* Educational Details */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Educational Details
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="border-l-2 border-blue-500 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                        <h3 className="font-medium">
                          Bachelor of Technology (Computer Science)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Indian Institute of Technology, Delhi
                        </p>
                        <p className="text-sm text-gray-500">
                          2014 - 2018 | CGPA: 8.7/10
                        </p>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                        <h3 className="font-medium">Senior Secondary (XII)</h3>
                        <p className="text-sm text-gray-600">
                          Delhi Public School, New Delhi
                        </p>
                        <p className="text-sm text-gray-500">
                          2014 | Percentage: 94.5%
                        </p>
                      </div>
                      <div className="border-l-2 border-blue-500 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                        <h3 className="font-medium">Secondary (X)</h3>
                        <p className="text-sm text-gray-600">
                          Delhi Public School, New Delhi
                        </p>
                        <p className="text-sm text-gray-500">
                          2012 | CGPA: 9.8/10
                        </p>
                      </div>
                    </div>
                    {isEditing && (
                      <button className="mt-4 text-blue-500 flex items-center text-sm cursor-pointer">
                        <i className="fas fa-plus-circle mr-1"></i> Add
                        Education
                      </button>
                    )}
                  </div>
                  {/* Preparation Stage */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Preparation Stage
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            Advanced
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            75%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: "75%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                      <div className="grid grid-cols-4 text-xs text-center">
                        <div className="space-y-1">
                          <div
                            className={`h-2 w-2 rounded-full mx-auto ${
                              75 >= 25 ? "bg-blue-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <p className="font-medium">Beginner</p>
                          <p className="text-gray-500">Syllabus Overview</p>
                        </div>
                        <div className="space-y-1">
                          <div
                            className={`h-2 w-2 rounded-full mx-auto ${
                              75 >= 50 ? "bg-blue-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <p className="font-medium">Intermediate</p>
                          <p className="text-gray-500">Subject Mastery</p>
                        </div>
                        <div className="space-y-1">
                          <div
                            className={`h-2 w-2 rounded-full mx-auto ${
                              75 >= 75 ? "bg-blue-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <p className="font-medium">Advanced</p>
                          <p className="text-gray-500">Practice & Revision</p>
                        </div>
                        <div className="space-y-1">
                          <div
                            className={`h-2 w-2 rounded-full mx-auto ${
                              75 >= 100 ? "bg-blue-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <p className="font-medium">Expert</p>
                          <p className="text-gray-500">Mock Tests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Exam Attempts */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Exam Attempts</h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="border-l-2 border-blue-500 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                        <div className="flex justify-between">
                          <h3 className="font-medium">UPSC CSE 2024</h3>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            Awaiting Results
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Prelims: Cleared (Score: 120/200)
                        </p>
                        <p className="text-sm text-gray-600">
                          Mains: Completed
                        </p>
                        <p className="text-sm text-gray-500">
                          Interview: Completed on March 15, 2025
                        </p>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1"></div>
                        <div className="flex justify-between">
                          <h3 className="font-medium">UPSC CSE 2023</h3>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            Not Qualified
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Prelims: Cleared (Score: 105/200)
                        </p>
                        <p className="text-sm text-gray-600">
                          Mains: Not Qualified
                        </p>
                        <p className="text-sm text-gray-500">
                          Areas for improvement: Essay, Ethics Paper
                        </p>
                      </div>
                    </div>
                    {isEditing && (
                      <button className="mt-4 text-blue-500 flex items-center text-sm cursor-pointer">
                        <i className="fas fa-plus-circle mr-1"></i> Add Attempt
                      </button>
                    )}
                  </div>
                  {/* Coaching Information */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Coaching Information
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <i className="fas fa-building text-blue-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">Vision IAS</h3>
                            <p className="text-sm text-gray-600">
                              General Studies, Current Affairs
                            </p>
                            <p className="text-sm text-gray-500">
                              2023 - Present | Delhi Center
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-full">
                            <i className="fas fa-user-tie text-green-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              Ravi Kumar (Private Mentor)
                            </h3>
                            <p className="text-sm text-gray-600">
                              Ethics, Essay Writing
                            </p>
                            <p className="text-sm text-gray-500">
                              2024 - Present | Online Sessions
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-2 rounded-full">
                            <i className="fas fa-laptop text-purple-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              Unacademy Plus Subscription
                            </h3>
                            <p className="text-sm text-gray-600">
                              Optional Subject: Geography
                            </p>
                            <p className="text-sm text-gray-500">
                              2023 - Present | Online Platform
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isEditing && (
                      <button className="mt-4 text-blue-500 flex items-center text-sm cursor-pointer">
                        <i className="fas fa-plus-circle mr-1"></i> Add Coaching
                      </button>
                    )}
                  </div>
                  {/* Study Preferences */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Study Preferences
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          Preferred Study Time
                        </p>
                        <p className="font-medium">
                          Early Morning (4 AM - 9 AM)
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Daily Study Hours
                        </p>
                        <p className="font-medium">8-10 hours</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Study Environment
                        </p>
                        <p className="font-medium">
                          Quiet room with minimal distractions
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Learning Style</p>
                        <p className="font-medium">Visual learner, mind maps</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Revision Strategy
                        </p>
                        <p className="font-medium">
                          Spaced repetition with flashcards
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Note-taking Method
                        </p>
                        <p className="font-medium">
                          Digital notes with handwritten diagrams
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        Preferred Resources
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          NCERT Books
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          The Hindu Newspaper
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Vision IAS Materials
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Mrunal.org
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          InsightsIAS
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Department & Designation */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Department & Designation
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <i className="fas fa-landmark text-blue-600 text-xl"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">
                          Deputy Commissioner
                        </h3>
                        <p className="text-gray-600">
                          Indian Administrative Service (IAS)
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Government of Karnataka
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-gray-500">Batch</p>
                        <p className="font-medium">IAS 2018</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Joined Service</p>
                        <p className="font-medium">15 August 2019</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Cadre</p>
                        <p className="font-medium">Karnataka</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Current Role Since
                        </p>
                        <p className="font-medium">June 2023</p>
                      </div>
                    </div>
                  </div>
                  {/* Work Location */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Posting Location
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="bg-green-100 p-3 rounded-full">
                        <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium">
                          Office of Deputy Commissioner
                        </h3>
                        <p className="text-gray-600">
                          District Administrative Complex
                        </p>
                        <p className="text-sm text-gray-500">
                          Mysuru, Karnataka - 570001
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">Jurisdiction</p>
                      <div className="flex items-center mt-1">
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2">
                          District Level
                        </span>
                        <span className="text-gray-600 text-sm">
                          (Mysuru District)
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Work Experience */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Work Experience</h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="border-l-2 border-blue-500 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                        <h3 className="font-medium">Deputy Commissioner</h3>
                        <p className="text-sm text-gray-600">
                          Mysuru District, Karnataka
                        </p>
                        <p className="text-sm text-gray-500">
                          June 2023 - Present
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                          <li>
                            Overall administration and development of Mysuru
                            district
                          </li>
                          <li>
                            Implementation of key government schemes and
                            programs
                          </li>
                          <li>
                            Crisis management during natural disasters and
                            emergencies
                          </li>
                        </ul>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1"></div>
                        <h3 className="font-medium">Assistant Commissioner</h3>
                        <p className="text-sm text-gray-600">
                          Bangalore Urban District, Karnataka
                        </p>
                        <p className="text-sm text-gray-500">
                          August 2021 - May 2023
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                          <li>
                            Revenue administration and land records management
                          </li>
                          <li>
                            Implementation of welfare schemes and citizen
                            services
                          </li>
                          <li>
                            Coordination with various government departments
                          </li>
                        </ul>
                      </div>
                      <div className="border-l-2 border-gray-300 pl-4 relative">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1"></div>
                        <h3 className="font-medium">
                          Assistant Secretary (Training)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Lal Bahadur Shastri National Academy of Administration
                        </p>
                        <p className="text-sm text-gray-500">
                          August 2019 - July 2021
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                          <li>Completed Phase I and II training of IAS</li>
                          <li>
                            District training in various aspects of
                            administration
                          </li>
                          <li>Field visits and case study preparations</li>
                        </ul>
                      </div>
                    </div>
                    {isEditing && (
                      <button className="mt-4 text-blue-500 flex items-center text-sm cursor-pointer">
                        <i className="fas fa-plus-circle mr-1"></i> Add
                        Experience
                      </button>
                    )}
                  </div>
                  {/* Professional Achievements */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Professional Achievements
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="bg-yellow-100 p-2 rounded-full mt-1">
                            <i className="fas fa-trophy text-yellow-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              Prime Minister's Award for Excellence in Public
                              Administration 2024
                            </h3>
                            <p className="text-sm text-gray-600">
                              Recognized for innovative governance and public
                              service delivery
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Government of India, April 2024
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mt-1">
                            <i className="fas fa-certificate text-blue-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              Digital India Award 2023
                            </h3>
                            <p className="text-sm text-gray-600">
                              For implementing e-governance initiatives in
                              district administration
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Ministry of Electronics & IT, December 2023
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mt-1">
                            <i className="fas fa-award text-green-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              State Civil Services Day Award
                            </h3>
                            <p className="text-sm text-gray-600">
                              Excellence in implementation of welfare schemes
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Government of Karnataka, April 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isEditing && (
                      <button className="mt-4 text-blue-500 flex items-center text-sm cursor-pointer">
                        <i className="fas fa-plus-circle mr-1"></i> Add
                        Achievement
                      </button>
                    )}
                  </div>
                  {/* Skills Matrix */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Technical Skills
                      </h2>
                      {isEditing && (
                        <button className="text-blue-500 text-sm cursor-pointer">
                          <i className="fas fa-pen mr-1"></i> Edit
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Public Administration
                          </span>
                          <span className="text-sm text-gray-500">Expert</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Revenue Administration
                          </span>
                          <span className="text-sm text-gray-500">
                            Advanced
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Crisis Management
                          </span>
                          <span className="text-sm text-gray-500">
                            Advanced
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            E-Governance
                          </span>
                          <span className="text-sm text-gray-500">
                            Advanced
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Project Management
                          </span>
                          <span className="text-sm text-gray-500">Expert</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Specialized Training</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          <span>Advanced Public Administration (LBSNAA)</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          <span>Disaster Management (NIDM)</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          <span>Financial Management (NIFM)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Right Column */}
            <div>
              {/* Bio Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">About Me</h2>
                  {isEditing && (
                    <button className="text-blue-500 text-sm cursor-pointer">
                      <i className="fas fa-pen mr-1"></i> Edit
                    </button>
                  )}
                </div>
                <p className="text-gray-700">
                  {userType === "aspirant"
                    ? "Dedicated UPSC aspirant with a background in Computer Science. Passionate about public service and governance. I believe in consistent preparation and holistic development. Looking to connect with fellow aspirants for group discussions and knowledge sharing."
                    : "Experienced software engineer specializing in AI and machine learning applications. Passionate about building scalable systems that solve real-world problems. I enjoy mentoring junior developers and contributing to open-source projects in my free time."}
                </p>
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {userType === "aspirant" ? (
                      <>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Public Policy
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          International Relations
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Economics
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          History
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Geography
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Artificial Intelligence
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Cloud Computing
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Open Source
                        </span>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                          Tech Mentoring
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Skills & Strengths */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Skills & Strengths</h2>
                  {isEditing && (
                    <button className="text-blue-500 text-sm cursor-pointer">
                      <i className="fas fa-pen mr-1"></i> Edit
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Critical Thinking
                      </span>
                      <span className="text-sm text-gray-500">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Problem Solving
                      </span>
                      <span className="text-sm text-gray-500">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Communication</span>
                      <span className="text-sm text-gray-500">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Time Management
                      </span>
                      <span className="text-sm text-gray-500">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Leadership</span>
                      <span className="text-sm text-gray-500">
                        Intermediate
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Achievement Badges */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Achievement Badges</h2>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-2">
                      <i className="fas fa-star text-blue-600 text-xl"></i>
                    </div>
                    <span className="text-xs font-medium">Top Contributor</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-purple-100 p-3 rounded-full mb-2">
                      <i className="fas fa-book text-purple-600 text-xl"></i>
                    </div>
                    <span className="text-xs font-medium">
                      Knowledge Expert
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-green-100 p-3 rounded-full mb-2">
                      <i className="fas fa-users text-green-600 text-xl"></i>
                    </div>
                    <span className="text-xs font-medium">
                      Community Leader
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-100 p-3 rounded-full mb-2">
                      <i className="fas fa-medal text-yellow-600 text-xl"></i>
                    </div>
                    <span className="text-xs font-medium">1 Year Member</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-red-100 p-3 rounded-full mb-2">
                      <i className="fas fa-fire text-red-600 text-xl"></i>
                    </div>
                    <span className="text-xs font-medium">Trending Posts</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="bg-gray-200 p-3 rounded-full mb-2">
                      <i className="fas fa-lock text-gray-500 text-xl"></i>
                    </div>
                    <span className="text-xs font-medium">Locked</span>
                  </div>
                </div>
              </div>
              {/* Community Groups */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Community Groups</h2>
                </div>
                <div className="space-y-4">
                  {userType === "aspirant" ? (
                    <>
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <i className="fas fa-users text-blue-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              UPSC Aspirants Circle
                            </h3>
                            <p className="text-xs text-gray-500">
                              15,240 members
                            </p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-2 rounded-full">
                            <i className="fas fa-book text-purple-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              Geography Optional Group
                            </h3>
                            <p className="text-xs text-gray-500">
                              3,450 members
                            </p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-yellow-100 p-2 rounded-full">
                            <i className="fas fa-pen text-yellow-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">Essay Writing Club</h3>
                            <p className="text-xs text-gray-500">
                              1,890 members
                            </p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <i className="fas fa-landmark text-blue-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              IAS Officers Association
                            </h3>
                            <p className="text-xs text-gray-500">
                              5,240 members
                            </p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-2 rounded-full">
                            <i className="fas fa-university text-purple-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              Karnataka Civil Services Forum
                            </h3>
                            <p className="text-xs text-gray-500">
                              2,340 members
                            </p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-full">
                            <i className="fas fa-users text-green-600"></i>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">
                              District Collectors Network
                            </h3>
                            <p className="text-xs text-gray-500">450 members</p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Notification Settings */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    Notification Settings
                  </h2>
                  {isEditing && (
                    <button className="text-blue-500 text-sm cursor-pointer">
                      <i className="fas fa-pen mr-1"></i> Edit
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-gray-500 mr-3"></i>
                      <span className="text-sm">Email Notifications</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 cursor-pointer">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fas fa-mobile-alt text-gray-500 mr-3"></i>
                      <span className="text-sm">Push Notifications</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 cursor-pointer">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fas fa-users text-gray-500 mr-3"></i>
                      <span className="text-sm">Group Activity</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 cursor-pointer">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fas fa-comment-alt text-gray-500 mr-3"></i>
                      <span className="text-sm">Direct Messages</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 cursor-pointer">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fas fa-bell text-gray-500 mr-3"></i>
                      <span className="text-sm">News & Updates</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 cursor-pointer">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-20">
        <div className="flex justify-around p-3">
          <a href="#" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-home text-xl"></i>
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-users text-xl"></i>
            <span className="text-xs mt-1">Circle</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-briefcase text-xl"></i>
            <span className="text-xs mt-1">Jobs</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-500">
            <i className="fas fa-bolt text-xl"></i>
            <span className="text-xs mt-1">Bytes</span>
          </a>
          <a href="#" className="flex flex-col items-center text-blue-600">
            <i className="fas fa-user text-xl"></i>
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
