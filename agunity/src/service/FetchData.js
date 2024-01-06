import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function FetchData() {
  const locationName = useSelector((state) => state.location.locationName);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            locationName +
            "&APPID=3d4c75dc2029cd9c91b31f7cbf5170f4"
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [locationName]);

  return { data, error, loading };
}
