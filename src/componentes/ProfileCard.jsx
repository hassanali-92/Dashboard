import React from "react";

export default function ProfileCard({ followers, setFollowers }) {
  return (
    <div className="p-6 rounded-2xl shadow-lg ">
      <div className="flex items-center gap-4">
        <img
          src="../image.png"
          alt="profile"
          className="w-20 h-20 rounded-full shadow"
        />
        <div>
          <h2 className="text-2xl font-bold">Hassan Ali</h2>
          <p className="">Frontend Developer</p>
          <p className=" text-sm">hassan@example.com</p>
        </div>
      </div>

      {/* Followers Section */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-lg font-semibold">Followers: {followers}</p>
        <button
          onClick={() => setFollowers(followers + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-xl shadow"
        >
          Follow +
        </button>
      </div>
    </div>
  );
}
