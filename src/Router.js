import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { GalleryPage } from "./pages/GalleryPage";
import { MainPage } from "./pages/MainPage";
import { TodoPage } from "./pages/TodoPage";

export const Router = () => {
  return (
    <>
      <div>
        {/* <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes> */}
        <MainPage />
      </div>
    </>
  );
};
