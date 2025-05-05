// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { BettingTopBar } from '../components/betting/topBar'
// import WebView from 'react-native-webview'
// import { baseColors } from '../constants/colors'

// export default function HelpCenter() {
//   return (
//     <View style={{flex:1,backgroundColor:baseColors.white}} >
//       <BettingTopBar title={'Tychee'} noIcons />
//       <WebView source={{ uri: 'https://tychee.in' }} style={{ flex:1}} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { BettingTopBar } from '../components/betting/topBar';

const HelpCenter = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:tychee.connect@gmail.com');
  };

  return (
    <>
   
 <BettingTopBar title={'Help Center'} noIcons />
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>Welcome to the Tychee Help Center! We're here to assist you with any questions, issues, or feedback.</Text>

      <Text style={styles.sectionTitle}>🔧 Troubleshooting</Text>
      <Text style={styles.bullet}>• App not opening or crashing</Text>
      <Text style={styles.tip}>- Update the app to the latest version</Text>
      <Text style={styles.tip}>- Restart your device</Text>
      <Text style={styles.tip}>- Check for system updates</Text>

      <Text style={styles.bullet}>• Not receiving notifications</Text>
      <Text style={styles.tip}>- Ensure notifications are enabled</Text>
      <Text style={styles.tip}>- Turn off Do Not Disturb mode</Text>
      <Text style={styles.tip}>- Log out and log back in</Text>

      <Text style={styles.bullet}>• Bluetooth issues</Text>
      <Text style={styles.tip}>- Restart Bluetooth and the app</Text>
      <Text style={styles.tip}>- Ensure device is nearby and charged</Text>

      <Text style={styles.sectionTitle}>📖 FAQs</Text>
      <Text style={styles.q}>Q1: What is Tychee?</Text>
      <Text style={styles.a}>A: Tychee is a fitness gamification app that rewards users for their daily effort and movement. You can participate in virtual pools, complete challenges, and earn real money rewards.</Text>

      <Text style={styles.q}>Q2: Can I use Tychee with other fitness bands?</Text>
      <Text style={styles.a}>A: No, currently Tychee only works with its partnered fitness bands mentioned on the app and website.</Text>

      <Text style={styles.q}>Q3: How do I contact support?</Text>
      <Text style={styles.a}>A: You can reach out via the Help Center in the app or email us at tychee.connect@gmail.com</Text>


      <Text style={styles.sectionTitle}>💡 Tips for Best Experience</Text>
      <Text style={styles.tip}>- Keep the app updated</Text>
      <Text style={styles.tip}>- Explore settings to personalize your experience</Text>

      <Text style={styles.sectionTitle}>📬 Need More Help?</Text>
      <Text style={styles.subtitle}>Didn't find what you're looking for? We're happy to help you 24/7.</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.email}>📩 tychee.connect@gmail.com</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 20,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginTop: 10,
  },
  tip: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 10,
    marginBottom: 5,
  },
  q: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    color: '#111827',
  },
  a: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#2563EB',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default HelpCenter;
