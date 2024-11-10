import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import Image from "next/image";
import mezcal from "../../../public/img/Mezcales.jpg";
import horchata from "../../../public/img/horchataCanela-nobg.png";

function coctel() {
    return(
        <div>
            <Header/>
            <Image src={mezcal} style={{width:'100%', height:'auto'}} alt="Mezcales"/>
            <HorchataCanela/>
            <Footer/>
        </div>
    );
}

export default coctel;


const HorchataCanela = () => {
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
          src={horchata} 
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
            <li>Agua de horchata de canela
              <ul>
                <li>4 tazas de agua (para 4 cócteles)</li>
                <li>Concentrado de horchata de 3 1/3 oz</li>
                <li>½ cucharadita de canela</li>
              </ul>
            </li>
            <li>Decoración
              <ul>
                <li>Orejas de conejo con hojas de piña y rama de canela.</li>
              </ul>
            </li>
          </ul>
          <div style={styles.sectionTitle}>Instrucciones</div>
          <ul style={styles.list}>
           <li>Mezcle los ingredientes del agua de horchata con canela.</li>
           <li>Llene un vaso old fashioned con hielo</li>
           <li>Añade el mezcal Beché</li>
           <li>Completar con el agua de horchata de canela, mezclar y disfrutar.</li>
           <li>Decorar con orejas de conejo y una rama de canela.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

