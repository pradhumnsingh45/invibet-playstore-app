import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { baseColors } from '../../../constants/colors'
import { BettingTopBar } from '../../../components/betting/topBar'
import { hp, wp } from '../../../Utils/dimension'
import { RFValue } from 'react-native-responsive-fontsize'


export default function AboutUs() {
  return (
    <View style={{ flex: 1, backgroundColor: baseColors.white }} >
      <BettingTopBar title={'Tychee'} noIcons />
      {/* <WebView source={{ uri: 'https://tychee.in' }} style={{ flex:1}} /> */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingHorizontal: wp(5), justifyContent: 'center' }} >
        <Text style={styles.description}>
          Welcome to <Text style={styles.highlight}>Tychee</Text>, the ultimate fitness and rewards app!
          We believe that staying active should be fun and rewarding. Join walking pools,
          compete with others, and earn points based on your steps.
          The more you walk, the more you win! Whether you're a fitness enthusiast
          or just getting started, our app keeps you motivated with exciting
          challenges and real rewards. Start stepping, start winning!
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    color: '#555',
    paddingHorizontal: 10,
  },
  highlight: {
    fontWeight: 'bold',
    color: baseColors.purple, // Customize the color to match your app theme
  }
})