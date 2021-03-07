import React from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Modal} from "react-native";
import { images, COLORS, SIZES, FONTS } from "../constants";
import {BlurView} from "@react-native-community/blur";


const Home = () => {
    const [showAddToCartModal, setShowAddToCartModal] = React.useState(false);
    const [selectItem, setSelectedItem] =  React.useState(null);
    const [selectedSize, setSelectedSize] = React.useState("");

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
            name: "Sweater 3",
            img: images.sweater3,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 16, 18],
        },
        {
            id: 2,
            name: "Sweater 5",
            img: images.sweater5,
            type: "Featured",
            bgColor: "#303946",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 18],
        },
        {
            id: 7,
            name: "Jacket 1",
            img: images.jacket1,
            bgColor: "#D3D1C8",
            type: "Featured",
            price: "$150" ,
            sizes: [6, 7, 8, 9, 10, 12],
        },
        {
            id: 8,
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
            bgColor: "#ffffff",
            price: "$100" ,
            sizes: [6, 7, 8, 9, 10, 12],
        },
        
    ])

    function renderFeaturedItems(item, index){
        return(
            <TouchableOpacity 
            style={{height: 300, width: 200, justifyContent: "center", marginHorizontal: SIZES.base }}
            onPress={() => {
                setSelectedItem(item);
                setShowAddToCartModal(true);
            }}
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

    function renderRecentSearches(item, index){
        return(
            <TouchableOpacity
            style = {{flex: 1, flexDirection: "row"}}
            onPress= {() => {
                setSelectedItem(item);
                setShowAddToCartModal(true);
            }}
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
                <Text style={{...FONTS.h3}}>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <Text style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.h2}}>FEATURED</Text>
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
                <View style={{width: 70, height: "100%", marginLeft: SIZES.base}}>
                    <Image 
                    source={images.searches}
                    style={{width: "100%", height: "100%", resizeMode: "contain"}}
                    />
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

            {/* Modal */}
            { selectItem && 
            <Modal
            animationType = "slide"
            transparent= {true}
            visible =  {showAddToCartModal}
            >
            <BlurView 
            style={style.blur}
                blurType = "light"
                blurAmount = {20}
                reducedTransparencyFallbackColor = "white"
                >
                <TouchableOpacity
                style={style.absolute}
                onPress= {() => {
                    setSelectedItem(null);
                    setSelectedSize("");
                    setShowAddToCartModal(false);
                }}
                >
                </TouchableOpacity>
                {/* Modal content */}
                <View style={{justifyContent: "center", width: "85%", backgroundColor: selectItem.bgColor}}> 
                   <View>
                   <Image
                    source = {selectItem.img}
                    resizeMode = "contain"
                        style = {{
                            width: "100%",
                            height: 170,
                        }} 
                    />
                   </View>
                   <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h2}}>{selectItem.name}</Text>
                   <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectItem.type}</Text>
                   <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectItem.price}</Text>
                   <View style={{ flexDirection: "row", marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
                        <View>
                        <Text style={{color: COLORS.white, ...FONTS.body3}}>Select Size</Text>
                        </View>
                        
                   </View>
                   
                   <TouchableOpacity
                   style={{width: "100%", height: 70, justifyContent:"center", alignItems: "center", marginTop: SIZES.base, backgroundColor: 'rgba(0,0,0,0.5)'}}
                   onPress = {() => {
                    setSelectedItem(null);
                    setSelectedSize("");
                    setShowAddToCartModal(false);
                   }}
                   >
                       <Text style={{color: COLORS.white, ...FONTS.largeTitleBold}}>Add To Cart</Text>
                   </TouchableOpacity>
                </View>
            </BlurView>
            </Modal>

            }
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
    },
    recentSearches: {
        width: "100%",
        transform: [{ rotateY: "180deg" }]
    },
    blur:{
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    },
    absolute:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export default Home;