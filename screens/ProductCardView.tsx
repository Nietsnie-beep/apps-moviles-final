import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from '../styles/productCard.style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';

type ProductStackParamList = {
    DetailAtraction: {
        id: Number;
        title: string;
        supplier: string;
        price: string;
        imageUrl: string;
    };
    // other screens can be added here
};

type ProductCardNavigationProp = StackNavigationProp<ProductStackParamList, 'DetailAtraction'>;

interface ProductCardProps {
    id: Number;
    title: string;
    supplier: string;
    price: string;
    imageUrl: string;
    
    navigation: ProductCardNavigationProp;
}

const ProductCardView: React.FC<ProductCardProps> = (props) => {
    
    const navigation = useNavigation<ProductCardNavigationProp>();

    const handlePress = () => {
        navigation.navigate('DetailAtraction', {
            id: props.id,
            title: props.title,
            supplier: props.supplier,
            price: props.price,
            imageUrl: props.imageUrl    
        });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{ uri: props.imageUrl }}
                        style={styles.image}
                    />
                </View>
                
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        {props.title}
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                        {props.supplier}
                    </Text>
                    <Text style={styles.price}>{props.price}</Text>
                </View>

                <TouchableOpacity style={styles.addbtn} onPress={handlePress}>
                    <Icon name="pluscircle" size={30} color="#212121" />     
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default ProductCardView;
