import React from "react";

const AddServices = () => {
  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <div className="bg-base-100 pl-4 pb-44 pt-4 rounded-2xl">
        <label className="label">
          <span className="label-text">Service Title</span>
        </label>
        <input
          type="text"
          placeholder="Enter Title"
          class="input input-bordered w-full max-w-sm"
        />
        <label className="label">
          <span className="label-text">Service Description</span>
        </label>
        <textarea
          class="textarea textarea-bordered w-full pb-12 max-w-sm"
          placeholder="Enter Description"
        ></textarea>
      </div>
      <button className="btn btn-primary mt-6 px-10">Submit</button>
    </div>
  );
};

export default AddServices;
