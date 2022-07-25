import React from "react";
import { useForm } from "react-hook-form";
import ProductList from "../ProductList/ProductList";

const ProductAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //   const savedCart = getStoredCart();
    //   data.order = savedCart;

    fetch("https://sleepy-depths-81993.herokuapp.com/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product  Add Successfully");
          reset();
        }
      });
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          {/* ========== title-wrapper start ========== */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title d-flex align-items-center flex-wrap mb-30">
                  <h2 className="mr-40">Product ADD</h2>
                  <button
                    className="main-btn primary-btn btn-hover btn-sm  "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="lni lni-plus mr-5" /> ADD Product
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="form-elements-wrapper">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="w-75 m-auto mt-5">
                                <h2 className="text-center">Product Add</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                  <div class="mb-3">
                                    <label class="form-label">Subject</label>
                                    <input
                                      {...register("subject")}
                                      type="text"
                                      class="form-control"
                                      placeholder="Product subject"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">
                                      {" "}
                                      Upload a Image
                                    </label>
                                    <input
                                      {...register("img")}
                                      type="file"
                                      class="form-control"
                                      placeholder="Enter your image url"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">
                                      Product Name
                                    </label>
                                    <input
                                      {...register("name")}
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your product Name"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Price</label>
                                    <input
                                      {...register("price")}
                                      type="number"
                                      class="form-control"
                                      placeholder="Enter product price"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Publisher</label>
                                    <input
                                      {...register("publisher")}
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Publisher name"
                                      required
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Link</label>
                                    <input
                                      {...register("url")}
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter your Link"
                                      required
                                    />
                                  </div>

                                  <button
                                    type="submit"
                                    class="btn btn-primary w-100 mb-5"
                                  >
                                    Submit
                                  </button>
                                </form>

                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper mb-30">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Product
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* ========== title-wrapper end ========== */}
          {/* Invoice Wrapper Start */}
          <div className="invoice-wrapper">
            <ProductList></ProductList>
          </div>
          {/* Invoice Wrapper End */}
        </div>
        {/* end container */}
        {/* ========== section end ========== */}
      </div>

      {/* <div className="w-50 m-auto mt-5">
        <h2 className="text-center">Product Add</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label class="form-label">Subject</label>
            <input
              {...register("subject")}
              type="text"
              class="form-control"
              placeholder="Product subject"
            />
          </div>
          <div class="mb-3">
            <label class="form-label"> Upload a Image</label>
            <input
              {...register("img")}
              type="file"
              class="form-control"
              placeholder="Enter your image url"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input
              {...register("name")}
              type="text"
              class="form-control"
              placeholder="Enter your product Name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Price</label>
            <input
              {...register("price")}
              type="number"
              class="form-control"
              placeholder="Enter product price"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Publisher</label>
            <input
              {...register("publisher")}
              type="text"
              class="form-control"
              placeholder="Enter your Publisher name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Link</label>
            <input
              {...register("url")}
              type="text"
              class="form-control"
              placeholder="Enter your Link"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <div></div>
      </div> */}
    </>
  );
};

export default ProductAdd;
