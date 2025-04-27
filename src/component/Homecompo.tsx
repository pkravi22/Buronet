// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      sender: "Sarah Johnson",
      senderAvatar:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20woman%20with%20neutral%20expression%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background&width=80&height=80&seq=60&orientation=squarish",
      content: "liked your recent post about UI design trends",
      timestamp: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      sender: "Michael Thompson",
      senderAvatar:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20man%20with%20neutral%20expression%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background&width=80&height=80&seq=61&orientation=squarish",
      content: "commented on your project showcase",
      timestamp: "15 minutes ago",
      unread: true,
    },
    {
      id: 3,
      sender: "Emily Davis",
      senderAvatar:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20woman%20with%20neutral%20expression%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background&width=80&height=80&seq=62&orientation=squarish",
      content: "shared your article about remote work",
      timestamp: "1 hour ago",
      unread: true,
    },
    {
      id: 4,
      sender: "David Wilson",
      senderAvatar:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20man%20with%20neutral%20expression%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background&width=80&height=80&seq=63&orientation=squarish",
      content: "mentioned you in a comment",
      timestamp: "2 hours ago",
      unread: true,
    },
    {
      id: 5,
      sender: "Jessica Brown",
      senderAvatar:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20woman%20with%20neutral%20expression%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background&width=80&height=80&seq=64&orientation=squarish",
      content: "sent you a connection request",
      timestamp: "3 hours ago",
      unread: true,
    },
  ]);
  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };
  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };
  const handleDeleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };
  // Close notifications panel when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const panel = document.getElementById("notification-panel");
      const bell = document.getElementById("notification-bell");
      if (
        panel &&
        bell &&
        !panel.contains(event.target as Node) &&
        !bell.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Main Layout */}
      <div className="flex">
        <div className="flex-1  lg:mr-80">
          {/* Top Bar */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="md:hidden">
              <img
                src="https://static.readdy.ai/image/fde52c38d7c7a4cc31a1d5255c284c25/85bc10a2f6a4623569dfec1174474176.png"
                alt="Buronet Logo"
                className="h-11 w-11"
              />
            </div>
            <div className="relative flex-1 max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  id="notification-bell"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <i className="fas fa-bell text-xl"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    5
                  </span>
                </button>
                {showNotifications && (
                  <div
                    id="notification-panel"
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-medium text-sm">Notifications</h3>
                      <button
                        id="mark-all-read"
                        onClick={() => handleMarkAllAsRead()}
                        className="text-blue-600 text-xs hover:text-blue-700 !rounded-button whitespace-nowrap"
                      >
                        Mark all as read
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification, index) => (
                        <div
                          key={notification.id}
                          className={`p-3 border-b border-gray-100 ${
                            notification.unread ? "bg-blue-50" : "bg-white"
                          } hover:bg-gray-50 transition-colors`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <img
                                src={notification.senderAvatar}
                                alt={notification.sender}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div>
                                <p className="text-sm">
                                  <span className="font-medium">
                                    {notification.sender}
                                  </span>
                                  <span className="text-gray-600">
                                    {" "}
                                    {notification.content}
                                  </span>
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {notification.timestamp}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {notification.unread && (
                                <button
                                  onClick={() =>
                                    handleMarkAsRead(notification.id)
                                  }
                                  className="text-gray-400 hover:text-blue-600 !rounded-button whitespace-nowrap"
                                >
                                  <i className="fas fa-check text-xs"></i>
                                </button>
                              )}
                              <button
                                onClick={() =>
                                  handleDeleteNotification(notification.id)
                                }
                                className="text-gray-400 hover:text-red-600 !rounded-button whitespace-nowrap"
                              >
                                <i className="fas fa-times text-xs"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <img
                src="https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20person%20with%20neutral%20expression%2C%20high%20quality%2C%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background%2C%20soft%20colors&width=80&height=80&seq=1&orientation=squarish"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover md:hidden"
              />
            </div>
          </div>
          {/* Content Area */}
          <div className="max-w-2xl mx-auto px-4 py-6">
            {activeTab === "home" && (
              <div>
                {/* Featured Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    "Trending Topics",
                    "Industry News",
                    "Tech Updates",
                    "Career Growth",
                  ].map((category, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <i
                            className={`fas ${
                              index === 0
                                ? "fa-chart-line text-red-500"
                                : index === 1
                                ? "fa-newspaper text-blue-500"
                                : index === 2
                                ? "fa-microchip text-green-500"
                                : "fa-rocket text-purple-500"
                            }`}
                          ></i>
                        </div>
                        <h3 className="font-medium text-sm">{category}</h3>
                      </div>
                      <p className="text-xs text-gray-500">
                        {Math.floor(Math.random() * 100) + 20} new updates
                      </p>
                    </div>
                  ))}
                </div>
                {/* Share Knowledge */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Share Your Professional Insights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-white p-4 rounded-xl flex items-center space-x-3 hover:shadow-md transition !rounded-button whitespace-nowrap cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                        <i className="fas fa-lightbulb text-green-500"></i>
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-sm">Share Article</h3>
                        <p className="text-xs text-gray-500">
                          Write your thoughts
                        </p>
                      </div>
                    </button>
                    <button className="bg-white p-4 rounded-xl flex items-center space-x-3 hover:shadow-md transition !rounded-button whitespace-nowrap cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <i className="fas fa-chalkboard-teacher text-blue-500"></i>
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-sm">Create Poll</h3>
                        <p className="text-xs text-gray-500">
                          Get community feedback
                        </p>
                      </div>
                    </button>
                    <button className="bg-white p-4 rounded-xl flex items-center space-x-3 hover:shadow-md transition !rounded-button whitespace-nowrap cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                        <i className="fas fa-calendar-alt text-purple-500"></i>
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-sm">Host Event</h3>
                        <p className="text-xs text-gray-500">
                          Schedule a meetup
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                {/* Professional Insights Feed */}
                {[1, 2, 3].map((post) => (
                  <div
                    key={post}
                    className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src={`https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20person%20$%7Bpost%7D%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background&width=80&height=80&seq=${
                                post + 10
                              }&orientation=squarish`}
                              alt={`User ${post}`}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-lg flex items-center justify-center">
                              <i className="fas fa-check text-white text-xs"></i>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-sm">
                                Sarah Johnson
                              </h3>
                              <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-lg">
                                Industry Expert
                              </span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">
                              Senior Product Designer at TechCorp
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400">2h ago</span>
                          <button className="p-2 hover:bg-gray-50 rounded-lg transition !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-ellipsis-h text-gray-400"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-lg mb-2">
                          Revolutionizing User Experience: Our Latest Design
                          System
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Excited to share our team's latest innovation in
                          design systems. We've focused on accessibility,
                          performance, and scalability to create a seamless
                          experience for millions of users. Here's an exclusive
                          preview of our work.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">
                            #DesignSystems
                          </span>
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">
                            #UXInnovation
                          </span>
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">
                            #ProductDesign
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 mb-4">
                        <img
                          src={`https://readdy.ai/api/search-image?query=modern%20user%20interface%20design%20system%20components%2C%20professional%20UI%20UX%20design%2C%20clean%20minimal%20layout%20with%20typography%20and%20color%20palette%2C%20high%20quality%20render%20with%20soft%20shadows%20and%20gradients%2C%20light%20background&width=600&height=400&seq=${
                            post + 20
                          }&orientation=landscape`}
                          alt="Design System Preview"
                          className="w-full rounded-lg"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="far fa-heart"></i>
                            <span>Like ({142})</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="far fa-comment"></i>
                            <span>Discuss ({24})</span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="far fa-bookmark"></i>
                            <span>Save</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="far fa-share-square"></i>
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "circle" && (
              <div>
                <h2 className="text-xl font-bold mb-6">My Circle</h2>
                {/* Connections Stats */}
                <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">248</p>
                      <p className="text-sm text-gray-500">Connections</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">18</p>
                      <p className="text-sm text-gray-500">Pending</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">42</p>
                      <p className="text-sm text-gray-500">Mutual</p>
                    </div>
                  </div>
                </div>
                {/* Connection Suggestions */}
                <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
                  <h3 className="font-semibold mb-4">People you may know</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((person) => (
                      <div
                        key={person}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={`https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20business%20person%20$%7Bperson%7D%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background%2C%20soft%20colors&width=80&height=80&seq=${
                              person + 30
                            }&orientation=squarish`}
                            alt={`Person ${person}`}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-sm">
                              Michael Thompson
                            </h4>
                            <p className="text-xs text-gray-500">
                              Product Manager at TechCorp
                            </p>
                            <p className="text-xs text-gray-400">
                              12 mutual connections
                            </p>
                          </div>
                        </div>
                        <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm font-medium px-4 py-1.5 rounded-full transition !rounded-button whitespace-nowrap cursor-pointer">
                          Connect
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="w-full text-blue-600 text-sm font-medium mt-4 py-2 hover:bg-blue-50 rounded-lg transition !rounded-button whitespace-nowrap cursor-pointer">
                    View More
                  </button>
                </div>
                {/* Recent Activities */}
                <div className="bg-white rounded-xl shadow-sm p-5">
                  <h3 className="font-semibold mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((activity) => (
                      <div key={activity} className="flex space-x-3">
                        <img
                          src={`https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20business%20person%20$%7Bactivity+3%7D%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background%2C%20soft%20colors&width=80&height=80&seq=${
                            activity + 40
                          }&orientation=squarish`}
                          alt={`Activity ${activity}`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Jennifer Lee</span>
                            <span className="text-gray-500">
                              {" "}
                              started a new position as Senior Designer at
                              CreativeStudio
                            </span>
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            2 days ago
                          </p>
                          <div className="mt-2 flex space-x-2">
                            <button className="text-sm text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                              <i className="far fa-thumbs-up mr-1"></i> Like
                            </button>
                            <button className="text-sm text-gray-600 hover:bg-gray-50 px-3 py-1 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                              <i className="far fa-comment mr-1"></i> Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right Sidebar - Trending Topics */}
        <div className="hidden lg:block w-80 fixed right-0 top-0 h-screen overflow-y-auto bg-white border-l border-gray-200 p-4">
          <h2 className="font-bold text-lg mb-4">Trending Now</h2>
          {/* Trending Topics */}
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((trend, index) => (
              <div
                key={trend}
                className="bg-gray-50 rounded-xl p-3 cursor-pointer hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <span className="text-xs font-medium text-gray-500">
                        #
                        {index === 0
                          ? "TechNews"
                          : index === 1
                          ? "DesignTrends"
                          : index === 2
                          ? "WorkFromHome"
                          : index === 3
                          ? "AIinnovation"
                          : "DigitalNomad"}
                      </span>
                      {index === 0 && (
                        <span className="ml-2 px-1.5 py-0.5 bg-red-100 text-red-600 text-xs rounded-sm flex items-center">
                          <i className="fas fa-fire-alt text-xs mr-1"></i> Hot
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-sm mt-1">
                      {index === 0
                        ? "Apple announces new AI features for next iOS update"
                        : index === 1
                        ? "Minimalism making a comeback in UX design"
                        : index === 2
                        ? "Remote work policies changing post-pandemic"
                        : index === 3
                        ? "New breakthrough in generative AI technology"
                        : "Digital nomad visas expanding to more countries"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.floor(Math.random() * 10) + 1}K posts •{" "}
                      {Math.floor(Math.random() * 100) + 1} new posts
                    </p>
                  </div>
                  <div className="text-gray-400">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-4">Suggested For You</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((suggestion) => (
                <div key={suggestion} className="flex items-center space-x-3">
                  <img
                    src={`https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20business%20person%20$%7Bsuggestion+6%7D%2C%20high%20quality%20studio%20lighting%2C%20professional%20headshot%20style%2C%20minimalist%20background%2C%20soft%20colors&width=80&height=80&seq=${
                      suggestion + 50
                    }&orientation=squarish`}
                    alt={`Suggestion ${suggestion}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">David Wilson</h3>
                    <p className="text-xs text-gray-500">
                      UX Designer at DesignLab
                    </p>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:bg-blue-50 px-3 py-1 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              <a href="#" className="hover:underline cursor-pointer">
                About
              </a>
              <a href="#" className="hover:underline cursor-pointer">
                Help Center
              </a>
              <a href="#" className="hover:underline cursor-pointer">
                Privacy & Terms
              </a>
              <a href="#" className="hover:underline cursor-pointer">
                Advertising
              </a>
              <a href="#" className="hover:underline cursor-pointer">
                Business Services
              </a>
              <a href="#" className="hover:underline cursor-pointer">
                Get the App
              </a>
            </div>
            <p className="mt-3">© 2025 Nexus Corporation</p>
          </div>
        </div>
      </div>
      {/* Floating Action Button (Mobile) */}
      <button className="fixed bottom-20 right-4 md:hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-10 !rounded-button whitespace-nowrap cursor-pointer">
        <i className="fas fa-plus text-xl"></i>
      </button>
    </div>
  );
};
export default App;
