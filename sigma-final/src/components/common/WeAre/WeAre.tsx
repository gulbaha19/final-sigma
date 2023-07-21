import img from "../../../assets/Image-4.png";
import styles from "./weAre.module.scss";
const WeAre = () => {
  return (
    <div className={styles.we_are}>
      <img src={img} alt="" />
      <div className={styles.we_are_content}>
        <div className={styles.we_are_content_title}>
          <p>Eco Friendly</p>
          <h3>Econis is a Friendly Organic Store</h3>
        </div>
        <div className={styles.we_are_content_subtitle}>
          <p>Start with Our Company First</p>
          <span>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium. Sed ut perspiciatis.
          </span>
        </div>
        <div className={styles.we_are_content_subtitle}>
          <p>Start with Our Company First</p>
          <span>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium. Sed ut perspiciatis.
          </span>
        </div>
        <div className={styles.we_are_content_subtitle}>
          <p>Start with Our Company First</p>
          <span>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium. Sed ut perspiciatis.
          </span>
        </div>
      </div>
    </div>
  );
};
export default WeAre;
