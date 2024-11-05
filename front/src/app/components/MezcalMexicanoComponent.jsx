import React from 'react';
import Image from 'next/image';
import imgmezcal from "../../../public/img/amaras.png"


const MezcalCard = () => {
    return (
        <div style={styles.container}>
            <Image 
                src={imgmezcal} 
                alt="Background" 
                style={styles.image}
            />
            <div style={styles.textContainer}>
                <h1 style={styles.titleSmall}>EL VERDADERO</h1>
                <h2 style={styles.titleLarge}>MEZCAL<br />MEXICANO</h2>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        height: '690px',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        position: 'absolute',
        top: '9%',
        left: '22.5%',
        textAlign: 'center',
        color: '#eeeae8',
    },
    titleSmall: {
        margin: 0,
        fontSize: '2.1875rem',
        fontWeight: 700,
        fontFamily: 'Kanit',
        lineHeight: '100%',
    },
    titleLarge: {
        margin: 0,
        fontSize: '9.375rem',
        fontWeight: 700,
        fontFamily: 'Kanit',
        lineHeight: '100%',
    },
};

export default MezcalCard;
