import { Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/data";

const Wrapper = styled(Grid)`
  margin-top: 20px;
  justify-content: space-between;
`;

const MidSection = () => {
  return (
    <>
      <Wrapper lg={12} sm={12} md={12} container>
        {imageURL.map((image) => (
          <Grid item lg={4} sm={4} md={12} xs={12}>
            <img src={image} alt="img" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
    </>
  );
};

export default MidSection;
