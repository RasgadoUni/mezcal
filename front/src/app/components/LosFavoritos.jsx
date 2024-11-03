import React from 'react';

import ProductCard from './ProductCard';


function Header() {
    return (
        <div style={styles.headerContainer}>
            <h1 style={styles.headerText}>Los favoritos de la casa</h1>
        </div>
    );
}







function LosFavoritos() {
    return (
        <div style={styles.total} >
            <div style={styles.headerstyle}>
            <Header />
            </div>
            <div style={styles.pageContainer}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

const styles = {
    total:{
        justifyContent:'center',
        backgroundColor: '#EEEAE8',
               
    },
    pageContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '10px'
    },
    headerContainer: {
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    headerText: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '3rem',
        fontWeight: 500,
        color: '#786b3a',
        lineHeight: '100%',
        textAlign: 'center',
        margin: 0,
    },
    productList: {
        marginTop:'50px',
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-between',
    },
    headerstyle:{
        alignItems: 'center',
        textWrap: 'balance',
        padding: '15px'
    }
    /* productCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        width: '226px',
        height: '446px',
        backgroundColor: 'black',
        color: 'white'
    }, */
    /* productImage: {
        width: '200px',
        height: '307px',
        marginBottom: '10px',
    }, */
    /* productName: {
        fontSize: '25px',
        fontFamily: 'Playfair Display',
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: '5px',
    },
    productPrice: {
        fontSize: '20px',
        fontFamily: 'Kanit',
        fontWeight: 700,
        color: '#000000',
        marginBottom: '5px',
    }, */
    /* productStockStatus: {
        fontSize: '15px',
        fontFamily: 'Kanit',
        fontWeight: 700,
        color: '#786b3a',
        marginBottom: '5px',
        textAlign: 'center',
    }, */
    /* quantityContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
    },
    quantity: {
        fontSize: '20px',
        fontFamily: 'Kanit',
        fontWeight: 700,
        color: '#000000',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '3px',
        marginRight: '5px',
    }, */
    /* addToCartButton: {
        backgroundColor: '#8B7754',
        padding: '10px 20px',
        border: 'none',
        color: '#eeeae8',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    }, */
    /* addToCartButtonText: {
        fontSize: '15px',
        fontFamily: 'Kanit',
        fontWeight: 700,
    },
    footerBarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20px',
        backgroundColor: '#73642F',
        position: 'absolute',
        bottom: 0,
    },
    footerBarImage: {
        width: '100%',
        height: '100%',
    } */
};

export default LosFavoritos;
