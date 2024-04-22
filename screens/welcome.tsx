import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/welcome.style";

const Welcome: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(10, "#ffff")}>
          {" "}
          Reserva ahora
        </Text>
        <Text style={styles.welcomeTxtt(5, "#ffff")}>
          {" "}
          ¡Tu diversión, a tu alcance!
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
