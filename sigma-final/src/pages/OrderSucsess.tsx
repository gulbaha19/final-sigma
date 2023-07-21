import { useCallback, useEffect } from "react";
import photo from "../assets/done.jpg";
import styles from "./styles.module.scss";
import { useTypedDispatch } from "../hooks/useAppDispatch";
const OrderSucsess = () => {
  const dispatch = useTypedDispatch();
  const handleReset = useCallback(() => {
    dispatch({ type: "basketProduct/clear", payload: "" });
  }, [dispatch]);
  useEffect(() => {
    handleReset();
  }, []);
  return (
    <div className={styles.done}>
      <h2>Thank you for your order</h2>
      <img src={photo} alt="" />
    </div>
  );
};
export default OrderSucsess;
