import React, { useState } from "react";
import axios from "axios";

function GetImage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setUrl(response.data.message);
    } catch (error) {
      setError("Ошибка");
    }
  };

  if (error) return <p>{error}</p>;

  const handleButtonClick = () => {
    fetchImage();
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Загрузить изображение</button>
      <div>
        <img
          src={url}
          alt="Рандомное фото"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
}
export default GetImage;
