import BasketList from "../components/BasketList/BasketList";
import styles from "./styles.module.scss";
const BasketPage = () => {
  return (
    <div className={styles.top}>
      <div className={styles.banner}>
        <h3>Cart</h3>
      </div>
      <BasketList />
    </div>
  );
};
export default BasketPage;
