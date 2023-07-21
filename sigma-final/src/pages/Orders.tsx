import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const [clients, setClients] = useState([]) as any;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/order`)
      .then((data: any) => {
        setClients(data.data.orders);
      })
      .catch((error: any) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className={styles.top}>
      <table className={styles.table}>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th> <th>Email</th>
          <th>Number</th>
          <th>To Pay</th>
        </tr>
        {clients?.map((el: any, i: number) => (
          <tr key={el?.fullname}>
            <td>{i + 1}</td>
            <td>{el.fullName}</td>
            <td>{el.address}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
            <td>{el.allTotal}</td>
            <td>
              <Button
                type="white"
                title=" See Order  "
                onClick={() => navigate("/admin/order/" + el._id)}
                button={true}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Orders;
