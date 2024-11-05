import Link from 'next/link';
/* import { usePathname } from 'next/navigation';
import { useState } from 'react'; */
import Image from 'next/image';
const Header = () => {
  /* const pathname = usePathname();
  const [isLayoutPage, setIsLayoutPage] = useState(false)
  if (pathname == "/"){
    setIsLayoutPage(true)
  } */
  return (
    
      
    
    <div style={{
      width: '100%',
      height: '114px',
      display: 'flex' ,
      
      alignItems: 'center',
       justifyContent: 'center',
      /* justifyContent: 'space-evenly',  */
      backgroundColor: '#f4f1ef',
      
    }}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start'}}>
        <Link href="../nosotros"><span style={{ font: '700 1.3rem Kanit', color: '#786b3a' }}>Nosotros</span></Link>
        <span style={{ font: '700 1.3rem Kanit', color: '#786b3a' }}>Productos</span>
        <span style={{ font: '700 1.3rem Kanit', color: '#786b3a' }}>Cócteles</span>
      </div>
      <div style={{ textAlign: 'center', justifyContent:'center',}}>
        <Link href='../principal'> 
          <h1 style={{
            font: 'italic 743 38px/100% Playfair Display',
            color: '#786b3a',
            letterSpacing: '2.28px',
            textTransform: 'uppercase',
            flex: 'start',
            position: 'center',
          }}>DESTILADOS<br/>SOLMIRA</h1>
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent:'flex-end',}}>
        <span style={{ font: '700 20px Kanit', color: '#786b3a' }}>Blo</span>
        <Link href="../detallePedido">
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
