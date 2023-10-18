import StoreArticleCard, {
  StoreArticleCardPros,
} from "../components/storeArticleCard/StoreArticleCard";
import sryles from "./Store.module.css";

const Store = () => {
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
      highPrice: 197000,
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
      highPrice: 183000,
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
      highPrice: 129000,
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
          highPrice={e.highPrice}
          description={e.description}
        />
      ))}
    </main>
  );
};

export default Store;
