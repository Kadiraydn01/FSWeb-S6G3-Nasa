import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Img from "./Img.js";
import Date from "./Date";

function App() {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=YEtdaCIKfjhx6J9tXQCjN9DmHM0rtvAFFD6pD0BT"
      )
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const results = Object.values(data).filter((item) =>
      item.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(results);
  }, [searchTerm, data]);

  return (
    <div className="lanet">
      <div className="tutucu">
        <div className="navbar">
          <h1>Nasa APOD</h1>
          <ul>
            <li>Ana Sayfa</li>
            <li>Arşiv</li>
            <li>Takvim</li>
            <li>SSS</li>
            <li>Eğitim</li>
            <li>APOD hakkında</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && searchResult.length > 0 && (
            <div>
              <h3>Search Results:</h3>
              <ul>
                {searchResult.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <Date date={data.date} />
        <Img data={data} />
      </div>
    </div>
  );
}

export default App;
