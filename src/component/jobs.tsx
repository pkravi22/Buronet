// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
//import "swiper/css";
const Jobs: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [expandedFilters, setExpandedFilters] = useState<string[]>([
    "examType",
    "location",
  ]);
  const [selectedFilters, setSelectedFilters] = useState({
    examType: "",
    location: "",
    qualification: "",
    department: "",
    status: "",
  });
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
  };
  const toggleFilter = (filter: string) => {
    if (expandedFilters.includes(filter)) {
      setExpandedFilters(expandedFilters.filter((f) => f !== filter));
    } else {
      setExpandedFilters([...expandedFilters, filter]);
    }
  };
  const handleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };
  const updateFilter = (category: string, value: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [category]: value,
    });
  };
  const clearFilters = () => {
    setSelectedFilters({
      examType: "",
      location: "",
      qualification: "",
      department: "",
      status: "",
    });
  };
  const jobs = [
    {
      id: 1,
      title: "IAS Officer",
      department: "UPSC",
      location: "All India",
      qualification: "Graduate",
      status: "Ongoing",
      lastDate: "2025-05-20",
      logo: "fas fa-landmark",
    },
    {
      id: 2,
      title: "Staff Selection Officer",
      department: "SSC",
      location: "Delhi",
      qualification: "Graduate",
      status: "Ongoing",
      lastDate: "2025-05-15",
      logo: "fas fa-building",
    },
    {
      id: 3,
      title: "Bank Probationary Officer",
      department: "Banking",
      location: "Mumbai",
      qualification: "Graduate",
      status: "Upcoming",
      lastDate: "2025-06-10",
      logo: "fas fa-university",
    },
    {
      id: 4,
      title: "Railway Station Master",
      department: "Railways",
      location: "All India",
      qualification: "12th Pass",
      status: "Ongoing",
      lastDate: "2025-05-30",
      logo: "fas fa-train",
    },
    {
      id: 5,
      title: "Police Sub-Inspector",
      department: "Police",
      location: "Uttar Pradesh",
      qualification: "Graduate",
      status: "Ongoing",
      lastDate: "2025-05-25",
      logo: "fas fa-shield-alt",
    },
    {
      id: 6,
      title: "Junior Engineer",
      department: "PWD",
      location: "Bihar",
      qualification: "B.Tech",
      status: "Upcoming",
      lastDate: "2025-06-15",
      logo: "fas fa-hard-hat",
    },
    {
      id: 7,
      title: "Primary School Teacher",
      department: "Education",
      location: "Madhya Pradesh",
      qualification: "B.Ed",
      status: "Ongoing",
      lastDate: "2025-05-18",
      logo: "fas fa-chalkboard-teacher",
    },
    {
      id: 8,
      title: "Income Tax Officer",
      department: "Finance",
      location: "All India",
      qualification: "Graduate",
      status: "Upcoming",
      lastDate: "2025-06-05",
      logo: "fas fa-file-invoice-dollar",
    },
  ];
  const recommendedJobs = [
    {
      id: 101,
      title: "Assistant Director",
      department: "Intelligence Bureau",
      location: "Delhi",
      qualification: "Graduate",
      status: "Ongoing",
      lastDate: "2025-05-22",
      logo: "fas fa-user-secret",
    },
    {
      id: 102,
      title: "Forest Officer",
      department: "Environment",
      location: "All India",
      qualification: "Graduate",
      status: "Upcoming",
      lastDate: "2025-06-12",
      logo: "fas fa-tree",
    },
    {
      id: 103,
      title: "Statistical Officer",
      department: "Planning",
      location: "All India",
      qualification: "M.Sc Statistics",
      status: "Ongoing",
      lastDate: "2025-05-28",
      logo: "fas fa-chart-bar",
    },
  ];
  const recentlyViewedJobs = [
    {
      id: 201,
      title: "Assistant Manager",
      department: "SBI",
      location: "All India",
      qualification: "Graduate",
      status: "Ongoing",
      lastDate: "2025-05-10",
      logo: "fas fa-university",
    },
    {
      id: 202,
      title: "Tax Assistant",
      department: "Income Tax",
      location: "Delhi",
      qualification: "Graduate",
      status: "Ongoing",
      lastDate: "2025-05-17",
      logo: "fas fa-file-invoice-dollar",
    },
  ];
  const popularDepartments = [
    { name: "Railways", icon: "fas fa-train", count: 42, color: "bg-blue-500" },
    {
      name: "Banking",
      icon: "fas fa-university",
      count: 38,
      color: "bg-green-500",
    },
    {
      name: "Police",
      icon: "fas fa-shield-alt",
      count: 56,
      color: "bg-red-500",
    },
    {
      name: "Defence",
      icon: "fas fa-fighter-jet",
      count: 29,
      color: "bg-yellow-500",
    },
    {
      name: "Teaching",
      icon: "fas fa-chalkboard-teacher",
      count: 45,
      color: "bg-purple-500",
    },
    {
      name: "Healthcare",
      icon: "fas fa-hospital",
      count: 31,
      color: "bg-pink-500",
    },
  ];
  const getDaysRemaining = (dateString: string) => {
    const lastDate = new Date(dateString);
    const today = new Date();
    const diffTime = lastDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-100 text-green-800";
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const renderJobCard = (job: any) => {
    const daysRemaining = getDaysRemaining(job.lastDate);
    const isSaved = savedJobs.includes(job.id);
    return (
      <div
        key={job.id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                  job.department === "UPSC"
                    ? "bg-blue-600"
                    : job.department === "SSC"
                    ? "bg-green-600"
                    : job.department === "Banking"
                    ? "bg-yellow-600"
                    : job.department === "Railways"
                    ? "bg-red-600"
                    : job.department === "Police"
                    ? "bg-purple-600"
                    : "bg-gray-600"
                }`}
              >
                <i className={`${job.logo} text-xl`}></i>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.department}</p>
              </div>
            </div>
            <button
              onClick={() => handleSaveJob(job.id)}
              className="text-gray-400 hover:text-blue-500 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i
                className={`${
                  isSaved ? "fas text-blue-500" : "far"
                } fa-bookmark text-lg`}
              ></i>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center text-gray-600">
              <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>
              <span className="text-sm">{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <i className="fas fa-graduation-cap mr-2 text-gray-400"></i>
              <span className="text-sm">{job.qualification}</span>
            </div>
            <div className="flex items-center">
              <span
                className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                  job.status
                )}`}
              >
                {job.status}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <i className="far fa-calendar-alt mr-2 text-gray-400"></i>
              <span className="text-sm">
                {daysRemaining > 0
                  ? `${daysRemaining} days left`
                  : "Closing today"}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Apply Now
            </button>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-share-alt"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-info-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-50 flex relative pb-16 lg:pb-0 overflow-x-hidden">
      {/* Sidebar - Desktop only */}

      {/* Main Content */}
      <div className="w-full  xl:mr-80 flex-1">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm px-3 sm:px-4 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-full max-w-sm lg:w-96">
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search for jobs, departments, locations..."
              className="w-full pl-10 pr-12 py-2 rounded-md bg-gray-100 border-none focus:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fas fa-sliders-h"></i>
            </button>
            {showFilters && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={clearFilters}
                    className="text-blue-600 text-sm hover:text-blue-800 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Clear All
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  {/* Exam Type */}
                  <div>
                    <h3 className="font-medium mb-2">Exam Type</h3>
                    <div className="space-y-2">
                      {[
                        "UPSC",
                        "SSC CGL",
                        "SSC CHSL",
                        "State PSCs",
                        "Banking",
                        "Railways",
                      ].map((exam) => (
                        <div key={exam} className="flex items-center">
                          <input
                            type="radio"
                            id={`filter-${exam}`}
                            name="examType"
                            className="mr-2"
                            checked={selectedFilters.examType === exam}
                            onChange={() => updateFilter("examType", exam)}
                          />
                          <label
                            htmlFor={`filter-${exam}`}
                            className="text-sm text-gray-700"
                          >
                            {exam}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Location */}
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <div className="space-y-2">
                      {[
                        "All India",
                        "Delhi",
                        "Uttar Pradesh",
                        "Bihar",
                        "Madhya Pradesh",
                        "Maharashtra",
                      ].map((location) => (
                        <div key={location} className="flex items-center">
                          <input
                            type="radio"
                            id={`filter-${location}`}
                            name="location"
                            className="mr-2"
                            checked={selectedFilters.location === location}
                            onChange={() => updateFilter("location", location)}
                          />
                          <label
                            htmlFor={`filter-${location}`}
                            className="text-sm text-gray-700"
                          >
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Qualification */}
                  <div>
                    <h3 className="font-medium mb-2">Qualification</h3>
                    <div className="space-y-2">
                      {[
                        "10th Pass",
                        "12th Pass",
                        "Graduate",
                        "Post-Graduate",
                        "B.Tech",
                        "B.Ed",
                      ].map((qual) => (
                        <div key={qual} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`filter-${qual}`}
                            className="mr-2"
                            checked={selectedFilters.qualification === qual}
                            onChange={() => updateFilter("qualification", qual)}
                          />
                          <label
                            htmlFor={`filter-${qual}`}
                            className="text-sm text-gray-700"
                          >
                            {qual}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Department */}
                  <div>
                    <h3 className="font-medium mb-2">Department</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Police",
                        "Railway",
                        "Teaching",
                        "Defence",
                        "Banking",
                        "Finance",
                      ].map((dept) => (
                        <div key={dept} className="flex items-center">
                          <input
                            type="radio"
                            id={`filter-${dept}`}
                            name="department"
                            className="mr-2"
                            checked={selectedFilters.department === dept}
                            onChange={() => updateFilter("department", dept)}
                          />
                          <label
                            htmlFor={`filter-${dept}`}
                            className="text-sm text-gray-700"
                          >
                            {dept}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Status */}
                  <div>
                    <h3 className="font-medium mb-2">Application Status</h3>
                    <div className="space-y-2">
                      {["Ongoing", "Upcoming", "Closed"].map((status) => (
                        <div key={status} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`filter-${status}`}
                            className="mr-2"
                            checked={selectedFilters.status === status}
                            onChange={() => updateFilter("status", status)}
                          />
                          <label
                            htmlFor={`filter-${status}`}
                            className="text-sm text-gray-700"
                          >
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Date Filter */}
                  <div>
                    <h3 className="font-medium mb-2">Last Date</h3>
                    <input
                      type="date"
                      className="w-full p-2 text-sm rounded-md bg-gray-100 border-none focus:ring-0"
                    />
                  </div>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <div className="relative mr-4 cursor-pointer">
              <i className="fas fa-bell text-gray-600 text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </div>
          </div>
        </div>
        {/* Mobile Trending Section */}
        <div className="xl:hidden bg-white shadow-sm mb-2">
          <Swiper
            modules={[Autoplay]}
            direction="vertical"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-16"
          >
            <SwiperSlide>
              <div className="flex items-center px-4 h-full">
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full mr-2">
                  #UPSC
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    UPSC announces new exam pattern for Civil Services 2025
                  </p>
                  <p className="text-xs text-gray-500">
                    8K posts • 120 new posts
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center px-4 h-full">
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full mr-2">
                  #SSC
                </span>
                <p className="text-sm text-gray-700 truncate">
                  SSC CGL notification expected next week
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center px-4 h-full">
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full mr-2">
                  #Banking
                </span>
                <p className="text-sm text-gray-700 truncate">
                  SBI PO recruitment drive to start next month
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center px-4 h-full">
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full mr-2">
                  #Railways
                </span>
                <p className="text-sm text-gray-700 truncate">
                  Indian Railways announces 15,000 new vacancies
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Job Dashboard */}
        <div className="p-2 sm:p-6 flex">
          {/* Main Job Content */}
          {/* Main Job Content */}
          <div className="flex-1 max-w-full">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 px-0">
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="flex items-center text-blue-600 mb-2">
                  <i className="fas fa-briefcase text-xl mr-2"></i>
                  <h3 className="font-medium text-sm sm:text-base">
                    Total Jobs
                  </h3>
                </div>
                <p className="text-xl sm:text-2xl font-bold">2,458</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  125 new today
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="flex items-center text-green-600 mb-2">
                  <i className="fas fa-file-alt text-xl mr-2"></i>
                  <h3 className="font-medium">Applications</h3>
                </div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-gray-500 text-sm">3 in progress</p>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="flex items-center text-yellow-600 mb-2">
                  <i className="fas fa-bookmark text-xl mr-2"></i>
                  <h3 className="font-medium">Saved Jobs</h3>
                </div>
                <p className="text-2xl font-bold">{savedJobs.length}</p>
                <p className="text-gray-500 text-sm">Updated just now</p>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="flex items-center text-purple-600 mb-2">
                  <i className="fas fa-bell text-xl mr-2"></i>
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-gray-500 text-sm">4 new alerts</p>
              </div>
            </div>
            {/* Popular Departments */}
            <div className="bg-white rounded-lg shadow-md mb-6 p-3 sm:p-5 mx-0">
              <h2 className="text-xl font-semibold mb-4">
                Popular Departments
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 px-0">
                {popularDepartments.map((dept, index) => (
                  <div key={index} className="cursor-pointer group">
                    <div
                      className={`${dept.color} text-white rounded-lg p-4 flex flex-col items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <i className={`${dept.icon} text-2xl mb-2`}></i>
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className="text-xs mt-1">{dept.count} jobs</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Job Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-100">
                <div className="flex overflow-x-auto">
                  <button
                    className={`px-4 sm:px-6 py-3 font-medium text-sm ${
                      activeTab === "all"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab("all")}
                  >
                    All Jobs
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm ${
                      activeTab === "recommended"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab("recommended")}
                  >
                    Recommended
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm ${
                      activeTab === "saved"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab("saved")}
                  >
                    Saved Jobs
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm ${
                      activeTab === "applied"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab("applied")}
                  >
                    Applied Jobs
                  </button>
                  <button
                    className={`px-6 py-3 font-medium text-sm ${
                      activeTab === "recent"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab("recent")}
                  >
                    Recently Viewed
                  </button>
                </div>
              </div>
              <div className="p-3 sm:p-5">
                {activeTab === "all" && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Available Jobs</h2>
                      <div className="flex items-center">
                        <span className="text-gray-600 text-sm mr-2">
                          Sort by:
                        </span>
                        <div className="relative">
                          <select className="appearance-none bg-gray-100 border-none rounded-md pl-3 pr-8 py-2 text-sm focus:ring-0 cursor-pointer">
                            <option>Latest</option>
                            <option>Deadline (Earliest)</option>
                            <option>Popularity</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                            <i className="fas fa-chevron-down text-xs"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-0">
                      {jobs.map((job) => renderJobCard(job))}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                        Load More Jobs
                      </button>
                    </div>
                  </>
                )}
                {activeTab === "recommended" && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">
                        Recommended for You
                      </h2>
                      <div className="flex items-center">
                        <span className="text-gray-600 text-sm mr-2">
                          Based on your profile
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-0">
                      {recommendedJobs.map((job) => renderJobCard(job))}
                    </div>
                  </>
                )}
                {activeTab === "saved" && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Saved Jobs</h2>
                    </div>
                    {savedJobs.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-0">
                        {jobs
                          .filter((job) => savedJobs.includes(job.id))
                          .map((job) => renderJobCard(job))}
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <div className="text-gray-400 mb-3">
                          <i className="far fa-bookmark text-5xl"></i>
                        </div>
                        <h3 className="text-lg font-medium text-gray-700 mb-2">
                          No saved jobs yet
                        </h3>
                        <p className="text-gray-500 mb-4">
                          Bookmark jobs you're interested in to view them later
                        </p>
                        <button
                          onClick={() => setActiveTab("all")}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                        >
                          Browse Jobs
                        </button>
                      </div>
                    )}
                  </>
                )}
                {activeTab === "applied" && (
                  <div className="text-center py-10">
                    <div className="text-gray-400 mb-3">
                      <i className="far fa-file-alt text-5xl"></i>
                    </div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      No applications yet
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Start applying to jobs that match your qualifications
                    </p>
                    <button
                      onClick={() => setActiveTab("all")}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Find Jobs
                    </button>
                  </div>
                )}
                {activeTab === "recent" && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Recently Viewed</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-0">
                      {recentlyViewedJobs.map((job) => renderJobCard(job))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Now Sidebar */}
      <div className="w-80 bg-white shadow-md fixed right-0 h-full overflow-y-auto hidden xl:block">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold">Trending Now</h2>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full mr-2">
                #UPSC
              </span>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Hot
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <h3 className="font-medium mb-2">
            UPSC announces new exam pattern for Civil Services 2025
          </h3>
          <p className="text-gray-500 text-sm mb-1">8K posts • 120 new posts</p>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              #SSC
            </span>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <h3 className="font-medium mb-2">
            SSC CGL notification expected next week
          </h3>
          <p className="text-gray-500 text-sm mb-1">5K posts • 75 new posts</p>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              #Banking
            </span>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <h3 className="font-medium mb-2">
            SBI PO recruitment drive to start next month
          </h3>
          <p className="text-gray-500 text-sm mb-1">3K posts • 42 new posts</p>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              #Railways
            </span>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <h3 className="font-medium mb-2">
            Indian Railways announces 15,000 new vacancies
          </h3>
          <p className="text-gray-500 text-sm mb-1">
            10K posts • 200 new posts
          </p>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              #ExamTips
            </span>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <h3 className="font-medium mb-2">
            Last minute preparation tips for competitive exams
          </h3>
          <p className="text-gray-500 text-sm mb-1">2K posts • 35 new posts</p>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Upcoming Exams</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <i className="fas fa-file-alt"></i>
              </div>
              <div>
                <h3 className="font-medium text-sm">UPSC Prelims 2025</h3>
                <p className="text-xs text-gray-500">June 15, 2025</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-3">
                <i className="fas fa-file-alt"></i>
              </div>
              <div>
                <h3 className="font-medium text-sm">SSC CGL Tier I</h3>
                <p className="text-xs text-gray-500">May 20, 2025</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3">
                <i className="fas fa-file-alt"></i>
              </div>
              <div>
                <h3 className="font-medium text-sm">IBPS PO Prelims</h3>
                <p className="text-xs text-gray-500">July 10, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Bottom Navigation */}

      {/* Designed by badge */}
      <div className="fixed bottom-20 right-4 lg:bottom-4 bg-white rounded-full shadow-md px-3 py-2 flex items-center text-sm z-50 xl:right-84">
        <span className="mr-2">Designed by</span>
        <div className="w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white mr-1">
          <i className="fas fa-magic text-xs"></i>
        </div>
        <span className="font-medium">Readdy</span>
      </div>
    </div>
  );
};
export default Jobs;
