import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FloatCards = () => {
  return (
    <View>
      <Text style={styles.headingText} >FloatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]} >
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]} >
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]} >
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

export default FloatCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354'
  },
  cardTwo: {
    backgroundColor: '#50DBB4'
  },
  cardThree: {
    backgroundColor: '#5DA3FA'
  },

})