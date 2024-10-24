import { ReactNode } from "react";

export interface IMonsterHunterArmorList {
    description: ReactNode;
    id: number;             
    rank: "low" | "high" | "master";  
    type : "head" | "chest" | "gloves" | "waist" | "legs";
    name: string;            
    pieces: IMonsterHunterWorldArmorItem[];
    bonus: string | null;    
    assets: {
        imageMale: string;  
        imageFemale: string;
      };
}

export interface IMonsterHunterWorldArmorItem {
    id: number;            
    name: string;        
    defense: {
        base: number;      
        max: number;      
        augmented: number; 
    };
    resistances: {
        fire: number;     
        water: number;      
        thunder: number;  
        ice: number;      
        dragon: number;     
    };
    skills: Array<{
        skillName: string;   
        level: number;       
    }>;
    slots: Array<{
        rank: number;       
    }>;
    type: "head" | "chest" | "gloves" | "waist" | "legs"; 
    url: string; 
}