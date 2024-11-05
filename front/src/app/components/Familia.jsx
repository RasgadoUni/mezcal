import Image from "next/image";
import fam from "../../../public/img/familia.png";

import React from 'react';

const SolmiraCard = () => {
    return (
        <div style={styles.container}>
            <Image 
                src={fam} 
                alt="Background" 
                style={styles.image}
            />
            <div style={styles.textContainer}>
                <h1 style={styles.title}>FAMILIA</h1>
                <h2 style={styles.subtitle}>SOLMIRA</h2>
            </div>
        </div>
    );
};

const styles = {
  container: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '700px',
  },
  image: {
      width: '100%',
      height: '100%',
  },
  textContainer: {
      position: 'absolute',
      top: '9.5%',
      left: '5.8%',
      color: '#eeeae8',
  },
  title: {
      margin: 0,
      fontSize: '2.5rem',
      fontWeight: 700,
      fontFamily: 'Kanit',
      lineHeight: '100%',
  },
  subtitle: {
      margin: 0,
      fontSize: '5rem',
      fontWeight: 600,
      fontFamily: 'Playfair Display',
      fontStyle: 'italic',
      lineHeight: '100%',
  },
};

export default SolmiraCard;

