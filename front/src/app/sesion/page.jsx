"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import imagenbg from '../../../public/img/primera.jpg';
import Link from 'next/link';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: '',
    confirmaContrasena: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones simples
    if (formData.contrasena !== formData.confirmaContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Usuario creado:', result);
      } else {
        console.error('Error al crear el usuario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image src={imagenbg} fill alt='fondo' style={{ zIndex: '-1' }} />
      <div style={{ width: '700px', height: '350px', backgroundColor: '#f5e7be', borderRadius: '10px', padding: '20px', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '48px', textAlign: 'center', color: '#5f2d16ff', marginBottom: '20px' }}>
          Crea una cuenta
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr', marginBottom: '20px' }}>
          {[
            { name: 'nombre', placeholder: 'Nombre', type: 'text' },
            { name: 'apellido', placeholder: 'Apellido', type: 'text' },
            { name: 'correo', placeholder: 'Correo', type: 'email' },
            { name: 'telefono', placeholder: 'Teléfono', type: 'text' },
            { name: 'contrasena', placeholder: 'Contraseña', type: 'password' },
            { name: 'confirmaContrasena', placeholder: 'Confirma contraseña', type: 'password' }
          ].map((input, index) => (
            <input
              key={index}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
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
          <p style={{ fontFamily: 'Kanit', fontWeight: 700, fontSize: '16px', textAlign: 'center', color: '#5f2d16ff', margin: '15px 0' }}>
            Si ya tienes una cuenta, <Link href='../cuenta'><span style={{ color: '#e14d2aff', cursor: 'pointer' }}>inicia sesión</span></Link>
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
              Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
