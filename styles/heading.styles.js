import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginHorizontal: 12
    },
    header: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    headerTitle: {
        fontFamily: "bold",
        fontSize: 25,
        fontWeight: "bold", // Añade esta línea para establecer la negrita
        color: "#4e6b66"
    }
});

export default styles

