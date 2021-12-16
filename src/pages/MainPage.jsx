import React from "react";
import { FilmList } from "../components/filmList/FilmList";

export const MainPage = () => {
  return (
    <div className="main-container">
      <h1>Welcome!</h1>
      <FilmList />
    </div>
  );
};
