import React from 'react';
import Image from 'next/image';
import Oax from '../../../public/img/oaxaca.jpg';

const DesignComponent = () => {
    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.contentWrapper}>
                <Image src={Oax} style={{width: '360px',
                height: '400px', margin: '20px'}} alt='Oax'/>
                <ContentText />
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div style={headerStyles.headerContainer}>
            <h1 style={headerStyles.title}>Mezcal con auténticas raíces mexicanas</h1>
        </div>
    );
};

const headerStyles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '77px',
        width: '585px',

        margin: '0 auto', // Centering the header
        marginBottom: '20px'
    },
    title: {
        color: '#eeeae8',
        fontFamily: 'Playfair Display, serif',
        fontWeight: 500,
        fontSize: '48px',
        lineHeight: '100%',
        textAlign: 'center',
    }
};



const ContentText = () => {
    const styles = {
        paragraph: {
            width: '809px',
            color: '#fff',

            fontFamily: 'Kanit, sans-serif',
            fontWeight: 400,
            fontSize: '27px',
            lineHeight: '1',
            textAlign: 'justify',
            padding: '10px',
        },
    };

    return (
        <div style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque augue, porttitor eget turpis sed, tincidunt vestibulum risus. In hac habitasse platea dictumst. Vivamus at tellus tristique, lacinia sapien vel, convallis sapien. Nullam mollis posuere lectus, at porta nisl ornare sit amet. Proin consequat, massa blandit scelerisque viverra, neque erat vulputate est, at viverra elit lorem sit amet nunc. Vestibulum mauris purus, placerat at porttitor faucibus, hendrerit rhoncus ipsum. Aenean ac ullamcorper diam.
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#857c53',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        maxWidth: '1200px',
    }
};

export default DesignComponent;
