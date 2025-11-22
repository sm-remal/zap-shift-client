import React from "react";

const ReviewCard = ({ reviews }) => {
  const { review, userName, user_photoURL } = reviews;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-8 border border-gray-200">
      {/* Quote Icon */}
      <div className="text-teal-400 text-6xl">❝</div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mt-3">{review}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-teal-400 my-6"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img src={user_photoURL} alt="" className="w-12 h-12 rounded-full bg-teal-800" />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
