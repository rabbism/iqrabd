import React from "react";

const DiscountTime = () => {
  return (
    <div className="w-50 m-auto mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your time"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DiscountTime;
