import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailWeaponPage from './DetailWeaponPage';
import { IMonsterHunterWorldWeaponDetail } from "../../../interface/WeaponInterface/mhwinterfaceWeaponDetail";

const weaponDetailContainer: React.FC = () => {
  const { weaponId } = useParams<{ weaponId: string }>();
  const [weapon, setweapon] = useState<IMonsterHunterWorldWeaponDetail | null>(null);

  useEffect(() => {

    const fetchWeaponData = async () => {
      try {
        const response = await fetch(`https://mhw-db.com/weapons/${weaponId}`);
        const data: IMonsterHunterWorldWeaponDetail = await response.json();
        setweapon(data);
      } catch (error) {
        console.error('Error fetching weapon data:', error);
      }
    };

    fetchWeaponData();
  }, [weaponId]);

  if (!weapon) {
    return <div>Loading...</div>; // หรือแสดงหน้าจอโหลด
  }

  return <DetailWeaponPage weapon={weapon}/>;
};

export default weaponDetailContainer;
