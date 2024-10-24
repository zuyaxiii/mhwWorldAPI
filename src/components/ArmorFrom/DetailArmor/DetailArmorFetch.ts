export const fetchArmorDetailData = async (searchTerm: string) => {
    try {
      const response = await fetch(`https://mhw-db.com/armor?search=${searchTerm}`);
      const data = await response.json();
      console.log("Fetched armor data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching armor data:", error);
      throw error;
    }
  };


