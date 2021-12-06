import { useEffect, useState } from "react";

export const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/`)
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  }, []);

  console.log(films);

  return (
    <div>
      {films ? (
        films.map((el) => {
          return (
            <div>
              <h3>{el.title}</h3>
            </div>
          );
        })
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
};
