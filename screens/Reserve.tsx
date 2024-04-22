import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';  // Importa el componente QRCode

type RootStackParamList = {
    Home: undefined;
    Details: { registroId: number };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
    route: DetailsScreenRouteProp;
};

const Reserve: React.FC<Props> = ({ route }) => {
    const { registroId } = route.params;

    return (
        <View style={styles.container}>
            <Text style={{marginBottom:20}}> Registro De Reserva: {registroId}</Text>
            {/* Genera y muestra el código QR basado en registroId */}
            <QRCode
                value={registroId.toString()}
                size={200}  // Tamaño del QR, puedes ajustarlo a tus necesidades
                color="black"
                backgroundColor="white"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default Reserve;
