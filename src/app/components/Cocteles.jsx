import React from 'react';
import Recetaw from './Receta';

const RecipesSection = () => {
    return (
        <div style={sectionStyles}>
            <SectionTitle />
            <div style={cardsContainer}>
                <Recetaw/>
                <Recetaw/>
                <Recetaw/>
                <Recetaw/>
                
            </div>
        </div>
    );
};

const SectionTitle = () => (
    <h1 style={titleStyles}>Cócteles Solmira</h1>
);


const sectionStyles = {
    padding: '40px',
    textAlign: 'center',
};

const titleStyles = {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 500,
    fontSize: '48px',
    color: '#786b3a',
    lineHeight: '1.0',
    marginBottom: '40px',
};

const cardsContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
};


export default RecipesSection;
