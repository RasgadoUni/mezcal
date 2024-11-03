import Image from 'next/image';
import React from 'react';
import imagenbg from '../../../public/img/primera.jpg'
import { throwIfDisallowedDynamic } from 'next/dist/server/app-render/dynamic-rendering';
import Link from 'next/link';

const SignUpForm = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Image src={imagenbg} fill alt='fondo' style={{zIndex:'-1'}}></Image>
      <div
        style={{
          width: '700px',
          height: '350px',
          backgroundColor: '#f5e7be',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)'
        }}
      >
        <h1
          style={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            fontSize: '48px',
            textAlign: 'center',
            color: '#5f2d16ff',
            marginBottom: '20px'
          }}
        >
          Crea una cuenta
        </h1>

        <div
          style={{
            display: 'grid',
            gap: '10px',
            gridTemplateColumns: '1fr 1fr',
            marginBottom: '20px'
          }}
        >
          {[
            { placeholder: 'Nombre', type: 'text' },
            { placeholder: 'Apellido', type: 'text' },
            { placeholder: 'Correo', type: 'email' },
            { placeholder: 'Teléfono', type: 'text' },
            { placeholder: 'Contraseña', type: 'password' },
            { placeholder: 'Confirma contraseña', type: 'password' }
          ].map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              style={{
                padding: '10px',
                border: '2.5px solid #5f2d16ff',
                borderRadius: '10px',
                fontFamily: 'Kanit',
                fontWeight: 500,
                fontSize: '15px',
                backgroundColor: '#f5e7be',
                color: '#5F2D16',
                
              }}
            />
          ))}
        </div>
        <p
          style={{
            fontFamily: 'Kanit',
            fontWeight: 700,
            fontSize: '16px',
            textAlign: 'center',
            color: '#5f2d16ff',
            margin: '15px 0'
          }}
        >
          Si ya tienes una cuenta, <Link href='../cuenta'> <span style={{ color: '#e14d2aff', cursor: 'pointer' }}>inicia sesión</span></Link>
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
            <button
              style={{
                borderRadius: '10px',
                padding: '14px 30px',
                backgroundColor: '#786b3aff',
                color: '#ffffff',
                border: 'none',
                fontFamily: 'Kanit',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Regístrate
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;