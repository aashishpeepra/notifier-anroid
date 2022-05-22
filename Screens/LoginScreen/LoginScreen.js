import React from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.heading}>stay updated</Text>
        <Text style={styles.description}>
          Get notifications from your software, backend, frontend, SaaS and all
          other places that matters.{' '}
        </Text>
      </View>
      <View style={styles.emoji}>
        <Text style={styles.emoji_text}>🦄</Text>
      </View>
      <View style={styles.button_box}>
        <Button
          title="Sign in with Google"
          style={styles.button}
          onPress={() => console.log('Preesssed')}
          color="#00ff00"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    paddingBottom: 15,
    display: 'flex',
    marginHorizontal: 16,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '700',
    color: '#111111',
    fontSize: 20,
    lineHeight: 27,
    marginVertical: 32,
  },
  description: {
    color: '#8A8383',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    marginBottom: 72,
    textAlign: 'center',
  },
  emoji: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 96,
  },
  emoji_text: {
    fontSize: 96,
  },
});

export default LoginScreen;
