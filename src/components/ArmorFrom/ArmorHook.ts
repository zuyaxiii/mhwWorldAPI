import axios from "axios";

export const fetchArmorData = async (searchTerm: string) => {
    try {
        const response = await axios.get(`https://mhw-db.com/armor?search=${searchTerm}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching armor data:", error);
        return [];
    }
};


