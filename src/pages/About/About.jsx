import React, { useState } from 'react';
import { Truck, Target, Zap, Users } from 'lucide-react'; // Lucide icons for visual aid

// --- Data for Tabs ---
const tabData = [
  // 1. STORY Tab Content
  {
    key: 'Story',
    label: 'Story',
    icon: Truck,
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-lime-600 mb-4 flex items-center">
          <Truck className="w-7 h-7 mr-3 hidden md:flex" /> Our Humble Beginnings
        </h3>
        <p className="mb-4 text-gray-700">
          Founded in <strong>2015</strong> by a small group of logistics enthusiasts, our goal was simple: 
          to eliminate the unpredictability of traditional parcel delivery. We started with just 
          three delivery vans and a commitment to <strong>real-time transparency</strong>. Today, we operate a nationwide network, 
          but our core value—delivering peace of mind—remains the driving force.
        </p>
        
        {/* Story Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition duration-300">
          <h4 className="text-xl font-semibold mb-2 text-gray-900">The Turning Point</h4>
          <p className="text-gray-600">
            In 2017, we integrated our proprietary <strong>AI routing engine</strong>, dramatically cutting delivery times 
            by 30% and significantly reducing fuel consumption. This technological leap defined our path forward 
            as a <strong>tech-first logistics provider</strong>.
          </p>
        </div>
      </div>
    ),
  },

  // 2. MISSION Tab Content
  {
    key: 'Mission',
    label: 'Mission',
    icon: Target,
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-lime-600 mb-4 flex items-center">
          <Target className="w-7 h-7 mr-3  hidden md:flex" /> Driving the Future of Delivery
        </h3>
        <p className="mb-4 text-gray-700">
          Our mission is to establish the most <strong>reliable, transparent, and sustainable</strong> logistics 
          ecosystem globally. We strive to not just move parcels, but to enable commerce and 
          connect people seamlessly.
        </p>

        {/* Mission Bullet Points with Hover Effect */}
        <ul className="list-none space-y-3 p-0">
          <li className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-lime-50 transition duration-200 shadow-sm">
            <span className="text-lime-500 font-bold mr-3">•</span> 
            <span className="text-gray-700"><strong>Client Focus:</strong> Achieve 100% customer satisfaction through 24/7 support and personalized delivery options.</span>
          </li>
          <li className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-lime-50 transition duration-200 shadow-sm">
            <span className="text-lime-500 font-bold mr-3">•</span> 
            <span className="text-gray-700"><strong>Innovation:</strong> Lead the industry in automated sorting and drone/robotics deployment in the next 5 years.</span>
          </li>
          <li className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-lime-50 transition duration-200 shadow-sm">
            <span className="text-lime-500 font-bold mr-3">•</span> 
            <span className="text-gray-700"><strong>Sustainability:</strong> Reduce our carbon footprint by 50% by 2030 through a fully electric fleet.</span>
          </li>
        </ul>
      </div>
    ),
  },
  
  // 3. SUCCESS Tab Content
  {
    key: 'Success',
    label: 'Success',
    icon: Zap,
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-lime-600 mb-4 flex items-center">
          <Zap className="w-7 h-7 mr-3 hidden md:flex" /> Our Measurable Impact
        </h3>
        <p className="mb-4 text-gray-700">
          Success for us is quantitative proof of our reliability and efficiency. Here are some key metrics 
          that highlight our performance over the last year:
        </p>

        {/* Success Metrics Cards (Grid Layout) */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-lime-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-300">
            <p className="text-5xl font-extrabold text-lime-700">99.9%</p>
            <p className="text-gray-600 mt-2">On-Time Delivery Rate</p>
          </div>
          <div className="bg-lime-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-300">
            <p className="text-5xl font-extrabold text-lime-700">10M+</p>
            <p className="text-gray-600 mt-2">Annual Parcels Shipped</p>
          </div>
          <div className="bg-lime-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-300">
            <p className="text-5xl font-extrabold text-lime-700">95%</p>
            <p className="text-gray-600 mt-2">Customer Retention</p>
          </div>
        </div>
      </div>
    ),
  },

  // 4. TEAM Tab Content
  {
    key: 'Team',
    label: 'Team & Others',
    icon: Users,
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-lime-600 mb-4 flex items-center">
          <Users className="w-7 h-7 mr-3 hidden md:flex" /> People Behind the Promise
        </h3>
        <p className="mb-4 text-gray-700">
          Our team is composed of seasoned professionals—from data scientists optimizing routes 
          to dedicated field staff ensuring last-mile delivery. We believe in empowering every team member.
        </p>

        {/* Team Section (Placeholder Image/Avatar Layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Team Member Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gray-300 hover:border-lime-500 transition duration-300 text-center">
            
            <h4 className="text-xl font-semibold mt-3 text-gray-900">Md. Alam</h4>
            <p className="text-lime-600">Head of Operations</p>
            <p className="text-gray-500 text-sm mt-1">15 years in supply chain management.</p>
          </div>
          
          {/* Team Member Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gray-300 hover:border-lime-500 transition duration-300 text-center">
            
            <h4 className="text-xl font-semibold mt-3 text-gray-900">Ayesha Begum</h4>
            <p className="text-lime-600">Chief Technology Officer</p>
            <p className="text-gray-500 text-sm mt-1">Leads AI and data integration.</p>
          </div>
          
          {/* Team Member Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gray-300 hover:border-lime-500 transition duration-300 text-center">
            
            <h4 className="text-xl font-semibold mt-3 text-gray-900">Rahim Khan</h4>
            <p className="text-lime-600">Field Coordinator</p>
            <p className="text-gray-500 text-sm mt-1">Manages last-mile efficiency.</p>
          </div>
          
        </div>
      </div>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('Story');
  const ActiveIcon = tabData.find(tab => tab.key === activeTab)?.icon; // Get icon for header
  const activeContent = tabData.find(tab => tab.key === activeTab)?.content;

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-8 my-10">
      
      {/* --- Main Card Container --- */}
      <div className="w-full max-w-5xl bg-white rounded-xl p-8 md:p-12 shadow-2xl">
        
        {/* --- Header Section --- */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-[#113C44] mb-3">
            About Us
          </h1>
          <p className="text-gray-600 max-w-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </header>

        <hr className="mb-6"/>

        {/* --- Tab Navigation --- */}
        <nav className="flex space-x-6 mb-8 border-b border-gray-200 overflow-x-auto">
          {tabData.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center text-lg md:text-xl font-semibold pb-3 transition-colors duration-200 whitespace-nowrap
                ${
                  activeTab === tab.key
                    ? 'text-lime-600 border-b-4 border-lime-600' // Active tab styling
                    : 'text-gray-500 hover:text-gray-800 border-b-4 border-transparent hover:border-gray-300' // Inactive tab styling
                }
              `}
            >
              {/* <tab.icon className="w-5 h-5 mr-2" /> {tab.label} {/* Optionally show icon in tab nav */}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* --- Dynamic Content Area --- */}
        <div className="mt-8 text-gray-700 leading-relaxed text-base md:text-lg min-h-[300px]">
          {activeContent}
        </div>

      </div>
    </div>
  );
};

export default About;