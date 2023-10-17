import Carousel from "react-material-ui-carousel";
import styles from "./StoreArticle.module.css";

export type StoreArticlePros = {
  name: string;
  images: string[];
  price: number;
};

const StoreArticle = () => {
  const linkes = [
    "imgs/DALL·E 2023-10-16 09.48.25.png",
    "imgs/DALL·E 2023-10-16 09.48.26.png",
    "imgs/DALL·E 2023-10-16 09.48.27.png",
    "imgs/DALL·E 2023-10-16 09.48.28.png",
  ];

  return (
    <div className={styles.card}>
      <Carousel animation="slide" autoPlay={false} height={"300px"}>
        {linkes.map((e, i) => (
          <div
            key={i.toString()}
            className={styles.imgContainer}
            style={{
              backgroundImage: `url("${e}")`,
            }}
          ></div>
        ))}
      </Carousel>
      <h2>Ett hus</h2>
      <h3>97 000 - 146 000 kr</h3>
    </div>
  );
};

export default StoreArticle;
