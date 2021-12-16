import { useEffect, useState } from "react";
import { FILM_DATA } from "./data";
import "./FilmList.css";

//https://swapi.dev/api/films/

export const FilmList = () => {
  const URL_SW = "https://swapi.py4e.com/api/films";
  // const URL_POSTER =
  //   "https://starwars.ru/media/posters/Star_Wars-_A_New_HopeEVH_USE_ONLYKeystonesRussianEVH_USE_ONLY2000_x_2818.jpg";

  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(URL_SW)
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  }, []);

  console.log(films);

  return (
    <div className="film__container">
      {films ? (
        films.map((el) => {
          return (
            <div className="film__item" key={el.episode_id}>
              <div className="film__infromation">
                <h3 className="film__title">{el.title}</h3>
                <h4 className="film__director">Director: {el.director}</h4>
                <h4 className="film__producer">Producer: {el.producer}</h4>
                <h4 className="film__date">Release: {el.release_date}</h4>
                <p className="film__opening">
                  Opening:
                  <br />
                  {el.opening_crawl}
                </p>
              </div>
              <div className="film__poster">
                {FILM_DATA.filter(
                  (element) => element.id === el.episode_id
                ).map((filteredData) => {
                  return (
                    <img
                      key={filteredData.id}
                      className="poster__img"
                      src={filteredData.poster}
                      alt="poster"
                    />
                  );
                })}
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
