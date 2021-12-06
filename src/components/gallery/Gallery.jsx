import { useState } from "react";
import "./Gallery.css";

export const Gallery = () => {
  const IMG_FILE = [
    {
      id: 1,
      src: "https://sun9-60.userapi.com/impf/c625517/v625517105/3d434/1CydHt5gV9w.jpg?size=1280x720&quality=96&sign=46dc667dfc997f29c0f9e718fc42406d&type=album",
    },
    {
      id: 2,
      src: "https://sun9-77.userapi.com/impf/c627328/v627328105/3624d/19JAVNqHP4Y.jpg?size=1280x720&quality=96&sign=312095b24530c626c691c071a94f7698&type=album",
    },
    {
      id: 3,
      src: "https://sun9-59.userapi.com/impf/c628527/v628527105/27a7c/k4HKPJe6GGk.jpg?size=740x1080&quality=96&sign=a9199d73648bbe5faa1d57e933d6cb01&type=album",
    },
    {
      id: 4,
      src: "https://sun9-14.userapi.com/impf/c628527/v628527105/27a86/5pVffe5DijM.jpg?size=740x1080&quality=96&sign=8368cee199d7d1874c20f4abf4fe140b&type=album",
    },
    {
      id: 5,
      src: "https://sun9-8.userapi.com/impf/c631121/v631121105/42e6/sIQ0NyRCIv0.jpg?size=740x1080&quality=96&sign=7678e898a371ca6fdea9caecb8e44256&type=album",
    },
  ];

  const [selectItem, setSelectItem] = useState(IMG_FILE[0]);

  // const handleSelect = () => setSelectItem(e.selectItem);

  return (
    <div className="gallery-container">
      <img
        className="gallery-item image__item--selected"
        src={selectItem.src}
        alt="selected "
      />
      <div className="image-container">
        {IMG_FILE.map((e) => {
          return (
            <img
              style={{
                border: selectItem.src === e.src ? "2px solid brown" : "",
              }}
              className="image__item"
              key={e.id}
              src={e.src}
              alt="item img"
              // onClick={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
};
