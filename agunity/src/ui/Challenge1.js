import { useState } from "react";
import { updateLocation } from "../feature/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import FetchData from "../service/FetchData";
import imageLondon from "../images/london.png";
import imageAustralia from "../images/australia.png";

function Challenge1() {
  const locationName = useSelector((state) => state.location.locationName);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { loading, data } = FetchData();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    dispatch(updateLocation(inputValue));
  };

  return (
    <div className="agunity grid-container">
      <div className="agunity__form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type London"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
      {loading && (
        <div class="lds-circle">
          <div></div>
        </div>
      )}
      <div className={"agunity__weather " + (data ? "d-block" : "d-none")}>
        <h1>Weather in {data?.name}</h1>
        <p>Temperature: {data?.main.temp}K</p>
        <p>Humidity: {data?.main.humidity}</p>
        <p>Weather: {data?.weather[0].description}</p>
      </div>
      <div className={"agunity__image " + (data ? "d-block" : "d-none")}>
        {locationName === "australia" && (
          <img src={imageAustralia} alt="australia flag" className="w-100" />
        )}
        {locationName === "London" && (
          <img src={imageLondon} alt="london flag" className="w-100" />
        )}
      </div>
    </div>
  );
}

export default Challenge1;
