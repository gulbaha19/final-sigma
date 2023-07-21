import Container from "../common/Container/Container";
import styles from "./addsBanner.module.scss";
const AddsBanner = () => {
  return (
    <div className={styles.wrap}>
      <Container>
        <div className={styles.wrapper}>
          <div className={`${styles.bck_pink} ${styles.bck}`}>
            <p>Natural!!</p>
            <h6>Get Garden Fresh Fruits</h6>
          </div>
          <div className={`${styles.bck_gray} ${styles.bck}`}>
            <p>Offer!!</p>
            <h6>Get 10% off on Vegetables</h6>
          </div>{" "}
        </div>
      </Container>
    </div>
  );
};
export default AddsBanner;
