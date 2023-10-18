import Carousel from "react-material-ui-carousel";
import styles from "./StoreArticle.module.css";

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
  html?: React.ReactNode;
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
    description: `
    I en verden hvor boligprisene stadig stiger og bevissthet om bærekraft vokser, har mikrohus blitt en voksende trend. Disse små hjemmene, ofte mindre enn 30 kvadratmeter, representerer en bevegelse bort fra forbrukerkulturen og mot en enklere livsstil.

Mikrohusets design optimerer plassen til det fulleste. Hvert hjørne og hver centimeter er utnyttet for å tilby et komfortabelt livsrom, fra sammenleggbare senger til flerbruksmøbler. Til tross for deres lille størrelse, er mange av disse husene utstyrt med alle moderne fasiliteter.

Dette konseptet handler imidlertid ikke bare om plassoptimalisering. Mange mikrohus-eiere er også opptatt av miljøet. Mindre plass betyr mindre forbruk av materialer, mindre avfall og ofte en mindre karbonavtrykk. I tillegg er mange mikrohus bygget med bærekraftige materialer og integrert med solpaneler eller regnvannssamlingssystemer.

Mikrohus gir også økonomiske fordeler. Med mindre kvadratmeter å bygge, kan eierne spare betydelig på byggekostnader. Dette gjør drømmen om huseierskap tilgjengelig for mange som ellers ville ha funnet det utilgjengelig.

Som et svar på boligkriser, miljøbekymringer og ønsket om enklere levende, representerer mikrohus en spennende løsning som kombinerer design, bærekraft og økonomi.
    `,
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

      <div className={styles.titelPricePurchaseWrapper}>
        <div>
          <h2>{test.name}</h2>
          <h3>Starter: {formatNumber(test.lowPrice)} kr</h3>
        </div>
        <button className={styles.purchaseButton}>Bestill</button>
      </div>
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
            ></div>
          );

        if (e.text) return <p key={i}>{e.text}</p>;
        if (e.html) return e.html;
      })}
    </main>
  );
};

export default StoreArticle;

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
