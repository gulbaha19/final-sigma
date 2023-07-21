import { Grid } from "@mui/material";
import Card from "../common/Card/Card";
import Container from "../common/Container/Container";
import styles from "./offer.module.scss";
import { useTypedDispatch } from "../../hooks/useAppDispatch";
import { addToBasket } from "../../store/actions/shopActions";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const Offer = () => {
  const products = useSelector((state: any) => state?.shop.products);

  return (
    <div className={styles.wrap}>
      <Container>
        <div className={styles.offer}>
          <p>Offer</p>
          <h3>We Offer Organic For You</h3>
        </div>
        <div>
          <Grid container spacing={2}>
            {products.slice(0, 4)?.map((el: any) => (
              <Grid item xs={12} sm={6} md={3} key={el.id}>
                <Card el={el} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default Offer;
