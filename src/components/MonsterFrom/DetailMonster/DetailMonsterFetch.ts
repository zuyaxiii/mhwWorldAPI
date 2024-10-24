export const fetchMonstersDetailData = async (searchTerm: string) => {
    try {
      const response = await fetch(`https://mhw-db.com/monsters?search=${searchTerm}`);
      const data = await response.json();
      console.log("Fetched monsters data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching monsters data:", error);
      throw error;
    }
  };


