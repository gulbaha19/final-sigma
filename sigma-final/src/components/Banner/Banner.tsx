import { Container } from "@mui/material";
import Button from "../common/Button/Button";
// import Container from "../common/Container/Container";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <div className={styles.banner_wrap_img}>
      <div className={styles.banner_wrap}>
        <Container>
          <div className={styles.banner_inner}>
            <p>100% Natural Food</p>
            <h2>Choose the best healthier way of life</h2>
            <Button
              type="yellow"
              title="Explore now"
              onClick={() => console.log()}
              button={true}></Button>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Banner;
