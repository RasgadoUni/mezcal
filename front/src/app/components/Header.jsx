import Link from 'next/link';

const Header = () => {
  return (
    <div style={{
      width: '100%',
      height: '114px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f4f1ef',
      padding: '0 20px', // Espaciado lateral
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      {/* Enlaces de la izquierda */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="../nosotros"><span style={{ font: '700 1.3rem Kanit', color: '#786b3a' }}>Nosotros</span></Link>
        <Link href="../Productos"><span style={{ font: '700 1.3rem Kanit', color: '#786b3a' }}>Productos</span></Link>
        <Link href="../Recetas"><span style={{ font: '700 1.3rem Kanit', color: '#786b3a' }}>Cócteles</span></Link>
      </div>

      {/* Título centrado completamente */}
      <div style={{ 
        position: 'absolute', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        textAlign: 'center' 
      }}>
        <Link href="/principal"> 
          <h1 style={{
            font: 'italic 743 38px/100% Playfair Display',
            color: '#786b3a',
            letterSpacing: '2.28px',
            textTransform: 'uppercase',
            margin: 0
          }}>DESTILADOS<br />SOLMIRA</h1>
        </Link>
      </div>

      {/* Enlaces de la derecha */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        
        <Link href="../carrito">
          <img src="./img/shoping.svg" alt="shopping bag" style={{ width: '31px', height: '31px' }} />
        </Link>
        <Link href="../sesion">
          <img src="./img/user.svg" alt="user" style={{ width: '31px', height: '31px' }} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
