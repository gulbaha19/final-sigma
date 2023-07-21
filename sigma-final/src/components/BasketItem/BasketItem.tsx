import { Container } from "@mui/material";
import styles from "./basketItem.module.scss";
import { useTypedDispatch } from "../../hooks/useAppDispatch";
import { useCallback, useState } from "react";
import { addToBasket, decreaseProduct } from "../../store/actions/shopActions";
import Button from "../common/Button/Button";
const BasketItem = ({ el }: any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    !open ? setOpen(!open) : console.log("ddd");
  };
  const dispatch = useTypedDispatch();

  const handleAddToBasket = useCallback(
    (product: any) => {
      dispatch(addToBasket(product.product));
    },
    [dispatch],
  );
  const handleDecrease = useCallback(
    (product: any) => {
      dispatch(decreaseProduct(product));
    },
    [dispatch],
  );
  const handleRemoveClick = useCallback(() => {
    dispatch({ type: "basketProduct/remove", payload: el.product._id });
  }, [el._id, dispatch]);
  return (
    <Container>
      <div className={styles.basket_item}>
        <img src={el.product.image} alt="" />
        <div className={styles.basket_item_content}>
          <p className={styles.basket_item_content_title}> {el.product.title}</p>
          {el.discount !== null && (
            <span className={styles.discount}>${el.product.price + el.product.discount}</span>
          )}
          &nbsp;
          <span className={styles.price}>${el.product.price}</span>
        </div>
        <div className={styles.basket_item_content_count}>
          Quantity: <span>{el.count}</span>
          <div>
            <p onClick={() => handleAddToBasket(el)}>+</p>
            <p onClick={() => handleDecrease(el)}>-</p>
          </div>
          <p
            className={styles.basket_item_content_count_delete}
            onClick={() => handleRemoveClick()}>
            X
          </p>
        </div>
      </div>
    </Container>
  );
};
export default BasketItem;
