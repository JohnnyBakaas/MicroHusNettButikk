import styles from "./Home.module.css";

const Home = () => {
  return (
    <main>
      <div className={styles.bigImgAndTextWrapper}>
        <h1>Få reisverket på plass på dagen</h1>
      </div>
      <div className={styles.textStuff}>
        <h2>Hvorfor bygge ditt eget mikrohus?</h2>
        <p>
          Om du er ute etter noe å leie ut, ett eget sted for familien å være
          når de er på besøk, ett fennomenalt sudio eller ett flott alternativ
          for en leilighet tror vi ett mikrohus er en fenomenal løsningen for
          deg.
        </p>

        <p>
          Det er mange økonomiske fordeler med mikrohus. Du slipper mange av
          bygg kravene vi har for tradisjonelle boliger. Ventilasjons kravet kan
          dekkes med lufteventiler og vindu som åpnes, VVS krever bare innendørs
          toalet, kjøkkenfunksjon og baderomsfunksjon.
        </p>
      </div>
    </main>
  );
};

export default Home;
