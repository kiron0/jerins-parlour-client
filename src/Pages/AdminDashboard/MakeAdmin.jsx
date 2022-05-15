import React from "react";

const MakeAdmin = () => {
  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <div className="bg-base-100 pl-4 pb-44 pt-4 rounded-2xl">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Type email"
          className="input input-bordered w-full max-w-sm"
        />
        <button className="btn btn-primary mt-4 lg:mt-0 md:ml-4 lg:ml-4 text-white">
          Make Admin
        </button>
      </div>
    </div>
  );
};

export default MakeAdmin;
