import { Container } from "@mui/material";
import styles from "./news.module.scss";
import Button from "../common/Button/Button";

import green from "../../assets/green.png";
import red from "../../assets/red.png";
const data = [
  {
    date: "25 nov",
    user: "By Rachi Card",
    title: "By Rachi Card",
    subtitle: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: green,
  },
  {
    date: "25 nov",
    user: "By Rachi Card",
    title: "By Rachi Card",
    subtitle: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    img: red,
  },
];
const News = () => {
  const onHandleClick = () => {};
  return (
    <Container>
      <div>
        <div className={styles.news_title}>
          <p>Eco Friendly</p>
          <div>
            <h3>Econis is a Friendly Organic Store</h3>
            <Button
              type="white"
              title="More News"
              onClick={onHandleClick}
              button={true}></Button>{" "}
          </div>
        </div>
        <div className={styles.news_wrap}>
          <div className={styles.news}>
            {data.map((el, i) => (
              <div key={i} className={styles.news_box}>
                <img src={el.img} alt="" />
                <span className={styles.news_box_date}>{el.date}</span>
                <div className={styles.news_box_inner}>
                  <span>{el.user}</span>
                  <p>{el.title}</p>
                  <span> {el.subtitle}</span>
                  <Button
                    type="yellow"
                    title="Read more"
                    onClick={onHandleClick}
                    button={true}></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default News;
