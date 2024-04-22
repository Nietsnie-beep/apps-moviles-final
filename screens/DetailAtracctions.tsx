import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { API_HOST } from '../utils/api';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


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

type DetailScreenRouteProp = RouteProp<ProductStackParamList, 'DetailAtraction'>;

type Props = {
    route: DetailScreenRouteProp;
};




const DetailAtracctions: React.FC<Props> = ({ route }) => {
    const { id, title, supplier, price, imageUrl } = route.params;


    const navigation = useNavigation<any>();
    
    console.log("applicacion",id);
    
    const handleClick = async () => {

                // Datos fijos que serán enviados
                const data = {
                    cantidad_personas: 5,  // Ejemplo de dato fijo
                    usuario: 1,  // Ejemplo de dato fijo
                    evento: 1,  // Ejemplo de dato fijo
                    atraccion: id  // Ejemplo de dato fijo
                };
        
        try {
          const response = await axios.post(`${API_HOST}/reservas/`,data);
          console.log('Respuesta del servidor:', response.data);
          navigation.navigate('Reserve', { registroId: response.data.id });
        } catch (error) {
          console.error('Hubo un error al enviar la petición:', error);
        }
    }

    console.log('nuevo', id);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.backgroundImageContainer}>
                <ImageBackground style={styles.backgroundImage} source={{ uri: imageUrl }}>
                    <View style={styles.header}>
                        <View style={styles.headerBtn}>
                            <Icon name='arrow-back' size={20} />

                        </View>

                        <View style={styles.headerBtn}>
                            <Icon name='arrow-back' size={20} style={{ color: '#040A48' }} />

                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.virtualTag}>
                    <Text style={{ color: '#FFFDFF' }} >Reserve</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {title}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.raitingTag}>
                            <Text style={{ color: '#ffff' }}>
                                5.0
                            </Text>
                        </View>
                        <Text style={{ fontSize: 13, marginLeft: 5 }}>
                            155 raitings
                        </Text>
                    </View>
                </View>
                <Text>
                    {title}
                </Text>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>

                    <View style={styles.facility}>

                        <Icon name='hotel' size={18} />
                        <Text style={styles.facilityText}>2</Text>
                    </View>

                    <View style={styles.facility}>

                        <Icon name='person' size={18} />
                        <Text style={styles.facilityText}>2</Text>
                    </View>

                    <View style={styles.facility}>

                        <Icon name='hotel' size={18} />
                        <Text style={styles.facilityText}>2</Text>
                    </View>
                </View> 
                <Text style={{marginTop:20, color:'#9b9b9b' }}>
                    {supplier}
                </Text>
                
            </View>
            <Button title="Reservar" onPress={handleClick} /> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        height: 350,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: '#FFFDFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    virtualTag: {
        top: -20,
        width: 120,
        backgroundColor: '#0f0f0f',
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40,
    },

    raitingTag: {
        height: 30,
        width: 35,
        backgroundColor: '#040a48',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facility: {
       flexDirection: 'row',
       marginRight:15
    },
    facilityText:
        { marginLeft: 5, color: '#272727' },
});

export default DetailAtracctions;
