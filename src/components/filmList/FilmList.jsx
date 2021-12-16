import { useEffect, useState } from "react";
import "./FilmList.css";

export const FilmList = () => {
  const URL_POSTER =
    "https://starwars.ru/media/posters/Star_Wars-_A_New_HopeEVH_USE_ONLYKeystonesRussianEVH_USE_ONLY2000_x_2818.jpg";

  const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/films/`)
  //     .then((res) => res.json())
  //     .then((data) => setFilms(data.results));
  // }, []);

  console.log(films);

  return (
    <div className="film__container">
      {films ? (
        films.map((el) => {
          return (
            <div className="film__item">
              <div className="film__infromation">
                <h3 className="film__title">{el.title}</h3>
                <p className="film__opening">{el.opening_crawl}</p>
              </div>
              <div className="film__poster">
                <img className="poster__img" src={URL_POSTER} alt="poster" />
              </div>
            </div>
          );
        })
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
};
