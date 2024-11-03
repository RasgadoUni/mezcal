import Link from 'next/link';
import Image from 'next/image';
import imagenbg from '../../public/img/primera.jpg';
import './AgeConfirmation.css';

const AgeConfirmation = () => {
    return (
        <div className="container">
          <Image src={imagenbg} fill style={{zIndex: -1}} alt='Agaves'/>
            <div className="content">
                <h1 className="title">¿Eres mayor de edad ?</h1>
                <p className="description">
                    Este sitio web es para mayores de 18 años.<br />
                    Por favor, confirma que eres mayor de edad <br />
                    para continuar.
                </p>
                <div className="buttons">
                  <Link href="/principal">
                    <button className="button" >
                        Si, tengo más de 18 años
                    </button>
                  </Link>
                  <Link href='https://www.google.com'>
                    <button className="button">No, tengo menos de 18 años</button>
                  </Link>
                </div>
                <p className="terms">
                    Al confirmar tu edad y entrar a nuestro sitio confirmas que estás de acuerdo con los Términos y Condiciones del Servicio.
                </p>
            </div>
        </div>
    );
};

export default AgeConfirmation;






/* import React from 'react';
import Header from './components/Header';
import MezcalMexicanoComponent from './components/MezcalMexicanoComponent'; // Import MezcalMexicanoComponent component
import FooterComponent from './components/FooterComponent'; // Import FooterComponent component
import LosFavoritos from './components/LosFavoritos';

function principal() {
  return (
    <div>
      <Header /> 
      <MezcalMexicanoComponent /> 
      <LosFavoritos/>
      <FooterComponent /> 
    </div>
  );
}

export default principal; */




/* import React from 'react';
import backgroundImage from '@/app/img/primera.jpg'

const SignUp = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover',
    height: '100vh', 
    width: '100vw',
  };

  const formContainerStyle = {
    width: '700px',
    height: '420px',
    backgroundColor: '#F6E6A3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontFamily: 'Playfair Display',
    fontWeight: 700,
    fontSize: '48px',
    color: '#5f2d16',
    textAlign: 'center',
    lineHeight: '100%',
    margin:'15px 0',
  };

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    margin: '15px 0',
    width: '100%',
  };

  const inputStyle = {
    flex: '1 1 30%',
    height: '36px',
    padding: '10px',
    border: '2.5px solid #5f2d16',
    borderRadius: '10px',
    fontSize: '15px',
    backgroundColor: '#F6E6A3',
  };

  const linkStyle = {
    fontFamily: 'Kanit',
    fontWeight: 700,
    fontSize: '16px',
    color: '#5f2d16',
    textAlign: 'center',
    lineHeight: '100%',
    margin: '10px 0'
  };

  const buttonStyle = {
    backgroundColor: '#786b3a',
    color: 'white',
    padding: '14px 20px',
    fontSize: '16px',
    fontFamily: 'Kanit',
    fontWeight: 700,
    margin: '20px 0',
    cursor: 'pointer',
    border:'none',

  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={titleStyle}>Crea una cuenta</div>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Nombre" style={{...inputStyle, flex: '1 1 40%'}} />
          <input type="text" placeholder="Apellido" style={{...inputStyle, flex: '1 1 40%'}} />
        </div>
        <div style={inputContainerStyle}>
          <input type="email" placeholder="Correo" style={inputStyle} />
          <input type="email" placeholder="Confirma correo" style={inputStyle} />
          <input type="text" placeholder="Teléfono" style={inputStyle} />
        </div>
        <div style={inputContainerStyle}>
          <input type="password" placeholder="Contraseña" style={{...inputStyle, flex: '9 1 40%'}} />
          <input type="password" placeholder="Confirma contraseña" style={{...inputStyle, flex: '9 1 40%'}} />
        </div>
        <div style={linkStyle}>Si ya tienes una cuenta, <span style={{ color: 'brown', cursor: 'pointer' }}>inicia sesión</span></div>
        <button style={buttonStyle}>Regístrate</button>
      </div>
    </div>
  );
};

export default SignUp; */




