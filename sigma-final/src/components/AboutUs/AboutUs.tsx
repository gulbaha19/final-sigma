import Button from "../common/Button/Button";
import styles from "./aboutUs.module.scss";
const points = [
  {
    id: 1,
    title: "Organic Foods Only",
    subtitle: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    id: 2,
    title: "Quality Standards",
    subtitle: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];
const AboutUs = () => {
  return (
    <div className={styles.about_us_wrap}>
      <div className={styles.about_us_content}>
        <p className={styles.about_us_content_title}> About Us</p>
        <h3>We Believe in Working Accredited Farmers</h3>
        <p className={styles.about_us_content_subtitle}>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley.
        </p>
        <div>
          {points.map((el, i) => {
            return (
              <div key={i} className={styles.point_wrap}>
                <p>{el.title}</p>
                <span>{el.subtitle}</span>
              </div>
            );
          })}
        </div>
        <Button title="Shop Now" type="blue" onClick={() => console.log()} button={true}></Button>
      </div>
    </div>
  );
};
export default AboutUs;
