import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMonsterHunterWorldMonsterDetail } from '../../../interface/MonsterInterface/mhwinterfaceMonsterDetail'; 
import DetailMonsterPage from './DetailMonsterPage';

const MonsterDetailContainer: React.FC = () => {
  const { monsterId } = useParams<{ monsterId: string }>();
  const [monster, setMonster] = useState<IMonsterHunterWorldMonsterDetail | null>(null);

  useEffect(() => {

    const fetchMonsterData = async () => {
      try {
        const response = await fetch(`https://mhw-db.com/monsters/${monsterId}`);
        const data: IMonsterHunterWorldMonsterDetail = await response.json();
        setMonster(data);
      } catch (error) {
        console.error('Error fetching monster data:', error);
      }
    };

    fetchMonsterData();
  }, [monsterId]);

  if (!monster) {
    return <div>Loading...</div>; 
  }

  return <DetailMonsterPage monster={monster}/>;
};

export default MonsterDetailContainer;
