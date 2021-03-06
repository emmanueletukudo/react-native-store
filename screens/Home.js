import React from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from "react-native";
import { images, COLORS, SIZES, FONTS } from "../constants";


const Home = () => {
    const [featured, setFeatured] =  React.useState([
        {
            id: 0,
            name: "Jacket 4",
            img: images.jacket4,
            bgColor: "#D09040",
            price: "$50",
            type: "Featured",
            sizes: [6, 7, 8, 9, 10, 16],
        },
        {
            id: 1,
            name: "Jacket 1",
            img: images.jacket1,
            bgColor: "#D3D1C8",
            type: "Featured",
            price: "$150" ,
            sizes: [6, 7, 8, 9, 10, 12],
        },
        {
            id: 2,
            name: "Jacket 2",
            img: images.jacket2,
            type: "Featured",
            bgColor: "#303946",
            price: "$160" ,
            sizes: [6, 7, 8, 9, 10],
        }
    ])

    function renderFeaturedItems(item, index){
        return(
            <TouchableOpacity 
            style={{height: 300, width: 200, justifyContent: "center", marginHorizontal: SIZES.base }}
            >
                <Text style={{color: COLORS.lightGray, ...FONTS.h5}}>{item.type}</Text>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginTop: SIZES.base,
                    borderRadius: 10,
                    marginRight: SIZES.padding,
                    backgroundColor: item.bgColor,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,

                }}>
                    <View style={{height: '25%', justifyContent: "space-between"}}>
                        <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
                        <Text style={{color: COLORS.white, ...FONTS.h4}}>{item.price}</Text>
                    </View>
                </View>
                <Image 
                source={item.img} 
                resizeMode="cover"
                style = {{
                    position: "absolute",
                    top: 30,
                    right: 10,
                    width: "100%",
                    height: 200,

                }}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <Text style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold}}>FEATURED</Text>
            {/* Featured */}
            <View style={{height: 260, marginTop: SIZES.radius}}>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={featured}
                keyExtractor={item => item.id.toString()}
                renderItem ={({item, index}) => renderFeaturedItems(item, index)}
                />

            </View>
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