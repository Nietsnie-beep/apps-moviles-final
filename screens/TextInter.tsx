import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../styles/heading.styles';

const Headings: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Eventos Nuevos  
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('listAtracctions' as never)}>

          <Icon name="grid" size={40} color="#70b422" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Headings;
