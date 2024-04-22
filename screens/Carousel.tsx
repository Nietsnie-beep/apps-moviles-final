import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/carousel.style';
import { SliderBox } from 'react-native-image-slider-box';

const Carousel: React.FC = () => {
    const slides = [
        'https://img.rezdy.com/PRODUCT_IMAGE/54415/six_flags_mexico_lg.jpg',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKRre1_KmAuQBEmwb0LJuiF2f5h1adRYFRC7QaAHn_w&s',

      
    ];

    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor="#202124"
                inactiveColor="#ffffff"
                ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 15 }}
                autoplay
                circleLoop
            />
        </View>
    );
};

export default Carousel;
