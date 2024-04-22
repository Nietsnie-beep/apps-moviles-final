import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { CreditCard } from '../components/creditCard';

type PackageType = {
  title: string;
  price: string;
};

export const Input = () => {
  
  const [name, setName] = useState<string>('');

  const [cardNumber, setCardNumber] = useState<string>('');

  const [expiryDate, setExpiryDate] = useState<string>('');

  const navigation = useNavigation<any>(); 

  const prices = [500, 1000, 2000, 2500];
  const packages: PackageType[] = prices.map((price, index) => ({
    title: `Paquete${index + 1}`,
    price: `$${price}`,
  }));

  const handlePackageSelect = async (packageSelected: PackageType) => {
    try {
      const visitId = 1; // Reemplaza con el valor real
      const qrCodeData = `${packageSelected.price}`;
      console.log(qrCodeData);
      const response = await axios.post(`https://mdch-charoo.5n7tjo.easypanel.host/registro_pago/`, {
        value: qrCodeData,
        estatus: 2,
        visit: 1,
      });
      const { qr_code } = response.data;
      console.log("qr", qr_code);
      navigation.navigate('QRCodeScreen', { qr_code: qr_code });
    } catch (error) {
      console.error("Error al enviar los datos del formulario: ", error);
    }
  };

  const handleExpiryDateChange = (text: string) => {
    let newText = text;
    if (text.length === 2 && expiryDate.length <= 2) {
      newText += '/';
    } else if (text.length === 2 && expiryDate.length === 3) {
      newText = text.slice(0, 1);
    }
    setExpiryDate(newText);
  };

  const renderItem = ({ item, index }: { item: PackageType; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.packageItem}
        onPress={() => handlePackageSelect(item)}
      >
        <Text style={styles.packageTitle}>{item.title}</Text>
        <Text style={styles.packageLabel}>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <Text style={styles.title}>Recargar Tarjeta</Text>
      <View style={{marginTop:30}}></View>
      <CreditCard name={name} cardNumber={cardNumber} expiryDate={expiryDate} />
     
      <View style={{ marginTop: 15 }}>
        <Text style={styles.label}>Nombre del Titular</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Juan Pérez"
          value={name}
          onChangeText={setName}
        />
      </View>
      
      <View style={{ marginTop: 5 }}>
        <Text style={styles.label}>Número de Tarjeta</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 1234 5678 9012 3456"
          value={cardNumber}
          keyboardType="numeric"
          onChangeText={setCardNumber}
        />
      </View>

      <View style={{ marginTop: 5 }}>
        <Text style={styles.label}>Fecha de Expiración</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/AA, Ej: 12/24"
          value={expiryDate}
          onChangeText={handleExpiryDateChange}
          keyboardType="numeric"
          maxLength={5}
        />
      </View>
      <View style={{marginTop:20}}></View>

      <Carousel
        data={packages}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={200}
        layout={'default'}
      />
      
      <View style={{marginTop:20}}></View>
      <View style={{marginTop:20}}></View>
      <View style={{marginTop:20}}></View>
      
      <View style={{marginTop:20}}></View>
      
      <View style={{marginTop:20}}></View>
      
      <View style={{marginTop:20}}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    color: '#121212',
    fontSize: 20,
  },
  label: {
    marginLeft: 20,
    marginBottom: 5,
    fontFamily: 'Lato-Regular',
    color: '#121212',
    fontSize: 16,
  },
  input: {
    height: 50, // Altura más grande para mejor toque
    marginHorizontal: 20,
    marginTop: 15,
    paddingHorizontal: 15, // Padding horizontal para el texto dentro del input
    borderWidth: 0, // Sin bordes
    backgroundColor: '#f2f2f2', // Un fondo suave
    borderRadius: 25, // Bordes redondeados
    fontSize: 16, // Tamaño de fuente más grande para mejor legibilidad
    fontFamily: 'Lato-Regular', // Asegúrate de tener esta fuente o cámbiala por una que tengas
    color: '#333', // Color de texto oscuro para contraste
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Color de sombra para iOS
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de sombra para iOS
    shadowOpacity: 0.1, // Opacidad de sombra para iOS
    shadowRadius: 3.5, // Radio de sombra para iOS
  },
  packageItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  packageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  packageLabel: {
    fontSize: 14,
  },
});