import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native';

const ElevatedCard = () => {
  return (
   <View>
    <Text style={stl.headingText}>Elevated Card</Text>
    <ScrollView horizontal={true} style={stl.container}>
        <View style={[stl.card, stl.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[stl.card, stl.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[stl.card, stl.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[stl.card, stl.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[stl.card, stl.cardElevated]}>
            <Text>more..</Text>
        </View>
        <View style={[stl.card, stl.cardElevated]}>
            <Text>:D</Text>
        </View>
    </ScrollView>
   </View>
  )
}

export default ElevatedCard;

const stl = StyleSheet.create({

    headingText : {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        flex:1,
        alignItems : 'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        color: '#000000'

    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset: {
            width:1,
            height:1,

        },
        shadowColor:'#333333',
        shadowOpacity:0.4,
        shadowRadius:2,
    },
    container: {
        padding:8,

    }
});