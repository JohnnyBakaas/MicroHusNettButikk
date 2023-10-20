import Carousel from "react-material-ui-carousel";
import styles from "./StoreArticleCard.module.css";
import { Link } from "react-router-dom";

export type StoreArticleCardPros = {
  name: string;
  images: string[];
  lowPrice: number;
  description: string;
};

const StoreArticleCard = ({
  name,
  images,
  lowPrice,
  description,
}: StoreArticleCardPros) => {
  return (
    <div className={styles.card}>
      <Carousel animation="slide" autoPlay={false} height={"430px"}>
        {images.map((e, i) => (
          <div
            key={i.toString()}
            className={styles.imgContainer}
            style={{
              backgroundImage: `url("${e}")`,
            }}
          ></div>
        ))}
      </Carousel>
      <div className={styles.textWrapper}>
        <Link to={`/store/${name}`}>
          <h2>{name}</h2>
          <h3>Starter: {formatNumber(lowPrice)} kr</h3>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
};

export default StoreArticleCard;

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
