import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

// --- Sample Data ---
const faqData = [
  {
    id: 1,
    question: "How does this posture corrector work?",
    answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    id: 2,
    question: "Is it suitable for all ages and body types?",
    answer: "Our posture corrector is designed to be highly adjustable and comes in various sizes to accommodate a wide range of body types and ages. Please refer to our sizing chart for the best fit.",
  },
  {
    id: 3,
    question: "Does it really help with back pain and posture improvement?",
    answer: "Yes, when used correctly and consistently, a posture corrector can significantly aid in reducing back pain and improving posture by building muscle memory for better alignment.",
  },
  {
    id: 4,
    question: "Does it have smart features like vibration alerts?",
    answer: "The Posture Pro model features an optional smart sensor that provides gentle vibration alerts when slouching is detected, helping you instantly correct your posture.",
  },
  {
    id: 5,
    question: "How will I be notified when the product is back in stock?",
    answer: "You can sign up for our waiting list on the product page. We'll send you an automatic email notification as soon as the item is available for purchase again.",
  },
];

// --- Individual FAQ Item Component ---
const FaqItem = ({ question, answer, isOpen, toggleItem }) => {
    // Classes for the item container to mimic the background color and border style in the image
    const itemClasses = isOpen 
        ? "bg-teal-50 border border-teal-300 shadow-md" // Light green/teal background for open item
        : "bg-white border border-gray-200 shadow-sm hover:shadow-md"; // White/neutral background for closed item

    // Classes for the question text
    const questionClasses = isOpen 
        ? "font-semibold text-gray-900" 
        : "font-medium text-gray-700";

    return (
        <div className={`rounded-lg mb-3 transition-all duration-300 ease-in-out ${itemClasses}`}>
            {/* Question Header (Clickable) */}
            <div 
                className="p-4 cursor-pointer flex justify-between items-center" 
                onClick={toggleItem}
            >
                <div className={`text-lg ${questionClasses}`}>
                    {question}
                </div>
                {/* Expand/Collapse Arrow */}
                <span className="text-xl text-gray-700 transform transition-transform duration-300">
                    {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </span>
            </div>
            
            {/* Answer Content (Animated) */}
            <div 
                // Dynamically sets max-height for smooth collapse animation
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-4 pt-0' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-sm text-gray-600 leading-relaxed pt-3 border-t border-teal-200">
                    {answer}
                </p>
            </div>
        </div>
    );
};

// --- Main FAQ Component ---
const FAQ = () => {
    // State to manage the currently open item (initialized to the first item's ID)
    const [openItemId, setOpenItemId] = useState(faqData[0].id);

    // Toggles the open/closed state of an item
    const toggleItem = (itemId) => {
        // If the clicked item is already open, close it (set to null). Otherwise, open the clicked item.
        setOpenItemId(openItemId === itemId ? null : itemId);
    };

    return (
        <div className="min-h-screen py-16"> 
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Question (FAQ)
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </header>
                
                {/* FAQ Items List */}
                <section className="faq-list">
                    {faqData.map((item) => (
                        <FaqItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            // Check if the current item's ID matches the openItemId state
                            isOpen={item.id === openItemId} 
                            toggleItem={() => toggleItem(item.id)}
                        />
                    ))}
                </section>

                {/* "See More" Button Section */}
                <div className="text-center mt-12">
                    {/* Custom yellow/green color for the button: bg-[#bada55] */}
                    <button className="inline-flex items-center justify-center px-5 py-2 bg-primary cursor-pointer text-black font-extrabold text-lg rounded-lg shadow-xl hover:bg-lime-500 transition duration-300 transform hover:scale-105">
                        See More FAQ's
                        {/* Black circle icon with a forward arrow */}
                        <span className="ml-4 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">
                            &#8599; 
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;