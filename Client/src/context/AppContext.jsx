import { useState, createContext } from "react";
import { useAuth, useUser, useClerk } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
      } else {
        toast.error(data.message || "Failed to load credits");
      }
    } catch (error) {
      console.error("Error loading credits:", error);
      toast.error(error.message || "Failed to load credits");
    }
  };

  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");
      const token = await getToken();
      const formData = new FormData();
      image && formData.append("image", image);
      const { data } = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        { headers: { token } }
      );
      if (data.success) {
        setResultImage(data.resultImage);
        data.CreditBalance && setCredit(data.CreditBalance);
      } else {
        toast.error(data.message || "Failed to load");
        data.CreditBalance && setCredit(data.CreditBalance);
        if (data.CreditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      console.error("Error loading credits:", error);
      toast.error(error.message || "Failed to load");
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
