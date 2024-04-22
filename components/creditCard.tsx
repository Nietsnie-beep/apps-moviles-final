import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Importa LinearGradient

interface CreditCardProps {
  name: string;
  cardNumber: string;
  expiryDate: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({ name, cardNumber, expiryDate }) => {
    return (
      // Usa LinearGradient en lugar de View para el contenedor
      <LinearGradient
        // Define los colores del degradado aquí
        colors={['#7A3DDB', '#140436']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <View style={styles.cardHeader}>
              <View style={styles.microship}>
                  <MaterialCommunityIcons 
                  name='integrated-circuit-chip'
                  color='#FFFF00'
                  size={40}
                  />
              </View>
              <View style={styles.cardType}>
                  <Fontisto name='visa' color={"#fff"} size={33} />
              </View>
          </View>
          <View style={styles.cardCenter}>
              {cardNumber.split(' ').map((group, index) => (
                <Text key={index} style={styles.cardNumber}>{group}</Text>
              ))}
          </View>
          <View style={styles.cardFooter}>
              <View style={styles.cardHolder}>
                  <Text style={styles.textMedium}>{name}</Text>
              </View>
              <View>
                  <Text style={styles.textMedium}>{expiryDate}</Text>
              </View>
          </View>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        height: 200,
        borderRadius: 20,
    },
    cardHeader:{
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    microship: {
        // Estilos específicos para el microchip si se requieren
    },
    cardType: {
        // Estilos específicos para el tipo de tarjeta si se requieren
    },
    cardCenter:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: "80%",
    },
    cardNumber:{
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        color: '#FFFFFF',
        fontSize: 20,
    },
    cardFooter:{
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardHolder:{
        // Estilos específicos para el titular de la tarjeta si se requieren
    },
    textMedium:{
        color: "#ffffff",
        fontFamily: "Lato-Bold",
        fontSize: 15,
        textTransform: 'uppercase',
    },
});
