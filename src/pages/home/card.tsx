import styled from "styled-components";
import { Link } from "react-router-dom";

import WeaponFront from "../../images/greatswordCard.png"
import WeaponBack from "../../images/insectGlaiveCard.png"
import ArmorFront from '../../images/ArmorFront.png';
import ArmorBack from '../../images/ArmorBack.png';
import LocationFront from '../../images/LocationFront.png';
import LocationBack from '../../images//LocationBack.png';
import MonsterFront from '../../images/Monfront.png';
import MonsterBack from '../../images/MonBack.png';


interface CardProps {
    frontImage: string;
    backImage: string;
  }

const CardArmor = () => {
  return (
    <StyledWrapper
    frontImage={ArmorFront}
    backImage={ArmorBack}
    >
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>EQUIPMENT</p>
          </div>
          <div className="card-back">
          <Link to="/Armor">
            <p>CLICK</p>
          </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const CardLocation = () => {
  return (
    <StyledWrapper
    frontImage={LocationFront}
    backImage={LocationBack}
    >
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>LOCATION</p>
          </div>
          <div className="card-back">
          <Link to="/Location">
            <p>CLICK</p>
          </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const CardMonster = () => {
  return (
    <StyledWrapper
    frontImage={MonsterFront}
    backImage={MonsterBack}
    >
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>MONSTER</p>
          </div>
          <div className="card-back">
          <Link to="/Monster">
            <p>CLICK</p>
          </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const CardWeapon = () => {
  return (
    <StyledWrapper
      frontImage={WeaponFront}
      backImage={WeaponBack}
    >
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>WEAPON</p>
          </div>
          <div className="card-back">
          <Link to="/Weapon">
            <p>CLICK</p>
          </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<CardProps>`
  .card {
    width: 300px;
    height: 200px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-image: url(${props => props.frontImage});
    background-size: cover;
    background-repeat: no-repeat
    background-position: center
    color: #fff;
    display: flex;
    align-items: center;
    //   border: 10px solid #6A2C70;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-back {
    background-image: url(${props => props.backImage});
    background-size: cover;
    background-repeat: no-repeat
    background-position: center
    color: #fff;
    display: flex;
    align-items: center;
    //   border: 10px solid #F08A5D;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }
`;

export { CardWeapon, CardArmor, CardLocation, CardMonster };
