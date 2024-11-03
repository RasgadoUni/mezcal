import Image from 'next/image';
import imagenbg from '../../../public/img/primera.jpg'
import beche from '../../../public/img/Bechee.jpg';
import { throwIfDisallowedDynamic } from 'next/dist/server/app-render/dynamic-rendering';
import Link from 'next/link';

const SignInForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Image src={imagenbg} fill alt='agave'/>
      <div
        style={{
          width: '540px',
          height: '370px',
          backgroundColor: '#f5e7be',
          padding: '20px',
          boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
          position: 'relative'
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
          Inicia Sesión
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '20px'
          }}
        >
          <input
            type="email"
            placeholder="Correo"
            style={{
              padding: '10px',
              border: '2.5px solid #5f2d16ff',
              borderRadius: '10px',
              fontFamily: 'Kanit',
              fontWeight: 500,
              fontSize: '15px',
              backgroundColor: '#f5e7be',
              color:'#5F2D16',
              width: '300px',
              margin: '15px',
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            style={{
              padding: '10px',
              border: '2.5px solid #5f2d16ff',
              borderRadius: '10px',
              fontFamily: 'Kanit',
              fontWeight: 500,
              fontSize: '15px',
              backgroundColor: '#f5e7be',
              width: '300px',
              color:'#5F2D16',
              margin: '15px',
            }}
          />
        </div>

        <Image src={beche} style={{width: '175px',
            height: '219px',
            position: 'absolute',
            right: '35px',
            top: '80px',
            borderRadius: '10px'}} alt='agave'/>

        <p
          style={{
            fontFamily: 'Kanit',
            fontWeight: 700,
            fontSize: '16px',
            textAlign: 'center',
            color: '#5f2d16ff',
            margin: '35px 0 10px 0 '
          }}
        >
          Si todavía no tienes cuenta, <Link href='../sesion'> <span style={{ color: '#e14d2aff', cursor: 'pointer' }}>crea una</span></Link>
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

export default SignInForm;
