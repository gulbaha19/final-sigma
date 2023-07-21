import { useSelector } from "react-redux";
import styles from "./basketList.module.scss";
import BasketItem from "../BasketItem/BasketItem";
import { useMemo, useState } from "react";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import FinalTextField from "../Form/Form";

const BasketList = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    !open ? setOpen(!open) : navigate("/orderDone");
  };
  const basket = useSelector((state: any) => state?.shop.basket);
  const allTotal = useMemo(
    () => basket.reduce((acc: number, { product, count }: any) => acc + product.price * count, 0),
    [basket],
  );
  const allTotalDiscount = useMemo(
    () =>
      basket.reduce((acc: number, { product, count }: any) => acc + product.discount * count, 0),
    [basket],
  );

  return (
    <div className={styles.wrap}>
      {basket?.length > 0 ? (
        <>
          {" "}
          {basket?.map((el: any) => {
            return <BasketItem el={el} />;
          })}
          <h6>
            Total Cost: <span>{allTotal}$</span>
          </h6>
          <h6>
            Discount: <span>{allTotalDiscount}$</span>
          </h6>
          {open && <FinalTextField />}
          {!open && <Button type="blue" title={"To Order"} onClick={handleClick} button={true} />}
        </>
      ) : (
        <h2>
          {" "}
          Basket is empty<div>🤷</div>
        </h2>
      )}
    </div>
  );
};
export default BasketList;
