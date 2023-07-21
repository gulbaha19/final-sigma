import styles from "./imagesBlock.module.scss";
import juice from "../../assets/juice.png";
import food from "../../assets/food.png";
import cookies from "../../assets/cookies.png";
const data = [
  {
    title: "Organic Juice",
    img: juice,
  },
  {
    title: "Organic Food",
    img: food,
  },
  {
    title: "Nuts Cookis",
    img: cookies,
  },
];
const ImagesBlock = () => {
  return (
    <div className={styles.images}>
      {data.map((el, i) => {
        return (
          <div className={styles.images_box}>
            <img src={el.img} alt="" />
            <p>{el.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ImagesBlock;
