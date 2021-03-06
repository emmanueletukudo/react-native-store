import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from "./screens/";

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  }
}


const Stack = createStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} options={{title: "PRODUCT BASKET"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}