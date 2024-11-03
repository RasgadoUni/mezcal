import Image from 'next/image';
import Margarita from '../../../public/img/Receta1.png';

const MargaritaCard = () => {
  const cardStyle = {
    width: '250px',
    height: '346px',
    fontFamily: 'Kanit',
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '25px',
    fontWeight: '500',
    color: '#786b3a',
    fontFamily: 'Playfair Display',
  };

  const buttonStyle = {
    width: '172px',
    height: '45px',
    backgroundColor: '#786B3A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 auto',
    color: '#eeeae8',
    fontWeight: '700',
  };

  const buttonText = 'Conoce la receta...';



  return (
    <div style={cardStyle}>
      <Image src={Margarita} style={{width:'250px', height:'254px'}} alt='Margarita Image' />
      <div style={titleStyle}>Margarita</div>
      <div style={buttonStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default MargaritaCard;
