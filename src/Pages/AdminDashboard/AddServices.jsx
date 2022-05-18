import React from "react";

const AddServices = () => {
  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <div className="bg-base-100 pl-8 pb-44 py-8 rounded-xl">
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
        <label className="label">
          <span className="label-text">Image</span>
        </label>
        <input
          type="file"
          placeholder="Upload Image"
          class="input input-bordered w-full max-w-sm"
        />
      </div>
      <button className="btn btn-primary mt-6 px-12 text-white">Submit</button>
    </div>
  );
};

export default AddServices;
