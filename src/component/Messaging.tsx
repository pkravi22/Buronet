// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("messaging");
  const [activeConversation, setActiveConversation] = useState<number | null>(
    1
  );
  const [messageText, setMessageText] = useState("");
  const [activeDetailTab, setActiveDetailTab] = useState("info");
  const [searchConversation, setSearchConversation] = useState("");
  const [conversationTab, setConversationTab] = useState("all");
  const conversations = [
    {
      id: 1,
      name: "Emily Parker",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520young%2520woman%2520with%2520blonde%2520hair%2520and%2520blue%2520eyes%2520smiling%2520at%2520camera%2520against%2520neutral%2520background%2520professional%2520portrait%2520high%2520quality%2520realistic&width=40&height=40&seq=10&orientation=squarish",
      lastMessage: "Let's discuss the project timeline tomorrow",
      time: "10:32 AM",
      unread: true,
      online: true,
      messages: [
        {
          id: 1,
          text: "Hi Harsh, how's the UI design coming along?",
          sent: false,
          time: "10:15 AM",
          read: true,
        },
        {
          id: 2,
          text: "It's going well! I've completed the wireframes.",
          sent: true,
          time: "10:20 AM",
          read: true,
        },
        {
          id: 3,
          text: "Great! When can we review them?",
          sent: false,
          time: "10:25 AM",
          read: true,
        },
        {
          id: 4,
          text: "I can share them this afternoon.",
          sent: true,
          time: "10:28 AM",
          read: true,
        },
        {
          id: 5,
          text: "Let's discuss the project timeline tomorrow",
          sent: false,
          time: "10:32 AM",
          read: false,
        },
      ],
    },
    {
      id: 2,
      name: "Michael Johnson",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520middle%2520aged%2520man%2520with%2520short%2520brown%2520hair%2520and%2520glasses%2520wearing%2520business%2520casual%2520against%2520neutral%2520background%2520professional%2520portrait%2520high%2520quality%2520realistic&width=40&height=40&seq=11&orientation=squarish",
      lastMessage: "I've sent you the updated requirements doc",
      time: "Yesterday",
      unread: true,
      online: false,
      messages: [
        {
          id: 1,
          text: "Hello Harsh, do you have a moment to discuss the requirements?",
          sent: false,
          time: "Yesterday, 2:15 PM",
          read: true,
        },
        {
          id: 2,
          text: "Sure, what's on your mind?",
          sent: true,
          time: "Yesterday, 2:20 PM",
          read: true,
        },
        {
          id: 3,
          text: "We need to adjust some of the features for the next sprint.",
          sent: false,
          time: "Yesterday, 2:25 PM",
          read: true,
        },
        {
          id: 4,
          text: "I've sent you the updated requirements doc",
          sent: false,
          time: "Yesterday, 2:30 PM",
          read: false,
        },
      ],
    },
    {
      id: 3,
      name: "Sarah Williams",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520woman%2520with%2520dark%2520hair%2520and%2520warm%2520smile%2520against%2520neutral%2520background%2520professional%2520portrait%2520high%2520quality%2520realistic&width=40&height=40&seq=12&orientation=squarish",
      lastMessage: "Can you join our team meeting at 3 PM?",
      time: "Yesterday",
      unread: true,
      online: true,
      messages: [
        {
          id: 1,
          text: "Hey Harsh, hope you're doing well!",
          sent: false,
          time: "Yesterday, 11:15 AM",
          read: true,
        },
        {
          id: 2,
          text: "Doing great, thanks! How about you?",
          sent: true,
          time: "Yesterday, 11:20 AM",
          read: true,
        },
        {
          id: 3,
          text: "Good! We're having a team meeting later today.",
          sent: false,
          time: "Yesterday, 11:25 AM",
          read: true,
        },
        {
          id: 4,
          text: "Can you join our team meeting at 3 PM?",
          sent: false,
          time: "Yesterday, 11:30 AM",
          read: false,
        },
      ],
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520latino%2520man%2520with%2520short%2520dark%2520hair%2520against%2520neutral%2520background%2520professional%2520portrait%2520high%2520quality%2520realistic&width=40&height=40&seq=13&orientation=squarish",
      lastMessage: "Thanks for your help with the presentation",
      time: "Monday",
      unread: false,
      online: false,
      messages: [
        {
          id: 1,
          text: "Harsh, do you have the slides for tomorrow?",
          sent: false,
          time: "Monday, 4:15 PM",
          read: true,
        },
        {
          id: 2,
          text: "Yes, just finishing up the last few slides.",
          sent: true,
          time: "Monday, 4:20 PM",
          read: true,
        },
        {
          id: 3,
          text: "Perfect! When can you share them?",
          sent: false,
          time: "Monday, 4:25 PM",
          read: true,
        },
        {
          id: 4,
          text: "I'll send them over in about an hour.",
          sent: true,
          time: "Monday, 4:28 PM",
          read: true,
        },
        {
          id: 5,
          text: "Thanks for your help with the presentation",
          sent: false,
          time: "Monday, 4:32 PM",
          read: true,
        },
      ],
    },
    {
      id: 5,
      name: "Lisa Chen",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520an%2520asian%2520woman%2520with%2520long%2520dark%2520hair%2520against%2520neutral%2520background%2520professional%2520portrait%2520high%2520quality%2520realistic&width=40&height=40&seq=14&orientation=squarish",
      lastMessage: "The client loved our design proposal!",
      time: "Monday",
      unread: false,
      online: true,
      messages: [
        {
          id: 1,
          text: "Just got out of the client meeting.",
          sent: false,
          time: "Monday, 1:15 PM",
          read: true,
        },
        {
          id: 2,
          text: "How did it go?",
          sent: true,
          time: "Monday, 1:20 PM",
          read: true,
        },
        {
          id: 3,
          text: "The client loved our design proposal!",
          sent: false,
          time: "Monday, 1:25 PM",
          read: true,
        },
        {
          id: 4,
          text: "That's fantastic news! Great job on the designs.",
          sent: true,
          time: "Monday, 1:28 PM",
          read: true,
        },
      ],
    },
  ];
  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchConversation.toLowerCase())
  );
  const displayedConversations =
    conversationTab === "all"
      ? filteredConversations
      : filteredConversations.filter((conversation) => conversation.unread);
  const currentConversation = conversations.find(
    (c) => c.id === activeConversation
  );
  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    // In a real app, you would add the message to the conversation
    setMessageText("");
  };
  return (
    <div className="flex min-h-screen bg-gray-50 md:pb-0 pb-16">
      {/* Sidebar - Desktop only */}
      {/* <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="text-blue-500">
              <i className="fas fa-cube text-2xl"></i>
            </div>
            <span className="text-blue-500 text-2xl font-semibold md:block hidden">
              buronet
            </span>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520an%2520Indian%2520man%2520with%2520short%2520dark%2520hair%2520wearing%2520a%2520casual%2520shirt%2520against%2520a%2520neutral%2520background%252C%2520professional%2520portrait%252C%2520high%2520quality%252C%2520realistic&width=40&height=40&seq=1&orientation=squarish"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover object-top"
            />
            <div className="ml-3 ">
              <p className="text-sm font-medium text-gray-800">Harsh Singh</p>
              <p className="text-xs text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Top Search Bar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border-none rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className="ml-4 relative">
            <button className="relative text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-bell text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
          </div>
        </div>
        {/* Messaging Interface */}
        <div className="flex-1 flex overflow-hidden">
          {/* Conversations List */}
          <div
            className={`md:w-80 w-full border-r border-gray-200 bg-white flex flex-col ${
              activeConversation && window.innerWidth < 767 ? "hidden" : "block"
            }`}
          >
            <div className="p-4 border-b bg-yellow-400 border-gray-200">
              <h2 className="text-xl font-bold mb-4">Messages</h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
              </div>
            </div>
            <div className="flex border-b bg-red-500 border-gray-200">
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  conversationTab === "all"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setConversationTab("all")}
              >
                All Messages
              </button>
              <button
                className={`flex-1 py-3 text-center font-medium text-sm ${
                  conversationTab === "unread"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setConversationTab("unread")}
              >
                Unread (3)
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {displayedConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 border-b border-gray-100 flex items-start cursor-pointer ${
                    activeConversation === conversation.id
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveConversation(conversation.id)}
                >
                  <div className="relative">
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="w-12 h-12 rounded-full object-cover object-top"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-gray-900 truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.time}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${
                        conversation.unread
                          ? "font-medium text-gray-900"
                          : "text-gray-500"
                      } truncate`}
                    >
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="ml-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Chat Window */}
          <div
            className={`flex-1 flex flex-col bg-gray-50 ${
              activeConversation ? "block" : "hidden md:block"
            }`}
          >
            {currentConversation ? (
              <>
                <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={() => setActiveConversation(null)}
                      className="mr-3 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-arrow-left"></i>
                    </button>
                    <div className="relative">
                      <img
                        src={currentConversation.avatar}
                        alt={currentConversation.name}
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                      {currentConversation.online && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div
                      className="ml-3 cursor-pointer"
                      onClick={() =>
                        window.innerWidth < 1600 &&
                        setActiveConversation(currentConversation.id)
                      }
                    >
                      <h3 className="font-medium">
                        {currentConversation.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {currentConversation.online
                          ? "Online"
                          : "Last seen recently"}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {currentConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sent ? "justify-end" : "justify-start"
                        }`}
                      >
                        {!message.sent && (
                          <img
                            src={currentConversation.avatar}
                            alt={currentConversation.name}
                            className="w-8 h-8 rounded-full object-cover object-top mr-2 self-end"
                          />
                        )}
                        <div
                          className={`max-w-xs rounded-2xl py-2 px-4 ${
                            message.sent
                              ? "bg-blue-600 text-white rounded-tr-none"
                              : "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                          }`}
                        >
                          <p>{message.text}</p>
                          <div
                            className={`text-xs mt-1 flex justify-end ${
                              message.sent ? "text-blue-200" : "text-gray-500"
                            }`}
                          >
                            {message.time}
                            {message.sent && (
                              <span className="ml-1">
                                {message.read ? (
                                  <i className="fas fa-check-double"></i>
                                ) : (
                                  <i className="fas fa-check"></i>
                                )}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex items-center">
                    <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fas fa-paperclip text-lg"></i>
                    </button>
                    <input
                      type="text"
                      className="flex-1 mx-2 py-2 px-4 border border-gray-200 rounded-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="far fa-smile text-lg"></i>
                    </button>
                    <button
                      className="ml-2 p-2 bg-blue-600 text-white rounded-full cursor-pointer !rounded-button whitespace-nowrap"
                      onClick={handleSendMessage}
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-5xl mb-4">
                    <i className="far fa-comment-dots"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    No conversation selected
                  </h3>
                  <p className="text-gray-500">
                    Choose a conversation from the list to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* Conversation Details */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${
              activeConversation && window.innerWidth >= 1600
                ? "translate-x-0"
                : "translate-x-full"
            } z-50 md:block hidden`}
          >
            <button
              onClick={() => setActiveConversation(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fas fa-times"></i>
            </button>
            {currentConversation ? (
              <>
                <div className="p-4 border-b border-gray-200 text-center">
                  <div className="relative inline-block">
                    <img
                      src={currentConversation.avatar}
                      alt={currentConversation.name}
                      className="w-20 h-20 rounded-full object-cover object-top mx-auto"
                    />
                    {currentConversation.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mt-2">
                    {currentConversation.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {currentConversation.online
                      ? "Online"
                      : "Last seen recently"}
                  </p>
                </div>
                <div className="flex border-b border-gray-200">
                  <button
                    className={`flex-1 py-3 text-center font-medium text-sm ${
                      activeDetailTab === "info"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveDetailTab("info")}
                  >
                    Info
                  </button>
                  <button
                    className={`flex-1 py-3 text-center font-medium text-sm ${
                      activeDetailTab === "media"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveDetailTab("media")}
                  >
                    Media
                  </button>
                  <button
                    className={`flex-1 py-3 text-center font-medium text-sm ${
                      activeDetailTab === "files"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600"
                    } cursor-pointer !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveDetailTab("files")}
                  >
                    Files
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {activeDetailTab === "info" && (
                    <div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">
                            Personal Info
                          </h4>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                            <div className="flex items-center">
                              <i className="fas fa-envelope text-gray-400 w-5"></i>
                              <span className="ml-2 text-sm">
                                {currentConversation.name
                                  .toLowerCase()
                                  .replace(" ", ".")}
                                @example.com
                              </span>
                            </div>
                            <div className="flex items-center">
                              <i className="fas fa-phone text-gray-400 w-5"></i>
                              <span className="ml-2 text-sm">
                                +91 98765 43210
                              </span>
                            </div>
                            <div className="flex items-center">
                              <i className="fas fa-map-marker-alt text-gray-400 w-5"></i>
                              <span className="ml-2 text-sm">
                                New Delhi, India
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">
                            Education
                          </h4>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-3">
                            <div>
                              <p className="text-sm font-medium">
                                B.Tech in Computer Science
                              </p>
                              <p className="text-xs text-gray-500">
                                IIT Delhi • 2021-2025
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                CBSE Class XII
                              </p>
                              <p className="text-xs text-gray-500">
                                Delhi Public School • 95.6%
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">
                            Exam Preparation
                          </h4>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-3">
                            <div>
                              <p className="text-sm font-medium">UPSC CSE</p>
                              <p className="text-xs text-gray-500">
                                Preparing for 2025 attempt
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                Optional Subject
                              </p>
                              <p className="text-xs text-gray-500">
                                Public Administration
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">
                            Study Groups
                          </h4>
                          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <i className="fas fa-users text-blue-600"></i>
                              </div>
                              <span className="ml-2 text-sm font-medium">
                                UPSC Study Circle
                              </span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <i className="fas fa-book text-green-600"></i>
                              </div>
                              <span className="ml-2 text-sm font-medium">
                                Current Affairs Group
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          Options
                        </h4>
                        <div className="space-y-2">
                          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg text-left cursor-pointer !rounded-button whitespace-nowrap">
                            <div className="flex items-center">
                              <i className="fas fa-bell text-gray-400 w-5"></i>
                              <span className="ml-2 text-sm">
                                Mute notifications
                              </span>
                            </div>
                            <div className="relative">
                              <input
                                type="checkbox"
                                className="sr-only"
                                id="notifications"
                              />
                              <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                            </div>
                          </button>
                          <button className="w-full flex items-center p-3 bg-gray-50 rounded-lg text-left cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-archive text-gray-400 w-5"></i>
                            <span className="ml-2 text-sm">Archive chat</span>
                          </button>
                          <button className="w-full flex items-center p-3 bg-gray-50 rounded-lg text-left text-red-500 cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-ban text-red-500 w-5"></i>
                            <span className="ml-2 text-sm">Block contact</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeDetailTab === "media" && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        Shared Media
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=professional%2520UI%2520design%2520wireframe%2520mockup%2520on%2520screen%2520against%2520simple%2520background%2520high%2520quality%2520realistic&width=80&height=80&seq=20&orientation=squarish"
                            alt="Shared media"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=mobile%2520app%2520interface%2520design%2520mockup%2520on%2520screen%2520against%2520simple%2520background%2520high%2520quality%2520realistic&width=80&height=80&seq=21&orientation=squarish"
                            alt="Shared media"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=website%2520dashboard%2520interface%2520design%2520mockup%2520on%2520screen%2520against%2520simple%2520background%2520high%2520quality%2520realistic&width=80&height=80&seq=22&orientation=squarish"
                            alt="Shared media"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {activeDetailTab === "files" && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        Shared Files
                      </h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                          <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                            <i className="fas fa-file-pdf"></i>
                          </div>
                          <div className="ml-3 flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              Project_Requirements.pdf
                            </p>
                            <p className="text-xs text-gray-500">
                              2.4 MB • Yesterday
                            </p>
                          </div>
                          <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-download"></i>
                          </button>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                          <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
                            <i className="fas fa-file-excel"></i>
                          </div>
                          <div className="ml-3 flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              Budget_Q2_2025.xlsx
                            </p>
                            <p className="text-xs text-gray-500">
                              1.8 MB • Monday
                            </p>
                          </div>
                          <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-download"></i>
                          </button>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                          <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                            <i className="fas fa-file-word"></i>
                          </div>
                          <div className="ml-3 flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              Meeting_Notes.docx
                            </p>
                            <p className="text-xs text-gray-500">
                              520 KB • Apr 22
                            </p>
                          </div>
                          <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-download"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-gray-400 text-4xl mb-4">
                    <i className="far fa-user-circle"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    No contact selected
                  </h3>
                  <p className="text-sm text-gray-500">
                    Select a conversation to view contact details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
    </div>
  );
};
export default App;
