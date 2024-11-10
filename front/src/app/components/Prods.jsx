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

// Datos de productos (podrías traerlos de una API o un archivo separado)
const productos = [
    { idProducto: 1, nombre: 'Mezcal Espadín 350ml', precio: 400.00 },
    { idProducto: 2, nombre: 'Mezcal Espadín 700ml', precio: 800.00 },
    { idProducto: 3, nombre: 'Mezcal Cuishe 350ml', precio: 400.00 },
    { idProducto: 4, nombre: 'Mezcal Cuishe 700ml', precio: 800.00 },
    { idProducto: 5, nombre: 'Mezcal Tobalá 350ml', precio: 400.00 },
    { idProducto: 6, nombre: 'Mezcal Tobalá 700ml', precio: 800.00 },
    { idProducto: 7, nombre: 'Mezcal Sirena negra 350ml', precio: 400.00 },
    { idProducto: 8, nombre: 'Mezcal Sirena negra 700ml', precio: 800.00 },
    { idProducto: 9, nombre: 'Mezcal Tepazate 350ml', precio: 400.00 },
    { idProducto: 10, nombre: 'Mezcal Tepazate 700ml', precio: 800.00 },
    { idProducto: 11, nombre: 'Mezcal Jabalí 350ml', precio: 400.00 },
    { idProducto: 12, nombre: 'Mezcal Jabalí 700ml', precio: 800.00 },
];

const ProductDisplay = () => {
    return (
        <div style={styles.pageContainer}>
            <TitleHeader />
            <br />
            <hr style={{borderColor: '#5F2D16'}} />
            <br />
            <div style={styles.gridContainer}>
                {productos.map((producto) => (
                    <Prodd
                        key={producto.idProducto}
                        idProducto={producto.idProducto}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                ))}
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
};

export default ProductDisplay;

