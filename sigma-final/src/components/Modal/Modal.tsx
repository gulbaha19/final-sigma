import styles from "./modal.module.scss";
import Box from "@mui/material/Box";
import { CardProps, productType } from "../common/Card/Card";
import { Container, Modal } from "@mui/material";
import { getStarsByRating } from "../../utils/getRating";
import Button from "../common/Button/Button";
import { log } from "console";
import { useCallback, useState } from "react";
import { decreaseProduct } from "../../store/actions/shopActions";
import { useTypedDispatch } from "../../hooks/useAppDispatch";
interface ModalProps extends CardProps {
  open: boolean;
  handleClose: (arg: boolean) => void;
  handleAddToBasket: (arg: productType) => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalComponent = ({ open, handleClose, el, handleAddToBasket }: ModalProps) => {
  const [count, setCount] = useState(1);
  const [description, setDescription] = useState(true);
  const dispatch = useTypedDispatch();

  const smth = () => {
    handleClose(false);
    setCount(1);
  };


  const handleDecrease = useCallback(() => {
  

    dispatch(decreaseProduct({ product: el }));
  }, [dispatch]);
  return (
    <Modal
      open={open}
      onClose={smth}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Container>
          <div className={styles.modal_inner}>
            <img src={el.image} alt="" />
            <div className={styles.modal_inner_content}>
              <h3>{el.title}</h3>
              <span> {getStarsByRating(el.rating)}</span>
              <div>
                {el.discount !== null && (
                  <span className={styles.discount}>${el.price + el.discount}</span>
                )}
                &nbsp;
                <span className={styles.price}>${el.price}</span>
              </div>
              <p>{el.description}</p>
              <div>
                <span>Quantity :</span>
                <input
                  type="number"
                  name=""
                  id=""
                  disabled
                  value={count}
                  onChange={(e) => setCount(+e.target.value)}
                />
                {/* <div>
                  <p onClick={() => handleAddToBasket(el)}>+</p>
                  <p onClick={() => handleDecrease()}>-</p>
                </div> */}
                <Button
                  type="blue"
                  title="Add to Cart"
                  onClick={() => {
                    handleAddToBasket(el);
                    smth();
                  }}
                  button={true}></Button>
              </div>
            </div>
          </div>
          <button onClick={smth} className={styles.close}>
            X
          </button>
          <div className={styles.additional}>
            <div>
              <Button
                type="blue"
                title="Product Description"
                onClick={() => setDescription(true)}
                button={false}></Button>
              <Button
                type="blue"
                title="Additional Info"
                onClick={() => setDescription(false)}
                button={false}></Button>
            </div>
            <p>{description ? el.detailedDescription : el.additionalInfo}</p>
          </div>
        </Container>
      </Box>
    </Modal>
  );
};
export default ModalComponent;
