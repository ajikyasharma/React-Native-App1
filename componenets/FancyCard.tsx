import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]} >
        <Image 
           source={{
            uri:'https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG'
           }}
           style={styles.cardImage}
        />
        <View style={styles.cardBody} >
            <Text style={styles.cardTitle} >Hawa Mahal</Text>
            <Text style={styles.cardLabel} >Pink City</Text>
            <Text style={styles.cardDescription} >The Hawa Mahal is a place in the city of Jaipur, India. Build from
                red and Pink sandstone, it is the edge of the city palace.
            </Text>
            <Text style={styles.cardFooter} >12 min away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card:{
       width: 350,
       height: 360,
       borderRadius: 6,
       marginVertical: 12,
       marginHorizontal: 16,
    },
    cardElevated:{
         backgroundColor: 'white',
         elevation: 3,
         shadowOffset: {
          width:1,
          height:1
         }
    },
    cardImage:{
        height: 180,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,


    },
    cardBody:{
       flex:1,
       flexGrow:1,
       paddingHorizontal :12,
    },
    cardTitle:{
         color:'black',
         fontSize: 22,
         fontWeight: 'bold',
         marginBottom: 4
    },
    cardLabel:{
       color:'#242B2E',
       fontSize: 14,
       marginBottom: 6,
    },
    cardDescription:{
        color:'black',
        fontSize: 12,
        marginBottom: 12,
        marginTop:6,
        flexShrink: 1,
    },
    cardFooter:{
       color:'black'
    }
})