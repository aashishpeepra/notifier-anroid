import React from 'react';
import { View } from 'react-native';
import Greet from '../../components/Greet/Greet';
import Statistics from '../../components/Statistics/Statistics';
import Contact from "../../components/Contact/Contact"

const HomeScreen = () => {
  return (
    <View>
      <Greet />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: "center",
        }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: "65%",
          justifyContent: "space-between",
        }}>
          <Statistics
            text={'22.7K'}
            description={'events'}
            textColor={'#FF2E80'}
            bgColor={'#FFDDEB'}
          />
          <Statistics
            text={'Urlefy'}
            description={'top source'}
            textColor={'#FBBC05'}
            bgColor={'#FEF2CD'}
          />
        </View>
      </View>
      <Contact />
    </View>
  );
};

export default HomeScreen;
