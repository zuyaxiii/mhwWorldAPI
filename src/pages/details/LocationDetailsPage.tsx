import React from 'react'
import LocationPage from '../../components/LocationFrom/LocationPage'
import Logo from '../../images/logo_iceborne_l.png';

const LocationDetailPage = () => {
    return (
        <div>
        <div className="flex justify-center bg-[url('./images/bgall.png')]">
          <img src={Logo} className="max-h-64 mt=[20px]" />
        </div>
        <LocationPage />
      </div>
    )
}

export default LocationDetailPage