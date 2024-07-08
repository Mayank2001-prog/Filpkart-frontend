import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  width: 83%;
`;

const RightComponent = styled(Box)`
  width: 17%;
  margin-left: 11px;
  margin-top: 13px;
  padding: 1px;
  background: #ffffff;
`;

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://assets.thehansindia.com/h-upload/2022/02/03/1199404-flipkart.webp";

  // "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>

      <RightComponent>
        <img src={adURL} alt="ad" style={{ width: 240, height: 350 }} />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
