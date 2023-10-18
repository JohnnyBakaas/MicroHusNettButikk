import Carousel from "react-material-ui-carousel";
import styles from "./StoreArticle.module.css";

type StoreArticleProps = {
  name: string;
  images: string[];
  lowPrice: number;
  highPrice: number;
  description: string;
  paragraphs: Paragraph[];
};

type Paragraph = {
  headLine?: string;
  img?: string;
  text?: string;
};

const StoreArticle = () => {
  const test: StoreArticleProps = {
    name: "Test",
    images: [
      "imgs/DALL·E 2023-10-16 09.48.25.png",
      "imgs/DALL·E 2023-10-16 09.48.26.png",
      "imgs/DALL·E 2023-10-16 09.48.27.png",
      "imgs/DALL·E 2023-10-16 09.48.28.png",
    ],
    lowPrice: 100000,
    highPrice: 200000,
    description: "Ett test hus",
    paragraphs: [
      { headLine: "headline" },
      {
        img: "https://www.tine.no/_/recipeimage/w_1280%2Ch_720%2Cc_fill%2Cx_1500%2Cy_1000%2Cg_xy_center/recipeimage/412780.jpg",
      },
      { text: "actual kake" },
      {
        img: "https://www.tine.no/_/recipeimage/w_1280%2Ch_720%2Cc_fill%2Cx_1500%2Cy_1000%2Cg_xy_center/recipeimage/412780.jpg",
      },
      { text: "actual kake" },
      { text: "actual kake" },
      { headLine: "kake" },
      { text: "actual kake" },
      { text: "actual kake baker" },
    ],
  };

  return (
    <main>
      <Carousel
        animation="slide"
        autoPlay={false}
        height={"calc(100vh - 300px)"}
        className={styles.test}
      >
        {test.images.map((e, i) => (
          <div
            key={i.toString()}
            className={styles.imgCarouselContainer}
            style={{
              backgroundImage: `url("${e}")`,
            }}
          ></div>
        ))}
      </Carousel>

      <h2>{test.name}</h2>
      <h3>
        {formatNumber(test.lowPrice)} - {formatNumber(test.highPrice)} kr
      </h3>
      <p>{test.description}</p>
      {test.paragraphs.map((e, i) => {
        if (e.headLine) return <h3 key={i}>{e.headLine}</h3>;
        if (e.img)
          return (
            <div
              key={i}
              className={styles.imgContainer}
              style={{
                backgroundImage: `url("${e.img}")`,
              }}
            >
              f
            </div>
          );

        if (e.text) return <p key={i}>{e.text}</p>;
      })}
    </main>
  );
};

export default StoreArticle;

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
