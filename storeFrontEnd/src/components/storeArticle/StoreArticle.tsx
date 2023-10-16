import styles from "./StoreArticle.module.css";

export type StoreArticlePros = {
  name: string;
  images: string[];
  price: number;
};

const StoreArticle = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}></div>
      <h2>Ett hus</h2>
      <h3>100 000 kr</h3>
    </div>
  );
};

export default StoreArticle;
