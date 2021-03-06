import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { COLORS } from "../constants";


const Home = () => {
    return (
        <View style={style.container}>
            <Text>Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    }
})

export default Home;