import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Home from './screens/Home';
import { Input } from './screens/Input';
import ListAtracctions from './screens/ListAtracctions';
import DetailAtracctions from './screens/DetailAtracctions';
import Reserve from './screens/Reserve';
// import ExtraRoute from './screens/ExtraRoute';

type TabParamList = {
  Home: undefined;
  Input: undefined;
  screen2: undefined;
  listAtracctions: undefined;
  DetailAtraction: undefined;
};



const Tab = createBottomTabNavigator<TabParamList>();

const Stack = createStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  },
};  

const MainTabNavigator = () => {
  
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? '#1E90FF' : 'black'} />
          ),
         
           headerShown: false 
        }}
      />
 
 <Tab.Screen
        name="listAtracctions"
        component={ListAtracctions} // Componente nulo para no renderizar nada
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="list" size={24} color={focused ? '#1E90FF' : 'black'} />
          ),
          tabBarButton: () => null, // Oculta el botón de la pestaña
          headerShown: false 
       
        }}
      />


      <Tab.Screen
        name="Input"
        component={Input}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="credit-card-alt" size={24} color={focused ? '#1E90FF' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="screen2"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? '#1E90FF' : 'black'} />
          ),

        }}
      />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        {/* <Stack.Screen name="ExtraRoute" component={ExtraRoute} options={{ headerShown: false }} /> */}
        <Stack.Screen name="listAtracctions" component={ListAtracctions} options={{ headerShown: false }} />

        <Stack.Screen name="DetailAtraction" component={DetailAtracctions} options={{ headerShown: false }} />
        <Stack.Screen name="Reserve" component={Reserve} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
