import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={stl.headingText}>Trending places</Text>

      <View style={[stl.card,stl.cardElevated]}>

            <Image source={{
                uri:'https://upload.wikimedia.org/wikipedia/commons/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg'
            }} 
            style={stl.cardImage}/>
            <View style={stl.cardBody}>
                <Text style={stl.cardTitle}> Hawa Mahal </Text>
                <Text style={stl.cardLabel}> Purple City </Text>
                <Text style={stl.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id numquam possimus repellendus molestiae, ipsa facilis. Atque officiis dolores non, harum cupiditate illum voluptas aspernatur nemo iste aliquid ea rerum?    
                </Text>
                <Text style={stl.cardFooter}>This is a footer</Text>
            </View>


      </View>
    </View>
  )
}

const stl = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8,
    },
    card:{
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16,
    },
    cardElevated:{
      backgroundColor:'#FFFFFF',
      color:'#000000',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      }

    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12,

    },
    cardTitle:{
      color:'#000000',
      fontSize:22,
      fontWeight:'bold',
      marginBottom:6,

    },
    cardLabel:{
      color:'#000000',
      fontSize:14,
      marginBottom:6,
    },
    cardFooter:{
      color:'#000000'
    },
    cardDescription:{
      color:'#242B2E',
      fontSize:12,
      marginBottom:12,
      marginTop:8,
      flexShrink:1
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6

    }
})