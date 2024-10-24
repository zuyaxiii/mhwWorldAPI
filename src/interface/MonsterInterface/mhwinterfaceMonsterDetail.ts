export interface IMonsterHunterWorldMonsterDetail {
    id: number;
    type: string;
    species: string;
    elements: string[];
    name: string;
    description: string;
    ailments: Ailment[];
    locations: MonsterLocation[];
    resistances: Resistance[];
    weaknesses: Weakness[];
    rewards: any[];
  }
  
  export interface Ailment {
    id: number;
    name: string;
    description: string;
    recovery: Recovery;
    protection: Protection;
  }
  
  export interface Recovery {
    actions: string[];
    items: Item[];
  }
  
  export interface Protection {
    skills: Skill[];
    items: Item[];
  }
  
  export interface Item {
    id: number;
    rarity: number;
    value: number;
    carryLimit: number;
    name: string;
    description: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
    description: string;
  }
  
  export interface MonsterLocation {
    id: number;
    zoneCount: number;
    name: string;
  }
  
  export interface Resistance {
    element: string;
    condition: string | null;
  }
  
  export interface Weakness {
    element: string;
    stars: number;
    condition: string | null;
  }
  
  