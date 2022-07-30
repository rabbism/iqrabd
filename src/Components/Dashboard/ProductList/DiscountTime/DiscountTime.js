import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DiscountTime = () => {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState({});

  const onSubmit = (data) => {
    //   const savedCart = getStoredCart();
    //   data.order = savedCart;

    fetch("https://sleepy-depths-81993.herokuapp.com/discount", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Good job...",
            text: "Your Time Successfully",
          });
          // alert("data  Add Successfully");
          reset();
        }
      });
  };
  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/discount")
      .then((res) => res.json())
      .then((data) => setDate(data[0].data));
  }, []);

  return (
    <div>
      <div className="w-50 m-auto mt-5 main-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Discount Data Set </label>
            <p>Enter your time Format August 30, 2022 00:00:00</p>
            <input
              {...register("data")}
              type="text"
              className="form-control"
              placeholder="Enter your time August 30, 2022 00:00:00"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        
      </div>
      <div className="main-wrapper">
      <div class="input-group w-75 ml-5 m-auto mt-5 ">
        <input
          value={date || ''}
          class="form-control"
          placeholder="Recipient's username"
          name="data"
          type="value"
          
        />
        <button class="btn btn-outline-secondary" type="button">
          Update
        </button>
      </div>
      </div>
    </div>
  );
};

export default DiscountTime;
