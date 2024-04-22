import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginRight: 10,
        marginLeft: 10,
        marginTop:15,
        marginEnd: 22,
        borderRadius: 25,
        backgroundColor: '#70B422'
    },
    imageContainer: {
        FileSystemFileEntryex: 1,
        width: 170,
        marginLeft: 6,
        marginTop: 10,
        borderRadius: 25,
        overflow: 'hidden',
    },
    image: {
        aspectRatio:1,
        resizeMode: 'cover'
    },
    details:{
        padding: 15,
    },
    title:{
        fontFamily: "bold",
        fontSize: 25,
        marginBottom:1
    },

    supplier:{
        fontFamily: "regular",
        fontSize: 15,
        color: '#9b9b9b'
    },

    price:{
        fontFamily: "bold",
        fontSize: 15
    },
    addbtn:{
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
    
});

export default styles;