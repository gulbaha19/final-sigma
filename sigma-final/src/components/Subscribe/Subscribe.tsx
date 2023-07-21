import { Container } from "@mui/material";
import styles from "./subscribe.module.scss";
import Button from "../common/Button/Button";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import axios from "axios";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handle = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "enter valid email";
    axios
      .post(`http://localhost:3000/api/subscribe`, {
        email: email,
      })
      .then((data: any) => {
        setEmail("");
        return true;
      })
      .catch((error: any) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  };
  const validateon = (e: string) => {
    setEmail(e);
  };


  return (
    <div className={styles.wrap}>
      <Container>
        <div className={styles.subscribe}>
          <h2>Subscribe to our Newsletter</h2>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => validateon(e.target.value)}
              placeholder="email@mail.com"
            />
            <Button type="blue" title="Subscribe" onClick={handle} button={false}></Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Subscribe;
