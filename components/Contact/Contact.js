import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.contact}>
      <Text style={styles.text}>
        More analytics are going to be added soon. If you need anyting specific
        click on the link below and let us know
      </Text>
      <Text style={styles.link}>@aashishpeepra</Text>
      <Text style={styles.link}>@adarshsrivastava</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    backgroundColor: '#fff',
    fontSize: 14,
    lineHeight: 20,
    color: '#8a8383',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontWeight: '400',
    marginTop: 25,
    marginHorizontal: 19
  },
  text: {
    marginBottom: 16,
  },
  link: {
    color: '#ff2e80',
    marginBottom: 4
  },
});

export default Contact;
