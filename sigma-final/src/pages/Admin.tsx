import { useEffect, useState } from "react";
import Button from "../components/common/Button/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Admin = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openEmails, setOpenEmails] = useState(false);
  const handleClose = () => setOpen(false);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getUsers`)
      .then((data: any) => {
        setEmails(data.data.users);
      })
      .catch((error: any) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  }, []);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      type: "",
      image: "",
      title: "",
      price: 0,
      discount: 0,
      rating: 0,
      description: "",
      detailedDescription: "",
      additionalInfo: "",
    },
  });
  const onSubmit: SubmitHandler<any> = (data: any) => {
    axios
      .post(`http://localhost:3000/api/create`, {
        type: data.type,
        image: data.image,
        title: data.title,
        price: +data.price,
        discount: +data.discount,
        rating: +data.rating,
        description: data.description,
        detailedDescription: data.detailedDescription,
        additionalInfo: data.additionalInfo,
      })
      .then((data: any) => {
        setOpen(false);
      })
      .catch((error: any) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  };
  return (
    <div className={styles.top}>
      <Button
        type="white"
        title="Create Product"
        onClick={() => setOpen(true)}
        button={false}></Button>
      <Button
        type="white"
        title=" subscribed users"
        onClick={() => setOpenEmails(true)}
        button={false}></Button>
      <Button
        type="white"
        title="View all orders"
        onClick={() => navigate("/admin/orders")}
        button={true}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Creating New Product
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form_wrap}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>Category</span>
                    <Input {...field} className={styles.form_input} placeholder="Category" />
                  </div>
                )}
              />
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>Image link</span>
                    <Input {...field} className={styles.form_input} placeholder="Image link" />
                  </div>
                )}
              />
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>Title</span>
                    <Input {...field} className={styles.form_input} placeholder="Title" />
                  </div>
                )}
              />
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>Price at the moment</span>
                    <Input
                      {...field}
                      className={styles.form_input}
                      placeholder="Price at the moment"
                      type="number"
                    />
                  </div>
                )}
              />
              <Controller
                name="discount"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>Discount</span>
                    <Input
                      {...field}
                      className={styles.form_input}
                      placeholder="Discount"
                      type="number"
                    />
                  </div>
                )}
              />
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>rating</span>
                    <Input {...field} className={styles.form_input} placeholder="rating" />
                  </div>
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>Description</span>
                    <Input {...field} className={styles.form_input} placeholder="Description" />
                  </div>
                )}
              />
              <Controller
                name="detailedDescription"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>detailed Description</span>
                    <Input
                      {...field}
                      className={styles.form_input}
                      placeholder="detailedDescription"
                    />
                  </div>
                )}
              />
              <Controller
                name="additionalInfo"
                control={control}
                render={({ field }) => (
                  <div className={styles.form_input_wrap}>
                    <span>additional Info</span>
                    <Input {...field} className={styles.form_input} placeholder="additional Info" />
                  </div>
                )}
              />
            </div>

            {/* <input type="submit" /> */}
            <button type="submit" className={`${styles.button} ${styles.blue}`}>
              Confirm
            </button>
          </form>
        </Box>
      </Modal>

      <Modal
        open={openEmails}
        onClose={() => setOpenEmails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            subscribed users
          </Typography>
          <ul>
            {emails.map((el: any) => (
              <li>{el?.email}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
};
export default Admin;
