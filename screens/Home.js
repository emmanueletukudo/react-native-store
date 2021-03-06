import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { images, COLORS, SIZES, FONTS } from "../constants";


const Home = () => {
    return (
        <View style={style.container}>
            <Text style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold}}>TRENDING</Text>
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