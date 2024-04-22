import { ImageBackground, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Card from "./Card";
import styles from "../styles/home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Welcome from "./welcome";
import Carousel from "./Carousel";
import Headers from "./TextInter";
import ProductRow from "./ProductRow";

const Home = () => {

  return (
    
    <ImageBackground
      source={require('../assets/img/background.png')}
      style={{ width: '100%', height: '100%' }}
    >

      <SafeAreaView>

        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>

            <Ionicons name="location-outline" size={24} color={"#FFFFFF"}/>
            <Text style={styles.location}>Mexico</Text>

            <View style={{ alignItems: "flex-end" }}>
              <View style={styles.carCount}>
                <Text style={styles.cartNumber}>8</Text>
              </View>
              <TouchableOpacity>
                <Fontisto name="shopping-bag" size={30} color={"#FFFFFF"}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>

          <Welcome />
          <Carousel />
          <Headers />
          <ProductRow />

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home
