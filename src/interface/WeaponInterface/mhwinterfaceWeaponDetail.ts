export interface IMonsterHunterWorldWeaponDetail {
    id: number; 
    name: string; 
    type: string; 
    rarity: number; 
    attack: IAttack; 
    elderseal: null | number; 
    damageType: string; 
    durability: IDurability[]; 
    slots: ISlot[]; 
    elements: IElement[]; 
    crafting: ICrafting; 
    assets: IAssets;
  }
  

  export interface IAttack {
    display: number; 
    raw: number; 
  }
  

  export interface IDurability {
    red: number; 
    orange: number; 
    yellow: number; 
    green: number; 
    blue: number; 
    white: number; 
    purple: number; 
  }
  
  
  export interface ISlot {
    rank: number; 
  }
  

  export interface IElement {
    type: string; 
    damage: number; 
    hidden: boolean; 
  }
  
  
  export interface ICrafting {
    craftable: boolean; 
    previous: number; 
    branches: number[]; 
    craftingMaterials: ICraftingMaterial[]; 
    upgradeMaterials: IUpgradeMaterial[]; 
  }
  
  
  export interface ICraftingMaterial {
    quantity: number; 
    item: IItem; 
  }
  
 
  export interface IUpgradeMaterial {
    quantity: number;
    item: IItem; 
  }
  

  export interface IItem {
    id: number;
    name: string;
    description: string; 
    rarity: number;
    carryLimit: number;
    value: number;
  }
  

  export interface IAssets {
    icon: string;
    image: string; 
  }
  