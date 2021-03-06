import { useState } from "react";
import "./Gallery.css";
import { IMG_FILE } from "./data";
import { commentMock } from "./comment";
export const Gallery = () => {
  const [selectItem, setSelectItem] = useState(IMG_FILE[0]);
  const [comment, setComment] = useState(commentMock);
  const [fieldValue, setFieldValue] = useState("");

  const handleSelect = (e) => {
    setSelectItem(e);
  };

  const handleLike = () => {
    setSelectItem((prev) => ({ ...prev, isLiked: !prev.isLiked }));
    if (selectItem.isLiked) {
      setSelectItem((prev) => ({ ...prev, likes: prev.likes - 1 }));
    } else {
      setSelectItem((prev) => ({ ...prev, likes: prev.likes + 1 }));
    }
  };

  const handleChange = (e) => {
    setFieldValue(e.target.value);
  };

  const handleComment = () => {
    setComment((prev) => [
      ...prev,
      { id: prev.length + 1, comment: fieldValue },
    ]);
    setFieldValue("");
  };

  console.log(comment);

  return (
    <div className="gallery-container">
      <div className="main-img-wrapper">
        <img
          className="gallery-item image__item--selected"
          src={selectItem.src}
          alt="selected "
        />
        <div className="gallery__select">
          <span className="select__likes">{selectItem.likes}</span>
          <button className="select__likes" onClick={handleLike}>
            <svg
              class="post__icon"
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.9636 3.78L12.3364 6.825L11.7091 9.45H14.3227H20.8045V11.55C20.8045 11.55 20.8045 11.55 20.8045 11.655L17.7727 18.9H8.36364V8.4L12.9636 3.78ZM2.09091 10.5V18.9V10.5ZM13.8 0L6.9 6.93C6.48182 7.245 6.27273 7.77 6.27273 8.4V18.9C6.27273 20.055 7.21364 21 8.36364 21H17.7727C18.6091 21 19.3409 20.475 19.6545 19.74L22.7909 12.285C22.8955 12.075 22.8955 11.76 22.8955 11.55V9.45H23C23 8.295 22.0591 7.35 20.9091 7.35H14.3227L15.3682 2.52V2.205C15.3682 1.785 15.1591 1.365 14.95 1.05L13.8 0ZM4.18182 8.4H0V21H4.18182V8.4Z"></path>
            </svg>
          </button>
        </div>
        <div className="gallery__comment">
          {comment.map((el) => {
            return (
              <div className="comment__text-wrapper" key={el.id}>
                <p className="comment__text">{el.comment}</p>
              </div>
            );
          })}
          <textarea
            className="comment__textarea"
            onChange={handleChange}
            value={fieldValue}
          />
          <button className="button comment__button" onClick={handleComment}>
            Submit
          </button>
        </div>
      </div>
      <ul className="image-container">
        {IMG_FILE.map((el) => {
          return (
            <li className="image-container-item">
              <img
                style={{
                  border: selectItem.src === el.src ? "2px solid #FFE81F" : "",
                }}
                className="image__item"
                key={el.id}
                src={el.src}
                alt="item img"
                onClick={() => handleSelect(el)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
