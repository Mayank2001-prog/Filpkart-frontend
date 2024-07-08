import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// //components store

import { getProducts } from "../../redux/actions/ProductActions";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log("productArray>", products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal Of The Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Mens Wear" timer={false} />
        <Slide products={products} title="Summer wear" timer={false} />
      </Component>
    </>
  );
};

export default Home;
