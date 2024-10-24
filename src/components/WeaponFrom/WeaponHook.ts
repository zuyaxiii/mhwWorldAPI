import axios from "axios";

export const fetchWeaponData = async (searchTerm: string) => {
    try {
        const response = await axios.get(`https://mhw-db.com/weapons?search=${searchTerm}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching weapon data:", error);
        return [];
    }
};


