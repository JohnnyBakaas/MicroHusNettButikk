import Carousel from "react-material-ui-carousel";
import styles from "./StoreArticle.module.css";
import ModelRenderer from "../modelRenderer/ModelRenderer";

export type StoreArticleProps = {
  name: string;
  images: string[];
  lowPrice: number;
  highPrice: number;
  description: string;
  paragraphs: Paragraph[];
};

export type Paragraph = {
  headLine?: string;
  img?: string;
  text?: string;
  htmlElement?: React.ReactNode;
  model?: string;
};

const StoreArticle = ({
  name,
  images,
  lowPrice,
  description,
  paragraphs,
}: StoreArticleProps) => {
  return (
    <main>
      <Carousel
        animation="slide"
        autoPlay={false}
        height={"calc(100vh - 300px)"}
        className={styles.test}
      >
        {images.map((e, i) => (
          <div
            key={i.toString()}
            className={styles.imgCarouselContainer}
            style={{
              backgroundImage: `url("${e}")`,
            }}
          ></div>
        ))}
      </Carousel>

      <div className={styles.titelPricePurchaseWrapper}>
        <div>
          <h2>{name}</h2>
          <h3>Starter: {formatNumber(lowPrice)} kr</h3>
        </div>
        <button className={styles.purchaseButton}>Bestill</button>
      </div>
      <p>{description}</p>
      {paragraphs.map((e, i) => {
        if (e.headLine) return <h3 key={i}>{e.headLine}</h3>;
        if (e.img)
          return (
            <div
              key={i}
              className={styles.imgContainer}
              style={{
                backgroundImage: `url("${e.img}")`,
              }}
            ></div>
          );

        if (e.text) return <p key={i}>{e.text}</p>;
        if (e.htmlElement) return e.htmlElement;
        if (e.model) return <ModelRenderer modelURL={e.model} />;
      })}
    </main>
  );
};

export default StoreArticle;

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
