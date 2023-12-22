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

    },
    card:{

    },
    cardElevated:{

    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardFooter:{

    },
    cardDescription:{

    },
    cardImage:{
        height:180
    }
})