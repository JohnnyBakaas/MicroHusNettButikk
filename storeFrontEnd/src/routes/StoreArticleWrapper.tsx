import { useParams } from "react-router-dom";
import StoreArticle, {
  StoreArticleProps,
} from "../components/storeArticle/StoreArticle";

const StoreArticleWrapper = () => {
  const { hoseName } = useParams();

  const data: StoreArticleProps[] = [
    {
      name: "Test",
      images: [
        "/imgs/DALL·E 2023-10-16 09.48.25.png",
        "/imgs/DALL·E 2023-10-16 09.48.26.png",
        "/imgs/DALL·E 2023-10-16 09.48.27.png",
        "/imgs/DALL·E 2023-10-16 09.48.28.png",
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
    },
  ];

  const found = data[0];

  console.log(hoseName);

  return (
    <StoreArticle
      name={found.name}
      images={found.images}
      lowPrice={found.lowPrice}
      highPrice={found.highPrice}
      description={found.description}
      paragraphs={found.paragraphs}
    />
  );
};

export default StoreArticleWrapper;
