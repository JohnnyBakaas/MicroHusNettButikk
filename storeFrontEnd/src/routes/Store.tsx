import StoreArticleCard, {
  StoreArticleCardPros,
} from "../components/storeArticleCard/StoreArticleCard";
import sryles from "./Store.module.css";

const Store = () => {
  //@ts-ignore
  const imgLinkes = [
    "imgs/DALL·E 2023-10-16 09.48.25.png",
    "imgs/DALL·E 2023-10-16 09.48.26.png",
    "imgs/DALL·E 2023-10-16 09.48.27.png",
    "imgs/DALL·E 2023-10-16 09.48.28.png",
  ];
  const data: StoreArticleCardPros[] = [
    {
      name: "Opos",
      images: [
        "imgs/DALL·E 2023-10-16 09.48.28.png",
        "imgs/DALL·E 2023-10-16 09.48.26.png",
        "imgs/DALL·E 2023-10-16 09.48.27.png",
      ],
      lowPrice: 127000,

      description:
        "Ett mikrohus uten kompremiss, alt man trenger for å leve det store livet.",
    },
    {
      name: "Famen",
      images: [
        "imgs/DALL·E 2023-10-16 09.48.25.png",
        "imgs/DALL·E 2023-10-16 09.48.26.png",
        "imgs/DALL·E 2023-10-16 09.48.28.png",
      ],
      lowPrice: 113000,

      description: "Huset perfekt for deg og din familie. Store ",
    },
    {
      name: "Cube",
      images: [
        "imgs/DALL·E 2023-10-16 09.48.26.png",
        "imgs/DALL·E 2023-10-16 09.48.25.png",
        "imgs/DALL·E 2023-10-16 09.48.28.png",
      ],
      lowPrice: 88000,

      description: "Huset perfekt for deg og din familie. Store ",
    },
  ];
  return (
    <main className={sryles.main}>
      {data.map((e, i) => (
        <StoreArticleCard
          key={i}
          name={e.name}
          images={e.images}
          lowPrice={e.lowPrice}
          description={e.description}
        />
      ))}
    </main>
  );
};

export default Store;
