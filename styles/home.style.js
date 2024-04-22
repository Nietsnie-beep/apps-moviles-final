import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    textStyle: { 
        fontFamily: "bold",
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: 25
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    location: {
        fontFamily: "semibold",
        fontSize:20,
        color: '#FFFFFF',
    },
    carCount: {
        position: "absolute",
        bottom:20,
        width: 20,
        height: 20,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#00913f",
        justifyContent: "center",
        zIndex:999
    },
    cartNumber: {
        fontFamily:"regular",
        fontWeight: "500",
        fontSize: 12,
        color: "#ffff"
    },
})

export default styles