import React, { useEffect } from 'react';
import Notification from '../../components/Notification/Notification';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

// import messaging from '@react-native-firebase/messaging';

// useEffect(() => {
//   console.log(messaging);
//   messaging()
//     .getToken()
//     .then(token => console.log(token));
// }, []);

const StatsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Notification
          icon={'🦄'}
          heading={'New User signed up'}
          description={
            'Aashish created a new account using Urlefy. Time to party'
          }
          date={'Today, 2:34 AM'}
        />
        <Notification
          icon={'💀'}
          heading={'Go damn it!'}
          description={
            'Error in random route creation. System crashed 10 times.'
          }
          date={'Yesterday, 11:32PM'}
        />
        <Notification
          icon={'🔗'}
          heading={'The actual fuck, you did it'}
          description={
            '100 new links shortened! Sounds like a time to party right?'
          }
          date={'Yesterday, 6:22PM'}
        />
        <Notification
          icon={'🦄'}
          heading={'New User signed up'}
          description={
            'Aashish created a new account using Urlefy. Time to party'
          }
          date={'Today, 2:34 AM'}
        />
        <Notification
          icon={'💀'}
          heading={'Go damn it!'}
          description={
            'Error in random route creation. System crashed 10 times.'
          }
          date={'Yesterday, 11:32PM'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FF2E80',
    paddingBottom: 15,
  },
});

export default StatsScreen;