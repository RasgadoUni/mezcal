import Link from "next/link";

const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#786B3A',
      color: '#f1e8e0',
      padding: '20px',
      fontFamily: 'Kanit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  }}>
      <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          alignItems: 'flex-start'
      }}>
          <div style={{
              fontFamily: 'Playfair Display',
              fontSize: '38px',
              fontWeight: '743',
              letterSpacing: '2.28px',
              fontStyle: 'italic',
              textAlign: 'left',
              color: '#eeeae8',
              marginRight: '20px',
              
          }}>
              DESTILADOS<br/>SOLMIRA
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: 1
          }}>
              <div>
                  <div style={{ fontWeight: '900', fontSize: '24px' }}>Términos y condiciones</div>
                  <div>Políticas de Privacidad</div>
                  <div>Términos de Servicio</div>
              </div>
              <div>
                  <div style={{ fontWeight: '900', fontSize: '24px' }}>Contacto</div>
                  <div>+55 961 000 0000</div>
                  <div style={{ textDecoration: 'underline' }}>correo@mail.com</div>
                  <div style={{marginTop:'10px'}}>
                      <img src="./img/face.svg" alt="face" style={{ width: '25px', height: '25px', marginRight: '10px'}}/>
                      <img src="./img/insta.svg" alt="insta" style={{ width: '25px', height: '25px' }} />
                  </div>
              </div>
              <div>
                  <div style={{ fontWeight: '900', fontSize: '24px' }}>Menú</div>
                  <Link href="../principal">
                    <div>Inicio</div>
                  </Link>
                  <Link href='../nosotros'>
                    <div>Nosotros</div>
                  </Link>
                  <div>Productos</div>
                  <div>Cócteles</div>
                  <div>Blog</div>
              </div>
          </div>
      </div>
      <hr style={{ width: '90%', margin: '20px 0', borderColor: '#f1e8e0' }} />
      <div style={{ fontSize: '11px', textAlign: 'center', fontWeight: '900', fontFamily: 'Kanit', color: '#ffffff' }}>
          COPYRIGHT © 2024 Destilados Solmira, Oaxaca, México<br />
          No compartir a menores de 18 años, evite el exceso
      </div>
  </div>
  );
};

export default Footer;
