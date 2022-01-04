import React from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     getGifs(category).then((img) => {
  //       setImages(img);
  //     });
  //   }, [category]);

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__jackInTheBox">{category}</h3>
      {loading && (
        <p className="animate_animated animate__rotateOutDownRight">Loading</p>
      )}
      <div className="card-grid">
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
