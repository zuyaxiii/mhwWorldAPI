export interface IMonsterHunterWorldMonsterList {
    id: number;
    name: string;
    type: string;
    species: string;
    description: string
    elements: string[];
    weaknesses: Weakness[];
    resistances: Resistance[];
}

export interface Weakness {
    element: string;
    stars: number;
}

export interface Resistance {
    element: string;
    stars: number;
}