import styles from "./testimonials.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Avatar } from "@mui/material";
import Container from "../common/Container/Container";
import { getStarsByRating } from "../../utils/getRating";
const data = {
  name: "Sara Taylor",
  role: "Consumer",
  comment:
    "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  rating: 9,
  image:
    "https://st4.depositphotos.com/4509995/21763/i/600/depositphotos_217634160-stock-photo-portrait-of-white-young-woman.jpg",
};
const infos = [
  {
    title: "100%",
    subtitle: "Organic",
  },
  {
    title: "285",
    subtitle: "Active Product",
  },
  {
    title: "350+",
    subtitle: "Organic Orchads",
  },
  {
    title: "25+",
    subtitle: "Years of Farming",
  },
];
const Testimonial = () => {
  return (
    <div className={styles.wrap}>
      <div>
        <p className={styles.wrap_title}>Testimonial</p>
        <h3>What Our Customer Saying?</h3>

        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}

        <div className={styles.content_review}>
          <Avatar alt="Remy Sharp" src={data.image} sx={{ width: 100, height: 100 }} />
          <span>{getStarsByRating(data.rating)}</span>
          <p className={styles.content_review_comment}>{data.comment}</p>
          <p className={styles.content_review_name}>{data.name}</p>
          <p className={styles.content_review_role}>{data.role}</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.count_wrap}>
          {infos.map((el, i) => {
            return (
              <div className={styles.count_inner}>
                <div>
                  <p className={styles.count_inner_title}>{el.title}</p>
                  <p className={styles.count_inner_subtitle}>{el.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
