"use client"; // Asegúrate de que esta línea esté en la parte superior

import Image from 'next/image';
import React, { useState } from 'react';
import imagenbg from '../../../public/img/primera.jpg';
import beche from '../../../public/img/Bechee.jpg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
   

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!correo || !contrasena) {
      setError('Por favor, completa todos los campos.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contrasena }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data); // Verifica el resultado
        localStorage.setItem('loggedIn', 'yes'); // Guarda en localStorage el estado de inicio de sesión
        router.push('../principal'); // Redirige a la página deseada
      } else {
        const data = await response.json();
        setError(data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError('Error al conectar con el servidor');
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image src={imagenbg} fill alt='agave' />
      <div style={{ width: '540px', height: '370px', backgroundColor: '#f5e7be', padding: '20px', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)', position: 'relative' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '48px', textAlign: 'center', color: '#5f2d16ff', marginBottom: '20px' }}>
          Inicia Sesión
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{
              padding: '10px',
              border: '2.5px solid #5f2d16ff',
              borderRadius: '10px',
              fontFamily: 'Kanit',
              fontWeight: 500,
              fontSize: '15px',
              backgroundColor: '#f5e7be',
              color: '#5F2D16',
              width: '300px',
              margin: '15px',
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            style={{
              padding: '10px',
              border: '2.5px solid #5f2d16ff',
              borderRadius: '10px',
              fontFamily: 'Kanit',
              fontWeight: 500,
              fontSize: '15px',
              backgroundColor: '#f5e7be',
              width: '300px',
              color: '#5F2D16',
              margin: '15px',
            }}
          />
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <Image src={beche} style={{ width: '175px', height: '219px', position: 'absolute', right: '35px', top: '80px', borderRadius: '10px' }} alt='agave' />
          <p style={{ fontFamily: 'Kanit', fontWeight: 700, fontSize: '16px', textAlign: 'center', color: '#5f2d16ff', margin: '35px 0 10px 0 ' }}>
            Si todavía no tienes cuenta, <Link href='../sesion'><span style={{ color: '#e14d2aff', cursor: 'pointer' }}>crea una</span></Link>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
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
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;


