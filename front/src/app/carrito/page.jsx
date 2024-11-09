import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import Produc from "../components/VentaProducto";

// Component for each item in the shopping cart
const ShoppingCartItem = () => {
  return (
    <div style={styles.shoppingCartItem}>
      <img src="https://placeholder.pics/svg/100x150" alt="Product" style={styles.productImage} />
      <div style={styles.productInfo}>
        <h2 style={styles.productName}>Mezcal Espadín</h2>
        <p style={styles.productSize}>Tamaño: 750ml</p>
        <p style={styles.productPrice}>$1000.00 mxn</p>
      </div>
      <div style={styles.quantityControl}>
        <button style={styles.quantityButton}>-</button>
        <input type="text" value="1" readOnly style={styles.quantityInput} />
        <button style={styles.quantityButton}>+</button>
      </div>
      <img src="../../../public/img/basura.svg" alt="basura" />
    </div>
  );
};

// Component for entering payment details
const PaymentDetails = () => {
  return (
    <div style={styles.paymentDetails}>
      <h2 style={styles.sectionTitle}>Datos de pago</h2>
      <hr style={styles.divider} />
      <div>
        <label style={styles.label}>Nombre de la tarjeta</label>
        <input type="text" placeholder="Nombre" style={styles.input} />
      </div>
      <div>
        <label style={styles.label}>Número de la tarjeta</label>
        <input type="text" placeholder="0000 0000 0000 0000" style={styles.input} />
      </div>
      <div style={styles.paymentRow}>
        <div>
          <label style={styles.label}>Fecha</label>
          <input type="text" placeholder="12/24" style={styles.input} />
        </div>
        <div>
          <label style={styles.label}>CVV</label>
          <input type="text" placeholder="123" style={styles.input} />
        </div>
      </div>
      <div style={styles.costDetails}>
        <label style={styles.label}>Subtotal</label>
        <p style={styles.summaryText}>$1500 mxn</p>
      </div>
      <div style={styles.costDetails}>
        <label style={styles.label}>Envío</label>
        <p style={styles.summaryText}>+ $150</p>
      </div>
      <div style={styles.costDetails}>
        <label style={styles.label}>Total</label>
        <p style={styles.totalText}>$1650 mxn</p>
      </div>
    </div>
  );
};

const ShippingDetails = () => {
  return (
    <div style={styles.shippingDetails}>
      <h2 style={styles.sectionTitle}>Datos de envío</h2>
      <hr style={styles.divider} />
      <div><label style={styles.label}>Dirección</label><input type="text" style={styles.input} /></div>
      <div><label style={styles.label}>Dirección 2</label><input type="text" style={styles.input} /></div>
      <div style={styles.paymentRow}>
        <div><label style={styles.label}>Ciudad</label><input type="text" style={styles.input} /></div>
        <div><label style={styles.label}>Estado</label><input type="text" style={styles.input} /></div>
      </div>
      <div><label style={styles.label}>Código postal</label><input type="text" style={styles.input} /></div>
    </div>
  );
};

const CheckoutButton = () => {
  return (
    <button style={styles.checkoutButton}>Finalizar compra</button>
  );
};




// Main Checkout Page component
const CheckoutPage = () => {
  return (
    <div style={styles.mainContainer}>
      <Header /> 

      <div style={styles.contentContainer}>
        <div style={styles.leftColumn}>
          <h1 style={styles.cartTitle}>Carrito de compras</h1>
          <hr style={styles.cartDivider} />
          <Produc />
        </div>

        <div style={styles.rightColumn}>
          <PaymentDetails />
          <ShippingDetails />
          <CheckoutButton />
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Styles for components
const styles = {
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    display: 'flex',
    padding: '40px',
    gap: '40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  leftColumn: {
    flex: '1',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor:'#C9B469',
    alingItems:'center',
  },
  cartTitle: {
    color: '#5f2d16',
    fontFamily: 'Playfair Display',
    fontSize: '36px',
    marginBottom: '20px',
  },
  paymentDetails: {
    
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  shippingDetails: {
    
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  sectionTitle: {
    color: '#5f2d16',
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
    marginBottom: '10px',
  },
  divider: {
    backgroundColor: '#5f2d16',
    height: '1px',
    border: 'none',
    margin: '10px 0',
  },
  label: {
    display: 'block',
    color: '#5f2d16',
    fontFamily: 'Kanit, sans-serif',
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#786B3A',
    color: '#F1E8E0',
    fontFamily: 'Kanit, sans-serif',
    fontSize: '16px',
    textColor: '#F1E8E0',
  },
  paymentRow: {
    display: 'flex',
    gap: '10px',
  },
  costDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  summaryText: {
    color: '#5f2d16',
    fontFamily: 'Kanit, sans-serif',
    fontSize: '16px',
  },
  totalText: {
    color: '#5f2d16',
    fontFamily: 'Kanit, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  checkoutButton: {
    width: '80%',
    padding: '15px',
    
    color: '#5F2D16',
    fontFamily: 'Kanit, sans-serif',
    fontSize: '18px',
    borderRadius: '8px',
    backgroundColor:'#F1E8E0',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CheckoutPage;
