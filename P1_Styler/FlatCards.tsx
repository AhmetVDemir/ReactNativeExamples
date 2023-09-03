import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={stl.headingText}>FlatCards</Text>
        <View style={stl.container}>
            <View style={[stl.card, stl.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[stl.card, stl.cardTwo]}>
                <Text>Blue</Text>
            </View>
            <View style={[stl.card, stl.cardThree]}>
                <Text>Green</Text>
            </View>
        </View>
    </View>
  )
}

export default FlatCards;


const stl = StyleSheet.create({
    headingText : {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,

    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'20%',
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardOne:{
        backgroundColor:'#EF5354'

    },
    cardTwo:{
        backgroundColor:'#50DBB4'

    },
    cardThree:{
        backgroundColor:'#5DA3FA'

    }

});