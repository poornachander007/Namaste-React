import { useEffect, useState } from "react";
import MENU_API from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResinfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
