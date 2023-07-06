import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const getPlants = async () => {
    const { data } = await axios.get("http://localhost:3000/plants");
    // console.log(data);
    setPlants(data);
  };
  useEffect(() => {
    getPlants();
  }, []);

  const data = [plants, setPlants];

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
