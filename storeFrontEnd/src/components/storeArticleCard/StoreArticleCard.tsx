import Carousel from "react-material-ui-carousel";
import styles from "./StoreArticleCard.module.css";

export type StoreArticleCardPros = {
  name: string;
  images: string[];
  lowPrice: number;
  highPrice: number;
  description: string;
};

const StoreArticleCard = ({
  name,
  images,
  lowPrice,
  highPrice,
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
        <h2>{name}</h2>
        <h3>
          {formatNumber(lowPrice)} - {formatNumber(highPrice)} kr
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StoreArticleCard;

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};