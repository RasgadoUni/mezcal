import React from 'react';
import Prodd from './ProductCard';

const TitleHeader = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '47px',
            width: '100%',
        },
        header: {
            fontFamily: 'Playfair Display, serif',
            fontSize: '48px',
            fontWeight: 500,
            color: '#5F2D16',
            textAlign: 'center',
            lineHeight: '1',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Mezcales</h1>
        </div>
    );
};


const ProductDisplay = () => {
    

    return (
        <div style={styles.pageContainer}>
            <TitleHeader />
            <br />
            <hr style={{borderColor:'#5F2D16'}}/>
            <br />
            <div style={styles.gridContainer}>
                <Prodd/>
                <Prodd/>
                <Prodd/>
                <Prodd/>
                <Prodd/>
                <Prodd/>

            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        padding: '20px',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        justifyItems: 'center',
    },
    card: {
        border: 'none',
        borderRadius: '8px',
        width: '226px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    image: {
        display: 'block',
        width: '200px',
        height: '308px',
        margin: '0 auto 20px',
    },
    name: {
        fontFamily: 'Playfair Display',
        fontWeight: 500,
        fontSize: '25px',
        color: '#000',
        lineHeight: '100%',
        margin: '0',
    },
    price: {
        fontFamily: 'Kanit',
        fontWeight: 700,
        fontSize: '20px',
        color: '#000',
        lineHeight: '100%',
        margin: '10px 0',
    },
    stockStatus: {
        fontFamily: 'Kanit',
        fontWeight: 700,
        fontSize: '15px',
        color: '#786b3a',
        lineHeight: '100%',
        margin: '10px 0',
    },
    quantityContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    quantityInput: {
        width: '40px',
        height: '36px',
        textAlign: 'center',
        margin: '0 10px',
    },
    addButton: {
        backgroundColor: '#b59a49',
        color: '#eeeae8',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ProductDisplay;
