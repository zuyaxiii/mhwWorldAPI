export interface IMonsterHunterWorldLocationMapZone {
  id: number;
  zoneCount: number;
  name: string;
  camps: IMonsterHunterWorldLocationCamp[];
}

export interface IMonsterHunterWorldLocationCamp {
    id: number;
    zone: number;
    name: string;
}