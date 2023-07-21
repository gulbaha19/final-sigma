import { useDispatch, useSelector } from "react-redux";
import AboutUs from "../components/AboutUs/AboutUs";
import AddsBanner from "../components/AddsBanner/AddsBanner";
import Banner from "../components/Banner/Banner";
import Offer from "../components/Offer/Offer";
import OurProducts from "../components/OurProducts/OurProducts";
import Testimonial from "../components/Testimonial/Testimonial";
import { useCallback, useEffect } from "react";
import { addToBasket, fetchProducts } from "../store/actions/shopActions";
import { useTypedDispatch } from "../hooks/useAppDispatch";
import WeAre from "../components/common/WeAre/WeAre";
import ImagesBlock from "../components/ImagesBlock/ImagesBlock";
import News from "../components/News/News";
import Subscribe from "../components/Subscribe/Subscribe";

const HomePage = () => {
  const dispatch = useTypedDispatch();
  const basket = useSelector((state: any) => state?.shop.basket);

  useEffect(() => {
    dispatch(fetchProducts("four"));
  }, [dispatch]);

  const handleAddToBasket = useCallback(
    (product: any) => {
      dispatch(addToBasket(product));
    },
    [dispatch],
  ); 

  return (
    <div>
      <Banner />
      <AddsBanner />
      <AboutUs />
      <OurProducts />
      <Testimonial />
      <Offer />
      <WeAre />
      <ImagesBlock />
      <News />
      <Subscribe />
    </div>
  );
};
export default HomePage;
