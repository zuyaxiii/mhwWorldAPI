export interface IMonsterHunterWorldArmorDetail {
  id: number;
  rank: "low" | "high" | "master";  
  type : "head" | "chest" | "gloves" | "waist" | "legs";
  rarity: number;
  defense: {
    base: number;
    max: number;
    augmented: number;
  };
  resistances: {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
  };
  attributes: Record<string, unknown>;
  name: string;
  slots: any[]; // หรือกำหนดเป็น type ที่เฉพาะเจาะจงมากขึ้นถ้ามีข้อมูล
  skills: Array<{
    id: number;
    level: number;
    modifiers: Record<string, unknown>;
    description: string;
    skill: number;
    skillName: string;
  }>;
  armorSet: {
    id: number;
    rank: string;
    name: string;
    pieces: number[];
    bonus: string | null;  // หรือกำหนดเป็น type ที่เฉพาะเจาะจงมากขึ้นถ้ามีข้อมูล
  };
  assets?: {
    imageMale?: string;
    imageFemale?: string;
  };
  crafting: {
    materials: Array<{
      quantity: number;
      item: {
        id: number;
        rarity: number;
        carryLimit: number;
        value: number;
        name: string;
        description: string;
      };
    }>;
  };
}