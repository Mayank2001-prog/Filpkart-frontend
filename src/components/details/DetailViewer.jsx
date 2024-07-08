import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/ProductActions";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionIitems from "./ActionIitems";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Box)`
  background: #ffffff;
  display: flex;
`;
const RightContainer = styled(Box)`
  margin-top: 50px;
`;
const DetailViewer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container spacing={2}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionIitems product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <p className="mt-1  text-gray-300 ml-2 flex flex-row">
              8 Ratings & 1 Reviews
              <div Component="span" className="w-16 ml-5">
                <img src={fassured} alt="img" />
              </div>
            </p>

            <p>
              <div Component="span">{product.price.cost}</div>
              <div Component="span">
                <strike>{product.price.mrp}</strike>
              </div>
            </p>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailViewer;
