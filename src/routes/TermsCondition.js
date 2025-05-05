import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BettingTopBar } from '../components/betting/topBar'
import WebView from 'react-native-webview'
import { baseColors } from '../constants/colors'

export default function TermsCondition() {
  return (
    <View style={{flex:1,backgroundColor:baseColors.white}} >
      <BettingTopBar title={'Terms & Conditions'} noIcons />
      {/* <WebView source={{ uri: 'https://tychee.in/f/terms-and-conditions' }} style={{ flex:1}} /> */}
      <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Terms and Conditions</Text>

            <Text style={styles.sectionTitle}>Account Registration</Text>
            <Text style={styles.description}>
                To access certain features, you may need to create an account. You are responsible for keeping your login details secure.
            </Text>

            <Text style={styles.sectionTitle}>Steps and Points System</Text>
            <Text style={styles.description}>
                - Points are awarded based on the number of steps tracked.{'\n'}
                - Winning pools will earn extra points.{'\n'}
                - Any form of cheating, including artificial step tracking, will lead to disqualification.
            </Text>

            <Text style={styles.sectionTitle}>Rewards and Payouts</Text>
            <Text style={styles.description}>
                - Points cannot be redeemed as per the app's rewards system.{'\n'}
                - We reserve the right to modify the points and rewards structure at any time.
            </Text>

            <Text style={styles.sectionTitle}>Fair Play & Community Guidelines</Text>
            <Text style={styles.description}>
                Users must participate fairly and respectfully. Any misuse, such as fraudulent step tracking or inappropriate behavior, may result in suspension or account termination.
            </Text>

            <Text style={styles.sectionTitle}>Liability & Disclaimers</Text>
            <Text style={styles.description}>
                Tychee is not responsible for any injuries or health issues that may arise while participating in challenges. Please consult a physician before engaging in physical activities.
            </Text>

            <Text style={styles.sectionTitle}>Privacy & Data Usage</Text>
            <Text style={styles.description}>
                By using the app, you agree to our Privacy Policy regarding data collection, including step tracking and activity logs, to improve your experience.
            </Text>

            <Text style={styles.sectionTitle}>Changes to Terms</Text>
            <Text style={styles.description}>
                We may update these Terms and Conditions from time to time. Continued use of the app signifies acceptance of the latest version.
            </Text>

            <Text style={styles.contact}>For any questions, contact us at <Text style={styles.email}>tychee.connect@gmail.com</Text>.</Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
},
title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
},
sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#222',
},
description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginTop: 5,
},
contact: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: '#444',
},
email: {
    color: '#007bff',
    fontWeight: 'bold',
}
})