import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailArmorPage from './DetailArmorPage';
import { IMonsterHunterWorldArmorDetail } from '../../../interface/ArmorInterface/mhwinterfaceDetail'; 

const ArmorDetailContainer: React.FC = () => {
  const { armorId } = useParams<{ armorId: string }>();
  const [armor, setArmor] = useState<IMonsterHunterWorldArmorDetail | null>(null);

  useEffect(() => {

    const fetchArmorData = async () => {
      try {
        const response = await fetch(`https://mhw-db.com/armor/${armorId}`);
        const data: IMonsterHunterWorldArmorDetail = await response.json();
        setArmor(data);
      } catch (error) {
        console.error('Error fetching armor data:', error);
      }
    };

    fetchArmorData();
  }, [armorId]);

  if (!armor) {
    return <div>Loading...</div>; // หรือแสดงหน้าจอโหลด
  }

  return <DetailArmorPage armor={armor}/>;
};

export default ArmorDetailContainer;
