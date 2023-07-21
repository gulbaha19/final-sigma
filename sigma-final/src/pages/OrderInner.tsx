import axios from "axios";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import Button from "../components/common/Button/Button";

const OrderInner = () => {
  const params = useParams();
  const [client, setClient] = useState({}) as any;
  const [basket, setBasket] = useState([]) as any[];
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/orderById`, { params: { id: params.id } })
      .then((data: any) => {
        setClient(data?.data);
        setBasket(JSON.parse(data?.data.basket));
      })
      .catch((error: any) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  }, []);
  const handleDelete = () => {
    axios
      .post(
        `    http://localhost:3000/api/deleteOrder
    `,
        {
          id: params.id,
        },
      )
      .then((data: any) => {
        navigate("/admin/orders");
      })
      .catch((error: any) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  };

  return (
    <div className={`${styles.top} ${styles.bottom}`}>
      <h2>Name: {client?.fullName}</h2>
      <p>address: {client?.address}</p>
      <p>phone number: {client?.phone}</p>
      <p>email: {client?.email}</p>
      <p>message: {client?.mesaage}</p>
      <table>
        <tr>
          <th>title</th>
          <th>price (1item)</th>
          <th>Count</th>
        </tr>
        {basket?.map((el: any) => (
          <tr>
            <th>{el.product.title}</th>
            <th>{el.product.price}</th>
            <th>{el.count}</th>
          </tr>
        ))}
      </table>

      <h2>to Pay {client?.allTotal}</h2>
      <Button
        title="Order is done-delte"
        type="yellow"
        onClick={handleDelete}
        button={false}></Button>
    </div>
  );
};
export default OrderInner;
