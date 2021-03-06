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
            price: "$250",
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

    const [recentSearches, setRecentSearch] = React.useState([
        {
            id: 0,
            name: "Jacket 4",
            img: images.jacket4,
            bgColor: "#D09040",
            price: "$250",
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
        },
        {
            id: 3,
            name: "Hat 1",
            img: images.hat1,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 16],
        },
        {
            id: 4,
            name: "Shirt 1",
            img: images.shirt1,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 16],
        },
        {
            id: 5,
            name: "Shirt 2",
            img: images.shirt2,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 16],
        },
        {
            id: 6,
            name: "Shoe 1",
            img: images.shoe1,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 12],
        },
        {
            id: 7,
            name: "Sweater 3",
            img: images.sweater3,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 16, 18],
        },
        {
            id: 8,
            name: "Sweater 5",
            img: images.sweater5,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 18],
        }
    ])

    function renderRecentSearches(item, index){
        return(
            <TouchableOpacity
            style = {{flex: 1, flexDirection: "row"}}
            onPress= {() => {console.log("renderRecentSearches")}}
            >
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Image
                source = {item.img}
                resizeMode = "contain"
                style = {{
                    width: 130,
                    height: 100,
                }}
                />
            </View>
            <View style={{
                flex: 1.5,
                marginLeft: SIZES.radius,
                justifyContent: "center",
            }}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    function renderFeaturedItems(item, index){
        return(
            <TouchableOpacity 
            style={{height: 300, width: 200, justifyContent: "center", marginHorizontal: SIZES.base }}
            >
                <Text style={{color: COLORS.lightGray, ...FONTS.h5}}>{item.type}</Text>
                <View style={[{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginTop: SIZES.base,
                    borderRadius: 10,
                    marginRight: SIZES.padding,
                    backgroundColor: item.bgColor,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,

                }, style.featuredShadow ]}>
                    <View style={style.featuredDetails}>
                        <Text style={{color: COLORS.white, ...FONTS.body4, marginTop: 15}}>{item.name}</Text>
                        <Text style={{color: COLORS.white, ...FONTS.h2}}>{item.price}</Text>
                    </View>
                </View>
                <Image 
                source={item.img} 
                resizeMode="cover"
                style = {{
                    position: "absolute",
                    top: 25,
                    right: 20,
                    width: "90%",
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
            {/* Recent Serches */}
            <View style={[{
                flex: 1, 
                flexDirection: "row",
                marginTop: SIZES.padding, 
                borderTopLeftRadius: 30, 
                borderTopRightRadius: 30,
                backgroundColor: COLORS.white}, 
                style.recentSearchShadow]
                }>
                <View style={{width: 70, height: "100%", marginLeft: SIZES.base, backgroundColor: COLORS.lightGray}}>
                </View>
                <View style={{flex: 1, paddingBottom: SIZES.padding}}>
                    <FlatList 
                    showsVerticalScrollIndicator = {false}
                    data = {recentSearches}
                    keyExtractor = {item => item.id.toString()}
                    renderItem = {({item, index}) => renderRecentSearches(item, index)}
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    featuredShadow: {
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    featuredDetails: {
        position: "absolute",
        top: 160,
        left: 30,
        flexDirection: "column",
        marginLeft: 25,
        marginBottom: 8,
    },
    recentSearchShadow:{
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65, 
        elevation: 7
    }
})

export default Home;