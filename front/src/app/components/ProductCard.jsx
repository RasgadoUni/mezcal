import Image from 'next/image';
import imgnobg from '../../../public/img/mezcaaaal2.png'
//<Image src={imgnobg} height={'30px'} width={'20px'} alt='Mezcalito'/>


const ProductCard = () => {
  const cardStyle = {
    width: '220px',
    height: '420px',
    fontFamily: 'Kanit',
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#000000ff'
  };

  const stockStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#786b3aff',
    margintop: '100px',
  };

  const titleStyle = {
    fontSize: '25px',
    fontWeight: '500',
    color: '#000000ff',
    
  };

  const buttonContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };

  const buttonStyle = {
    width: '156px',
    height: '36px',
    backgroundColor: '#786B3A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'

  };

  const buttonTextStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#eeeae8ff'
  };



  return (
    <div style={cardStyle}>
      <div><Image src={imgnobg} style={{height:'270px', width:'130px'}} alt='Mezcalito'/></div>
      <div style={titleStyle}>Mezcal Espadín</div>
      <div style={priceStyle}>$1000.00</div>
      <div style={stockStyle}>En Stock</div>

      <div style={buttonContainerStyle}>
        <div style={buttonStyle}>
          <span style={buttonTextStyle}>Añadir al carrito</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;