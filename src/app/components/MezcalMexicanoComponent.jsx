import React from 'react';
import Image from 'next/image';
import imgmezcal from "../../../public/img/amaras.png"

const MezcalMexicanoComponent = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%', // Adjust width as needed
      height: '500px', // Adjust height as needed
      /* backgroundImage: `url(/mezcal/app/img/amaras.png)`, */
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center'
    },
    textContainer: {
      position: 'absolute',
      top: '20%', // Adjust top position as needed
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    },
    topText: {
      fontSize: '36px',
      marginBottom: '20px'
    },
    mainText: {
      fontSize: '72px',
      lineHeight: '1.2'
    },
    foregroundImage: {
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30%', // Adjust width as needed
      height: 'auto'
    }
  };

  return (
    <div style={styles.container}>
      <Image src={imgmezcal} fill alt='mzc'/>
      <div style={styles.textContainer}>
        <h1 style={styles.topText}>EL VERDADERO</h1>
        
        <h2 style={styles.mainText}>MEZCAL<br/>MEXICANO</h2>
       
      </div>
      <div style={styles.foregroundImage}>
       {/*  <Image src={imgmezcal}alt='mzc'/> */}
      </div>
    </div>
  );
};

export default MezcalMexicanoComponent;