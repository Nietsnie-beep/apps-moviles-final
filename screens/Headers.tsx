import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
 // Importa el componente Ionicons
import styles from '../styles/heading.styles';
import { RiLayoutGridFill } from "react-icons/ri";

const Headers: React.FC = () => {


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Nuevos Eventos
          </Text>
          <TouchableOpacity>
          <RiLayoutGridFill size={100}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Headers
