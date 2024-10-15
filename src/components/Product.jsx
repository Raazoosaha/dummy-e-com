import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const CardContentFixedHeight = styled(CardContent)({
  flexGrow: 1,
});
const Product = ({ productdetails }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }} ref={ref}>
      {inView && (
        <StyledCard>
          <CardMedia
            component="img"
            height="200"
            image={productdetails.thumbnail}
            alt={productdetails.title}
            loading="lazy"
          />
          <CardContentFixedHeight>
            <Typography variant="h7" gutterBottom>
              {productdetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productdetails.description.slice(0, 50)}...
            </Typography>
            <Typography variant="h6" color="primary">
              {productdetails.price}
            </Typography>
          </CardContentFixedHeight>
        </StyledCard>
      )}
    </Grid>
  );
};
export default Product;

Product.propTypes = {
  productdetails: PropTypes.object.isRequired,
};
