// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const Circle: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [isListView, setIsListView] = useState<boolean>(false);
  const industryFilters = [
    "All",
    "Technology",
    "Design",
    "Marketing",
    "Finance",
    "Healthcare",
  ];
  const groupFilters = [
    "All",
    "Colleagues",
    "Classmates",
    "Events",
    "Favorites",
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Sidebar */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 w-full md:max-w-4xl px-4 md:px-0">
          {/* Search Bar */}
          <div className="p-4 flex flex-col md:flex-row items-center gap-4 md:gap-0">
            <div className="relative flex-1 w-full md:w-auto">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search connections..."
                className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none text-sm border-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="ml-4 relative cursor-pointer">
              <i className="fas fa-bell text-gray-600 text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </div>
          </div>
          {/* Connection Stats */}
          <div className="px-4 mt-2 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <i className="fas fa-user-friends text-blue-500"></i>
                </div>
                <div>
                  <h3 className="font-medium">Connections</h3>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">248 professionals</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                  <i className="fas fa-user-plus text-green-500"></i>
                </div>
                <div>
                  <h3 className="font-medium">Pending</h3>
                  <p className="text-sm text-gray-500">Requests</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">12 new invites</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center mr-3">
                  <i className="fas fa-chart-network text-yellow-500"></i>
                </div>
                <div>
                  <h3 className="font-medium">Network</h3>
                  <p className="text-sm text-gray-500">Growth</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">+15% this month</p>
            </div>
          </div>
          {/* Popular Profiles Section */}
          <div className="mt-8 px-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Popular in Your Network
                </h2>
                <button className="text-blue-500 text-sm hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20successful%20female%20CEO%20with%20elegant%20business%20attire%20confident%20pose%20against%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=80&height=80&seq=14&orientation=squarish"
                        alt="Emma Watson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-medium text-sm">Emma Watson</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    CEO at TechGrowth
                  </p>
                  <p className="text-xs text-blue-500 mt-2">4.8k followers</p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20distinguished%20senior%20executive%20asian%20man%20wearing%20premium%20business%20suit%20against%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=80&height=80&seq=15&orientation=squarish"
                        alt="John Zhang"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-medium text-sm">John Zhang</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    VP Design at Apple
                  </p>
                  <p className="text-xs text-blue-500 mt-2">3.2k followers</p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20charismatic%20african%20american%20woman%20executive%20in%20modern%20business%20attire%20against%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=80&height=80&seq=16&orientation=squarish"
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 right-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-medium text-sm">Sarah Johnson</h3>
                  <p className="text-xs text-gray-500 mt-1">CTO at Microsoft</p>
                  <p className="text-xs text-blue-500 mt-2">2.9k followers</p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle%20aged%20european%20tech%20entrepreneur%20man%20with%20glasses%20modern%20business%20casual%20attire%20against%20neutral%20studio%20background%20high%20end%20corporate%20portrait&width=80&height=80&seq=17&orientation=squarish"
                        alt="Mark Anderson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 right-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-medium text-sm">Mark Anderson</h3>
                  <p className="text-xs text-gray-500 mt-1">Founder at Tesla</p>
                  <p className="text-xs text-blue-500 mt-2">2.5k followers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Filter and Organization Tools */}
          <div className="mt-8 mx-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Connections
              </h2>
              <div className="flex flex-wrap gap-3">
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-blue-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-2"></i>
                  Add Connection
                </button>
                <button className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-file-export mr-2"></i>
                  Export
                </button>
              </div>
            </div>
            {/* Filters */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-6">
              <div className="flex flex-wrap gap-3">
                <div className="relative flex-grow md:flex-grow-0">
                  <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                    <span>Industry: {activeFilter}</span>
                    <i className="fas fa-chevron-down ml-2 text-gray-500"></i>
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg z-10 hidden">
                    {industryFilters.map((filter) => (
                      <div
                        key={filter}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => setActiveFilter(filter)}
                      >
                        {filter}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                    <span>Group: {activeGroup}</span>
                    <i className="fas fa-chevron-down ml-2 text-gray-500"></i>
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg z-10 hidden">
                    {groupFilters.map((group) => (
                      <div
                        key={group}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => setActiveGroup(group)}
                      >
                        {group}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  id="gridViewBtn"
                  className={`text-gray-500 hover:text-gray-700 cursor-pointer p-2 rounded-lg ${
                    !isListView ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => setIsListView(false)}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  id="listViewBtn"
                  className={`text-gray-500 hover:text-gray-700 cursor-pointer p-2 rounded-lg ${
                    isListView ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => setIsListView(true)}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
            {/* Connection Cards Grid */}
            <div
              className={`${
                isListView
                  ? "space-y-4"
                  : "grid grid-cols-1 md:grid-cols-2 gap-6"
              }`}
            >
              {/* Connection Card 1 */}
              <a
                href="https://readdy.ai/home/b5fed37f-e960-4360-bf1b-764537524d3c/6861dc02-cda9-4479-944c-83a26cc67086"
                data-readdy="true"
                className={`group bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer ${
                  isListView ? "block" : ""
                }`}
              >
                <div
                  className={`flex items-start ${
                    isListView ? "space-x-6" : "space-x-4"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`${
                        isListView ? "w-20 h-20" : "w-16 h-16"
                      } rounded-full overflow-hidden ring-2 ring-offset-2 ring-gray-100 group-hover:ring-blue-100 transition-all`}
                    >
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520female%2520product%2520designer%2520with%2520short%2520dark%2520hair%252C%2520smiling%2520confidently%252C%2520wearing%2520business%2520casual%2520attire%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=64&height=64&seq=2&orientation=squarish"
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3
                        className={`font-semibold text-gray-900 ${
                          isListView ? "text-lg" : ""
                        }`}
                      >
                        Sarah Johnson
                      </h3>
                      <i className="fas fa-check-circle text-blue-500 ml-1.5 text-sm"></i>
                    </div>
                    <p className="text-sm text-gray-600">
                      Senior Product Designer at TechCorp
                    </p>
                    <div className="mt-3 flex items-center space-x-3">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                        1st degree
                      </span>
                      <span className="text-xs text-gray-500">
                        Connected 2 years ago
                      </span>
                    </div>
                    {isListView && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                          San Francisco Bay Area
                        </p>
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-envelope text-gray-400 mr-2"></i>
                          sarah.johnson@techcorp.com
                        </p>
                        <div className="text-sm text-gray-600">
                          <i className="fas fa-clock text-gray-400 mr-2"></i>
                          Recent Activity: Shared an article about UX Design
                          trends
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-comment-alt"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-award"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                  <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </a>
              {/* Connection Card 2 */}
              <a
                href="https://readdy.ai/home/b5fed37f-e960-4360-bf1b-764537524d3c/6861dc02-cda9-4479-944c-83a26cc67086"
                data-readdy="true"
                className={`group bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer ${
                  isListView ? "block" : ""
                }`}
              >
                <div
                  className={`flex items-start ${
                    isListView ? "space-x-6" : "space-x-4"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`${
                        isListView ? "w-20 h-20" : "w-16 h-16"
                      } rounded-full overflow-hidden ring-2 ring-offset-2 ring-gray-100 group-hover:ring-blue-100 transition-all`}
                    >
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520an%2520asian%2520man%2520in%2520his%252030s%2520wearing%2520business%2520attire%252C%2520confident%2520expression%252C%2520high%2520quality%2520portrait%2520with%2520neutral%2520background%252C%2520studio%2520lighting&width=64&height=64&seq=3&orientation=squarish"
                        alt="David Chen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3
                        className={`font-semibold text-gray-900 ${
                          isListView ? "text-lg" : ""
                        }`}
                      >
                        David Chen
                      </h3>
                      <i className="fas fa-check-circle text-blue-500 ml-1.5 text-sm"></i>
                    </div>
                    <p className="text-sm text-gray-600">
                      Software Engineer at CloudSystems
                    </p>
                    <div className="mt-3 flex items-center space-x-3">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                        1st degree
                      </span>
                      <span className="text-xs text-gray-500">
                        Connected 8 months ago
                      </span>
                    </div>
                    {isListView && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                          San Francisco Bay Area
                        </p>
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-envelope text-gray-400 mr-2"></i>
                          david.chen@cloudsystems.com
                        </p>
                        <div className="text-sm text-gray-600">
                          <i className="fas fa-clock text-gray-400 mr-2"></i>
                          Recent Activity: Published a blog post about Cloud
                          Architecture
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-comment-alt"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-award"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                  <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </a>
              {/* Connection Card 3 */}
              <a
                href="https://readdy.ai/home/b5fed37f-e960-4360-bf1b-764537524d3c/6861dc02-cda9-4479-944c-83a26cc67086"
                data-readdy="true"
                className={`group bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer ${
                  isListView ? "block" : ""
                }`}
              >
                <div
                  className={`flex items-start ${
                    isListView ? "space-x-6" : "space-x-4"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`${
                        isListView ? "w-20 h-20" : "w-16 h-16"
                      } rounded-full overflow-hidden ring-2 ring-offset-2 ring-gray-100 group-hover:ring-blue-100 transition-all`}
                    >
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520black%2520woman%2520with%2520natural%2520hair%2520in%2520corporate%2520attire%252C%2520confident%2520smile%252C%2520high%2520quality%2520portrait%2520with%2520neutral%2520background%252C%2520studio%2520lighting&width=64&height=64&seq=4&orientation=squarish"
                        alt="Maya Williams"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3
                        className={`font-semibold text-gray-900 ${
                          isListView ? "text-lg" : ""
                        }`}
                      >
                        Maya Williams
                      </h3>
                      <i className="fas fa-check-circle text-blue-500 ml-1.5 text-sm"></i>
                    </div>
                    <p className="text-sm text-gray-600">
                      Marketing Director at GlobalBrands
                    </p>
                    <div className="mt-3 flex items-center space-x-3">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                        1st degree
                      </span>
                      <span className="text-xs text-gray-500">
                        Connected 1 year ago
                      </span>
                    </div>
                    {isListView && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                          New York City
                        </p>
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-envelope text-gray-400 mr-2"></i>
                          maya.williams@globalbrands.com
                        </p>
                        <div className="text-sm text-gray-600">
                          <i className="fas fa-clock text-gray-400 mr-2"></i>
                          Recent Activity: Shared insights on Digital Marketing
                          Trends
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-comment-alt"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-award"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                  <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </a>
              {/* Connection Card 4 */}
              <a
                href="https://readdy.ai/home/b5fed37f-e960-4360-bf1b-764537524d3c/6861dc02-cda9-4479-944c-83a26cc67086"
                data-readdy="true"
                className={`group bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer ${
                  isListView ? "block" : ""
                }`}
              >
                <div
                  className={`flex items-start ${
                    isListView ? "space-x-6" : "space-x-4"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`${
                        isListView ? "w-20 h-20" : "w-16 h-16"
                      } rounded-full overflow-hidden ring-2 ring-offset-2 ring-gray-100 group-hover:ring-blue-100 transition-all`}
                    >
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520middle%2520aged%2520caucasian%2520man%2520with%2520gray%2520hair%2520and%2520glasses%252C%2520wearing%2520business%2520formal%2520attire%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=64&height=64&seq=5&orientation=squarish"
                        alt="Robert Anderson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3
                        className={`font-semibold text-gray-900 ${
                          isListView ? "text-lg" : ""
                        }`}
                      >
                        Robert Anderson
                      </h3>
                      <i className="fas fa-check-circle text-blue-500 ml-1.5 text-sm"></i>
                    </div>
                    <p className="text-sm text-gray-600">
                      CFO at Financial Solutions Inc.
                    </p>
                    <div className="mt-3 flex items-center space-x-3">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                        1st degree
                      </span>
                      <span className="text-xs text-gray-500">
                        Connected 6 months ago
                      </span>
                    </div>
                    {isListView && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                          Chicago, Illinois
                        </p>
                        <p className="text-sm text-gray-600">
                          <i className="fas fa-envelope text-gray-400 mr-2"></i>
                          robert.anderson@financialsolutions.com
                        </p>
                        <div className="text-sm text-gray-600">
                          <i className="fas fa-clock text-gray-400 mr-2"></i>
                          Recent Activity: Posted about Financial Technology
                          Trends
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-comment-alt"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-award"></i>
                    </button>
                    <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                  <button className="bg-gray-50 text-gray-700 p-2.5 rounded-lg hover:bg-gray-100 transition-colors group-hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </a>
            </div>
            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-chevron-left text-xs"></i>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            {/* Mobile Sections */}
            <div className="md:hidden mt-8 space-y-8 bg-white p-4 rounded-lg shadow-sm">
              {/* People You May Know - Mobile */}
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  People You May Know
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520young%2520indian%2520woman%2520in%2520business%2520attire%252C%2520confident%2520smile%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=48&height=48&seq=11&orientation=squarish"
                        alt="Priya Patel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">Priya Patel</h3>
                      <p className="text-xs text-gray-500">
                        UX Designer at DesignHub
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        5 mutual connections
                      </p>
                    </div>
                    <button className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-100 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-plus mr-1"></i>
                      Connect
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520middle%2520aged%2520caucasian%2520woman%2520with%2520short%2520blonde%2520hair%2520wearing%2520business%2520formal%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=48&height=48&seq=12&orientation=squarish"
                        alt="Karen Miller"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">Karen Miller</h3>
                      <p className="text-xs text-gray-500">
                        VP of Operations at Enterprise Inc.
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        3 mutual connections
                      </p>
                    </div>
                    <button className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-100 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-plus mr-1"></i>
                      Connect
                    </button>
                  </div>
                </div>
                <button className="mt-4 text-blue-500 text-sm font-medium hover:text-blue-600 cursor-pointer">
                  View more suggestions
                </button>
              </div>

              {/* Groups You Might Like - Mobile */}
              <div>
                <h2 className="text-lg font-semibold mb-4">
                  Groups You Might Like
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                        <i className="fas fa-laptop-code text-blue-500"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">
                          Tech Innovators Network
                        </h3>
                        <p className="text-xs text-gray-500">15,482 members</p>
                      </div>
                    </div>
                    <button className="w-full bg-blue-50 text-blue-600 text-xs py-1.5 rounded-lg hover:bg-blue-100 mt-2 !rounded-button whitespace-nowrap cursor-pointer">
                      Join Group
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                        <i className="fas fa-paint-brush text-green-500"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">
                          Design Professionals
                        </h3>
                        <p className="text-xs text-gray-500">8,934 members</p>
                      </div>
                    </div>
                    <button className="w-full bg-blue-50 text-blue-600 text-xs py-1.5 rounded-lg hover:bg-blue-100 mt-2 !rounded-button whitespace-nowrap cursor-pointer">
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar - Network Growth */}
        <div className="hidden md:block w-[320px] bg-white shadow-sm p-4">
          <div className="border-t pt-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">People You May Know</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520young%2520indian%2520woman%2520in%2520business%2520attire%252C%2520confident%2520smile%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=48&height=48&seq=11&orientation=squarish"
                    alt="Priya Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">Priya Patel</h3>
                  <p className="text-xs text-gray-500">
                    UX Designer at DesignHub
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    5 mutual connections
                  </p>
                </div>
                <button className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-100 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-1"></i>
                  Connect
                </button>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520middle%2520aged%2520caucasian%2520woman%2520with%2520short%2520blonde%2520hair%2520wearing%2520business%2520formal%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=48&height=48&seq=12&orientation=squarish"
                    alt="Karen Miller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">Karen Miller</h3>
                  <p className="text-xs text-gray-500">
                    VP of Operations at Enterprise Inc.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    3 mutual connections
                  </p>
                </div>
                <button className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-100 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-1"></i>
                  Connect
                </button>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520latino%2520man%2520in%2520his%252030s%2520wearing%2520business%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520neutral%2520studio%2520background%252C%2520high%2520quality%2520portrait&width=48&height=48&seq=13&orientation=squarish"
                    alt="Carlos Mendez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">Carlos Mendez</h3>
                  <p className="text-xs text-gray-500">
                    Frontend Developer at WebTech
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    7 mutual connections
                  </p>
                </div>
                <button className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-100 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-1"></i>
                  Connect
                </button>
              </div>
            </div>
            <button className="mt-4 text-blue-500 text-sm font-medium hover:text-blue-600 cursor-pointer">
              View more suggestions
            </button>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">
              Groups You Might Like
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-laptop-code text-blue-500"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">
                      Tech Innovators Network
                    </h3>
                    <p className="text-xs text-gray-500">15,482 members</p>
                  </div>
                </div>
                <button className="w-full bg-blue-50 text-blue-600 text-xs py-1.5 rounded-lg hover:bg-blue-100 mt-2 !rounded-button whitespace-nowrap cursor-pointer">
                  Join Group
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                    <i className="fas fa-paint-brush text-green-500"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">
                      Design Professionals
                    </h3>
                    <p className="text-xs text-gray-500">8,934 members</p>
                  </div>
                </div>
                <button className="w-full bg-blue-50 text-blue-600 text-xs py-1.5 rounded-lg hover:bg-blue-100 mt-2 !rounded-button whitespace-nowrap cursor-pointer">
                  Join Group
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs flex items-center justify-end text-gray-500">
            <span>Designed by</span>
            <span className="ml-1 bg-purple-100 text-purple-600 px-2 py-1 rounded-full flex items-center">
              <i className="fas fa-rocket mr-1"></i>
              Readdy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Circle;
