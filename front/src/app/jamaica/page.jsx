import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import Image from "next/image";
import mezcal from "../../../public/img/Mezcales.jpg";
import mango from "../../../public/img/JAMAICA-ROMERO.nobg.png";

function coctel() {
    return(
        <div>
            <Header/>
            <Image src={mezcal} style={{width:'100%', height:'auto'}} alt="Mezcales"/>
            <JamaicaRomero/>
            <Footer/>
        </div>
    );
}

export default coctel;


const JamaicaRomero = () => {
  // Style definitions
  const styles = {
    container: {
      display: 'flex',
      fontFamily: 'Kanit, sans-serif',
      color: '#786b3a',
      padding: '20px',
      flexWrap: 'wrap',
    },
    image: {
      flex: '1',
    },
    info: {
      flex: '2',
      paddingLeft: '20px',
    },
    title: {
      fontSize: '48px',
      marginBottom: '10px',
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      color: '#786b3a',
    },
    sectionTitle: {
      color: '#5f2d16',
      fontSize: '40px',
      marginBottom: '5px',
      fontWeight: 700,
      fontFamily: 'Playfair Display, serif',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '100%',
    },
  };

  // Component rendering
  return (
    <div style={styles.container}>
      <div style={styles.image}>
        <Image 
          src={mango} 
          alt="Mango cardamomo Drink" 
          width="500" 
          height="auto"
        />
      </div>
      <div style={styles.info}>
        <div style={styles.title}>Mango Cardamomo</div>
        <div>
          <div style={styles.sectionTitle}>Ingredientes</div>
          <ul style={styles.list}>
            <li>1.5 Oz de Mezcal Beché Espadín-Tobalá</li>
            <li>Agua de Hibisco con Romero
              <ul>
                <li>4 tazas de agua (para 4 cócteles)</li>
                <li>1 ramita grande de romero</li>
                <li>½ taza de jarabe simple</li>
              </ul>
            </li>
            <li>Guarnición
              <ul>
                <li>Borde de romero fresco y sal.</li>
              </ul>
            </li>
          </ul>
          <div style={styles.sectionTitle}>Instrucciones</div>
          <ul style={styles.list}>
           <li>Prepare agua de hibisco combinando agua, ramita de romero y azucarero en una cacerola y hierva durante 5 minutos; cuele y deje enfriar.</li>
           <li>Salar el borde de un vaso old fashioned.</li>
           <li>Añade hielo, Beché y el agua de hibisco; mezcla.</li>
           <li>Decorar con romero y disfrutar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

