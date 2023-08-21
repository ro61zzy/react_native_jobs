import { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native-web";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "6f93a34827mshbb2a86e6287e24ep13175bjsn14d0aa9bbea6",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      alert("There is a error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

const refetch = () => {
  setIsLoading(true)
  fetchData()
}

return { data, isLoading, error, refetch}

};

export default useFetch