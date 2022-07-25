/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Grid } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";

const ComboPack = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <section
        id="flash_sale"
        className="ComboTop PopularCollection section_padding"
      >
        <Container>
          {/* Header Part */}

          <Grid container spacing={3} className="d_flex">
            <Grid item xs={12}>
              <div className="header_part d_flex d_justify">
                <h2>
                  Combo Packege
                  <svg
                    width="74"
                    height="26"
                    viewBox="0 0 74 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.1348 1.5L2.00009 1.5"
                      stroke="#FF4434"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M72.1689 24L14.0819 24"
                      stroke="#FF4434"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </h2>

                <div className="view_all_part">
                  <a href="" className="view_all d_flex">
                    {" "}
                    Browse All <BsArrowRight />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* content Item */}
          <div className="content_item">
            <Grid container spacing={3} className="d_flex">
              {/* Item */}
              {
                                 items.map(item => <Item key={item._id} item={item}></Item>)
                          }
            </Grid>
          </div>
        </Container>

        {/* right_bg */}
        <div className="right_bg">
          <img src="assets/images/compopack.png" alt="" />
        </div>

        {/* lefg_bg */}
        <div className="left_bg">
          <img src="assets/images/left_bg.png" alt="" />
        </div>

        {/* Popular */}
        <div className="Combo_bottom_dots">
          <img src="assets/images/banner_bgs.png" alt="" />
        </div>

        {/* bottom */}
        <div className="Combo_bottom_dots_right">
          <img src="assets/images/dots.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default ComboPack;
