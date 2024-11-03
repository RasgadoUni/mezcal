import React from 'react';

const TraditionComponent = () => {
    return (
        <div style={styles.container}>
            <Title />
            <Description />
            <ImageGallery />
        </div>
    );
};

const Title = () => {
    return (
        <h1 style={titleStyles.title}>
            Una tradición familiar,<br /> en un mercado global
        </h1>
    );
};

const titleStyles = {
    title: {
        color: '#786b3a',
        fontFamily: 'Playfair Display, serif',
        fontWeight: 500,
        fontSize: '64px',
        lineHeight: '100%',
        textAlign: 'center',
        marginBottom: '20px',
    }
};

const Description = () => {
    return (
        <p style={descriptionStyles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque augue, porttitor eget turpis sed, tincidunt vestibulum risus. In hac habitasse platea dictumst. Vivamus at tellus tristique, lacinia sapien vel, convallis sapien. Nullam mollis posuere lectus, at porta nisl ornare sit amet. Proin consequat, massa blandit scelerisque viverra, neque erat vulputate est, at viverra elit lorem sit amet nunc. Vestibulum mauris purus, placerat at porttitor faucibus, hendrerit rhoncus ipsum. Aenean ac ullamcorper diam.
        </p>
    );
};

const descriptionStyles = {
    paragraph: {
        width: '1307px',
        color: '#786b3a',
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 400,
        fontSize: '27px',
        lineHeight: '1',
        textAlign: 'justify',
        marginBottom: '20px',
    }
};

const ImageGallery = () => {
    return (
        <div style={imageGalleryStyles.container}>
            <img 
                src="https://placeholder.pics/svg/355x263" 
                alt="Image 1" 
                style={imageGalleryStyles.image}
            />
            <img 
                src="https://placeholder.pics/svg/352x263" 
                alt="Image 2" 
                style={imageGalleryStyles.image}
            />
            <img 
                src="https://placeholder.pics/svg/352x263" 
                alt="Image 3" 
                style={imageGalleryStyles.image}
            />
        </div>
    );
};

const imageGalleryStyles = {
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    image: {
        width: '352px',
        height: '263px',
    },
};

const styles = {
    container: {
        padding: '50px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default TraditionComponent;
