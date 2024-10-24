export interface IMonsterHunterWorldWeaponList {
  id: number;
  name: string;
  type: string;
  rarity: number;
  elements: IElement[];
  assets: IAssets;
}

export interface IElement {
  type: string; 
  damage: number; 
  hidden: boolean; 
}

export interface IAssets {
  icon: string;
  image: string; 
}

