import Image from "next/image";
import fam from "../../../public/img/familia.png";

const FamiliaSolmira = () => {
  return (
    <div style={{
      position: 'relative',
      width: '1440px',
      height: '700px',
      
      
    }}> 
      <Image src={fam} fill alt="familia" style={{zIndex: -1}}/>
      <div style={{
        position: 'absolute',
        top: '71px',
        left: '84px',
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
        top: '111px',
        left: '79px',
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