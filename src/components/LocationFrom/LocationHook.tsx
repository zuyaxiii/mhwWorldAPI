import axios from "axios";

export const fetchLocationData = async (searchTerm: string) => {
    try {
        const response = await axios.get(`https://mhw-db.com/locations?search=${searchTerm}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching locations data:", error);
        return [];
    }
};


