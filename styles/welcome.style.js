import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    welcomeTxt:(top, color) => ({
        fontFamily: "bold",
        fontWeight: "900",
        fontSize: 35,
        marginTop: top,
        // color: "#0f0f0f",
        color: color,
        marginHorizontal: 12,
        borderColor: '#9b9b9b'  
    }),
    welcomeTxtt:(top, color) => ({
        fontFamily: "bold",
        fontWeight: "700",
        fontSize: 28,
        marginTop: top,
        // color: "#0f0f0f",
        color: color,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection:"row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor:"#0649bd",
        borderRadius:20,
        marginVertical: 30,
    },

});

export default styles;