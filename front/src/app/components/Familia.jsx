import Image from "next/image";
import fam from "../../../public/img/familia.png";

const FamiliaSolmira = () => {
  return (
    <div style={{
      position: 'relative',
/*       width: '1440px',
      height: '700px', */
      
      
    }}> 
      <Image src={fam} alt="familia" style={{zIndex: -1, width: '100%',height: 'auto',}}/>
      <div style={{
        position: 'absolute',
        top: '4.438rem',
        left: '5.25rempx',
        color: '#eeeae8',
        fontFamily: 'Kanit',
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: '100%'
      }}>
        FAMILIA
      </div>
      <div style={{
        position: 'absolute',
        top: '6.938rem',
        left: '4.938rem',
        color: '#eeeae8',
        fontFamily: 'Playfair Display',
        fontWeight: 600,
        fontSize: '5rem',
        fontStyle: 'italic',
        lineHeight: '100%'
      }}>
        SOLMIRA
      </div>
    </div>
  );
};

export default FamiliaSolmira;