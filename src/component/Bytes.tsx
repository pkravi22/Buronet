// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef } from "react";
const Bytes: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("For You");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const categories = [
    "For You",
    "Following",
    "Tech",
    "Business",
    "Design",
    "Trending",
  ];
  const bytesData = [
    {
      id: 1,
      creator: {
        name: "Sarah Johnson",
        verified: true,
        avatar:
          "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520woman%2520with%2520medium%2520length%2520hair%2520wearing%2520business%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520looking&width=48&height=48&seq=2&orientation=squarish",
        role: "UX Designer at TechCorp",
      },
      video:
        "https://readdy.ai/api/search-image?query=professional%2520woman%2520presenting%2520design%2520work%2520on%2520tablet%252C%2520modern%2520office%2520environment%252C%2520business%2520casual%2520attire%252C%2520focused%2520expression%252C%2520high%2520quality%2520professional%2520scene%2520with%2520soft%2520natural%2520lighting&width=400&height=720&seq=4&orientation=portrait",
      description:
        "Sharing my top 5 UX design tips that transformed our user engagement metrics by 200%. #UXDesign #ProductDesign",
      likes: 2453,
      comments: 182,
      shares: 89,
      saved: false,
      category: "Design",
      sound: "Original Sound - Sarah Johnson",
      timestamp: "2h ago",
    },
    {
      id: 2,
      creator: {
        name: "Alex Chen",
        verified: true,
        avatar:
          "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520an%2520asian%2520man%2520with%2520glasses%2520wearing%2520business%2520casual%2520outfit%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520looking&width=48&height=48&seq=5&orientation=squarish",
        role: "Tech Lead at InnovateTech",
      },
      video:
        "https://readdy.ai/api/search-image?query=professional%2520man%2520explaining%2520code%2520on%2520computer%2520screen%252C%2520modern%2520tech%2520office%252C%2520focused%2520expression%252C%2520business%2520casual%2520attire%252C%2520high%2520quality%2520professional%2520scene%2520with%2520soft%2520lighting%2520and%2520clean%2520workspace&width=400&height=720&seq=6&orientation=portrait",
      description:
        "Quick walkthrough of our new microservices architecture that reduced latency by 40%. #TechTalk #Microservices #Engineering",
      likes: 1872,
      comments: 143,
      shares: 76,
      saved: false,
      category: "Tech",
      sound: "Tech Explainer - Alex Chen",
      timestamp: "4h ago",
    },
    {
      id: 3,
      creator: {
        name: "Maya Patel",
        verified: true,
        avatar:
          "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520an%2520indian%2520woman%2520with%2520long%2520dark%2520hair%2520wearing%2520business%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520looking&width=48&height=48&seq=7&orientation=squarish",
        role: "Growth Strategist at GrowthMasters",
      },
      video:
        "https://readdy.ai/api/search-image?query=professional%2520woman%2520presenting%2520business%2520growth%2520charts%2520in%2520conference%2520room%252C%2520business%2520formal%2520attire%252C%2520confident%2520posture%252C%2520high%2520quality%2520professional%2520scene%2520with%2520modern%2520office%2520setting%2520and%2520clean%2520presentation%2520display&width=400&height=720&seq=8&orientation=portrait",
      description:
        "The 3-step framework we used to scale our B2B SaaS from $1M to $10M ARR in just 18 months. #GrowthStrategy #SaaS #BusinessGrowth",
      likes: 3241,
      comments: 276,
      shares: 192,
      saved: false,
      category: "Business",
      sound: "Business Insights - Maya Patel",
      timestamp: "6h ago",
    },
    {
      id: 4,
      creator: {
        name: "David Wilson",
        verified: false,
        avatar:
          "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520black%2520man%2520with%2520short%2520hair%2520wearing%2520business%2520casual%2520outfit%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520looking&width=48&height=48&seq=9&orientation=squarish",
        role: "Product Manager at ProductLabs",
      },
      video:
        "https://readdy.ai/api/search-image?query=professional%2520man%2520demonstrating%2520product%2520prototype%252C%2520modern%2520creative%2520office%252C%2520business%2520casual%2520attire%252C%2520engaged%2520expression%252C%2520high%2520quality%2520professional%2520scene%2520with%2520natural%2520lighting%2520and%2520collaborative%2520workspace&width=400&height=720&seq=10&orientation=portrait",
      description:
        "Behind the scenes of our product discovery process that helped us identify our most successful feature to date. #ProductManagement #UserResearch",
      likes: 1563,
      comments: 98,
      shares: 45,
      saved: false,
      category: "Tech",
      sound: "Product Insights - David Wilson",
      timestamp: "12h ago",
    },
    {
      id: 5,
      creator: {
        name: "Emma Roberts",
        verified: true,
        avatar:
          "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520blonde%2520woman%2520with%2520medium%2520length%2520hair%2520wearing%2520business%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520looking&width=48&height=48&seq=11&orientation=squarish",
        role: "Marketing Director at BrandBoost",
      },
      video:
        "https://readdy.ai/api/search-image?query=professional%2520woman%2520analyzing%2520marketing%2520data%2520on%2520large%2520screen%252C%2520modern%2520marketing%2520agency%2520office%252C%2520business%2520smart%2520casual%2520attire%252C%2520focused%2520expression%252C%2520high%2520quality%2520professional%2520scene%2520with%2520contemporary%2520workspace&width=400&height=720&seq=12&orientation=portrait",
      description:
        "How we increased our conversion rate by 35% with this simple A/B testing framework. #DigitalMarketing #ConversionOptimization #ABTesting",
      likes: 2187,
      comments: 154,
      shares: 87,
      saved: false,
      category: "Business",
      sound: "Marketing Tips - Emma Roberts",
      timestamp: "1d ago",
    },
  ];
  const filteredBytes =
    activeCategory === "For You"
      ? bytesData
      : bytesData.filter(
          (byte) =>
            byte.category === activeCategory ||
            (activeCategory === "Following" && byte.creator.verified)
        );
  const handleVideoScroll = (direction: "up" | "down") => {
    if (videoContainerRef.current) {
      const currentScroll = videoContainerRef.current.scrollTop;
      const videoHeight = videoContainerRef.current.clientHeight;
      const newIndex =
        direction === "up" ? currentVideoIndex - 1 : currentVideoIndex + 1;
      if (newIndex >= 0 && newIndex < filteredBytes.length) {
        setCurrentVideoIndex(newIndex);
        videoContainerRef.current.scrollTo({
          top: newIndex * videoHeight,
          behavior: "smooth",
        });
      }
    }
  };
  React.useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
        const videoHeight = videoContainerRef.current.clientHeight;
        const scrollPosition = videoContainerRef.current.scrollTop;
        const newIndex = Math.round(scrollPosition / videoHeight);
        if (newIndex !== currentVideoIndex) {
          setCurrentVideoIndex(newIndex);
        }
      }
    };
    const videoContainer = videoContainerRef.current;
    if (videoContainer) {
      videoContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (videoContainer) {
        videoContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentVideoIndex]);
  return (
    <div className="flex min-h-screen bg-[#f8faff]">
      {/* Sidebar Navigation - Desktop */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          {/* Categories */}
          <div className="w-full flex flex-col overflow-hidden">
            <div className="absolute top-0 left-64 right-0 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="px-6 py-3 bg-white/90 backdrop-blur-sm">
                <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium !rounded-button ${
                        activeCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Video Feed */}
            <div
              ref={videoContainerRef}
              className="flex-1 overflow-y-auto bg-gray-100 relative snap-y snap-mandatory"
            >
              {filteredBytes.length > 0 ? (
                <div className="relative flex flex-col items-center">
                  {/* Current Video */}
                  <div className="h-[calc(100vh-10rem)] flex items-center justify-center gap-6 snap-start mt-8">
                    <div className="relative w-[360px] h-full bg-white rounded-xl shadow-lg overflow-hidden">
                      <img
                        src={filteredBytes[currentVideoIndex].video}
                        alt="Video content"
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Video Controls Overlay */}
                      <div className="absolute inset-0 flex">
                        {/* Left area for swipe up/down */}
                        <div
                          className="w-4/5 h-full"
                          onClick={() => {
                            // Double tap to like functionality would be here
                          }}
                        ></div>
                        {/* Left area for swipe up/down */}
                        <div
                          className="w-full h-full"
                          onClick={() => {
                            // Double tap to like functionality would be here
                          }}
                        ></div>
                      </div>
                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <div className="flex items-center">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-white font-semibold text-lg">
                                {filteredBytes[currentVideoIndex].creator.name}
                              </h3>
                              {filteredBytes[currentVideoIndex].creator
                                .verified && (
                                <span className="ml-1 text-blue-400">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              )}
                            </div>
                            <p className="text-white/80 text-sm">
                              {filteredBytes[currentVideoIndex].creator.role}
                            </p>
                          </div>
                          <button className="ml-auto bg-white text-black px-4 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">
                            Follow
                          </button>
                        </div>
                        <p className="text-white mt-2">
                          {filteredBytes[currentVideoIndex].description}
                        </p>
                        <p className="text-white/70 text-sm mt-1">
                          <i className="fas fa-music mr-2"></i>
                          {filteredBytes[currentVideoIndex].sound}
                        </p>
                      </div>
                      {/* Action buttons outside video */}
                      <div className="flex flex-col items-center space-y-6">
                        <div className="flex flex-col items-center">
                          <button className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <i className="fas fa-heart text-2xl"></i>
                          </button>
                          <span className="text-gray-700 text-sm font-medium mt-1">
                            {filteredBytes[currentVideoIndex].likes}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <i className="fas fa-comment text-2xl"></i>
                          </button>
                          <span className="text-gray-700 text-sm mt-1">
                            {filteredBytes[currentVideoIndex].comments}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <i className="fas fa-share text-2xl"></i>
                          </button>
                          <span className="text-gray-700 text-sm mt-1">
                            {filteredBytes[currentVideoIndex].shares}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <i className="fas fa-bookmark text-2xl"></i>
                          </button>
                          <span className="text-gray-700 text-sm mt-1">
                            Save
                          </span>
                        </div>
                        <div className="mt-4">
                          <img
                            src={
                              filteredBytes[currentVideoIndex].creator.avatar
                            }
                            alt={filteredBytes[currentVideoIndex].creator.name}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <i className="fas fa-video text-4xl mb-2"></i>
                    <p>No bytes found in this category</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Bottom Navigation */}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
export default Bytes;
