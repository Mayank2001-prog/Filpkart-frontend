import { Box, Button, styled } from "@mui/material";

const Container = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled("img")({
  padding: " 15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const ActionIitems = ({ product }) => {
  return (
    <Container>
      <Image src={product.url} alt="img" />
      <Button variant="contained">Add to cart</Button>
      <Button variant="contained">Buy Now</Button>
    </Container>
  );
};

export default ActionIitems;
