import { useEffect } from "react";

const Filter = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button onClick={() => setActiveGenre(0)}>ALL</button>
      <button onClick={() => setActiveGenre(35)}>COMEDY</button>
      <button onClick={() => setActiveGenre(28)}>ACTION</button>
    </div>
  );
};

export default Filter;
