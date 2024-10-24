export const fetchLocationDetailData = async (searchTerm: string) => {
    try {
      const response = await fetch(`https://mhw-db.com/locations?search=${searchTerm}`);
      const data = await response.json();
      console.log("Fetched locations data:", data);
      return data;
    } catch (error) {
      console.error("Error locations monsters data:", error);
      throw error;
    }
  };


