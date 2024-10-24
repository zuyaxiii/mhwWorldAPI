import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMonsterHunterWorldLocationMapZone } from '../../../interface/LocationInterface/mhwinterfaceLocationDetail'; 
import DetailLocationPage from './DetailLocationPage';

const LocationDetailContainer: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const [location, setLocation] = useState<IMonsterHunterWorldLocationMapZone | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(`https://mhw-db.com/locations/${locationId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: IMonsterHunterWorldLocationMapZone = await response.json();
        setLocation(data);
      } catch (error) {
        console.error('Error fetching monster data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, [locationId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!location) {
    return <div>No location found</div>; 
  }

  return <DetailLocationPage locations={location} camps={location.camps} />; 
}

export default LocationDetailContainer;
