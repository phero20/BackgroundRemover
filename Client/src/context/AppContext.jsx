import { useState, createContext, useCallback, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { getToken } = useAuth();

  const [credit, setCredit] = useState(false);

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        console.log(data)
      }
    } catch (error) {
      console.error("Error loading credits:", error);
      toast.error(error.message || "Failed to load credits");
    }
  };


  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
  };

  return <AppContext.Provider value={value}></AppContext.Provider>;
};

export default AppContextProvider;
